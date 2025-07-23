import Link from "next/link";
import React from "react";

interface Registration {
  _id: string;
  name: string;
  email: string;
  registrationType: string;
  paymentStatus: string;
  registrationStatus: string;
  createdAt: string;
  registrationCode: string;
  affiliation: string;
  whatsappNumber: string;
  includeGalaDinner: boolean;
}

interface RegistrationTableProps {
  registrations: Registration[];
  onDelete?: (id: string) => void;
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({
  registrations,
  onDelete,
}) => {
  const handleDelete = async (id: string, paymentStatus: string) => {
    // Prevent deletion if payment is completed
    if (paymentStatus === "Completed") {
      alert("Cannot delete registration with completed payment status");
      return;
    }

    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2">Regn ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Registration Type</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">College Name</th>
            <th className="px-4 py-2">Mobile No.</th>
            <th className="px-4 py-2">Regn Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length === 0 ? (
            <tr>
              <td colSpan={9} className="px-4 py-2 text-center">
                No matching registrations found.
              </td>
            </tr>
          ) : (
            registrations.map((registration) => (
              <tr
                key={registration._id}
                className={`border-b hover:bg-light text-black ${
                  registration.includeGalaDinner ? "bg-pink-200" : ""
                }`}
              >
                <td className="px-4 py-2">{registration.registrationCode}</td>
                <td className="px-4 py-2">
                  <Link href={`/abstractForm/${registration._id}`}>
                    {registration.name}
                  </Link>
                </td>
                <td className="px-4 py-2">{registration.email}</td>
                <td className="px-4 py-2">{registration.registrationType}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded ${getPaymentStatusColor(
                      registration.paymentStatus
                    )}`}
                  >
                    {registration.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-2">{registration.affiliation}</td>
                <td className="px-4 py-2">{registration.whatsappNumber}</td>
                <td className="px-4 py-2">
                  {new Date(registration.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleDelete(registration._id, registration.paymentStatus)
                    }
                    disabled={registration.paymentStatus === "Completed"}
                    className={`px-3 py-1 rounded text-sm ${
                      registration.paymentStatus === "Completed"
                        ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                    title={
                      registration.paymentStatus === "Completed"
                        ? "Cannot delete - Payment completed"
                        : "Delete Registration"
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

function getPaymentStatusColor(status: string): string {
  switch (status) {
    case "Completed":
      return "bg-primary text-white";
    case "Pending":
      return "bg-yellow-500 text-white";
    case "Failed":
      return "bg-danger text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

export default RegistrationTable;
