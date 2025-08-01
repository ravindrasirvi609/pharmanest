import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Transaction from "@/Model/TransactionModel";
import Registration from "@/Model/RegistrationModel";
import RegistrationModel from "@/Model/RegistrationModel";
import AbstractModel from "@/Model/AbstractModel";
import { sendEmail } from "@/lib/mailer";
import { whatsappService } from "@/lib/whatsapp";

connect();

export async function POST(req: NextRequest) {
  try {
    const transactionDetails = await req.json();
    const newTransaction = new Transaction({
      razorpayOrderId: transactionDetails.razorpay_order_id,
      razorpayPaymentId: transactionDetails.razorpay_payment_id,
      razorpaySignature: transactionDetails.razorpay_signature,
      amount: transactionDetails.amount,
      currency: transactionDetails.currency,
      status: "completed",
      planName: transactionDetails.planName,
      customerName: transactionDetails.customerName,
      customerEmail: transactionDetails.customerEmail,
      customerPhone: transactionDetails.customerPhone,
    });

    const savedTransaction = await newTransaction.save();

    // Find the corresponding registration and update its payment status
    const registrationCode = await getNextRegistrationCode();

    const updatedRegistration = await Registration.findOneAndUpdate(
      { email: transactionDetails.customerEmail },
      {
        paymentStatus: "Completed",
        paymentAmount: transactionDetails.amount,
        paymentDate: new Date(),
        transactionId: savedTransaction._id,
        registrationStatus: "Confirmed",
        registrationCode,
      },
      { new: true, sort: { createdAt: -1 } } // Assuming 'createdAt' is the field to sort by. Use 'updatedAt' if that's more appropriate.
    );

    if (updatedRegistration && updatedRegistration.abstractId) {
      try {
        await AbstractModel.findByIdAndUpdate(updatedRegistration.abstractId, {
          registrationCompleted: true,
          registrationCode: updatedRegistration.registrationCode,
        });
      } catch (error) {
        console.error("Failed to update Abstract Model:", error);
        return NextResponse.json(
          { error: "Failed to update Abstract" },
          { status: 500 }
        );
      }
    }

    if (!updatedRegistration) {
      console.error(
        "No matching registration found for email:",
        transactionDetails.customerEmail
      );
      return NextResponse.json(
        { error: "No matching registration found" },
        { status: 404 }
      );
    }

    await sendEmail({
      emailType: "REGISTRATION_SUCCESS",
      _id: updatedRegistration._id,
    });

    // Send WhatsApp message for registration success
    try {
      if (updatedRegistration.whatsappNumber) {
        await whatsappService.sendRegistrationSuccessMessage(
          updatedRegistration.whatsappNumber,
          updatedRegistration.name,
          updatedRegistration.registrationCode,
          transactionDetails.planName
        );

        // // Also send payment confirmation message
        // await whatsappService.sendPaymentConfirmationMessage(
        //   updatedRegistration.whatsappNumber,
        //   updatedRegistration.name,
        //   transactionDetails.amount,
        //   transactionDetails.razorpay_payment_id
        // );
      }
    } catch (whatsappError) {
      console.error("Failed to send WhatsApp message:", whatsappError);
      // Don't fail the entire request if WhatsApp fails
    }

    return NextResponse.json(
      {
        transaction: savedTransaction,
        registration: updatedRegistration,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to save transaction or update registration:", error);
    return NextResponse.json(
      { error: "Failed to save transaction or update registration" },
      { status: 500 }
    );
  }
}

async function getNextRegistrationCode(): Promise<string> {
  const lastRegistration = await RegistrationModel.findOne().sort({
    registrationCode: -1,
  });

  if (!lastRegistration || !lastRegistration.registrationCode) {
    return "P1201";
  }

  const lastNumber = parseInt(lastRegistration.registrationCode.slice(1), 10);
  const nextNumber = lastNumber + 1;
  return `P${nextNumber.toString().padStart(4, "0")}`;
}
