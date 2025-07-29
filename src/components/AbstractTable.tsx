import React, { useState, useCallback } from "react";
import Link from "next/link";
import { Download, MoreVertical } from "lucide-react";
import { Abstract } from "@/lib/excelExport";
import RejectPopup from "./RejectPopup";
import { designationOptions } from "@/app/data";

interface Filters {
  Status: string;
  search: string;
  sortBy: keyof Abstract;
  sortOrder: "asc" | "desc";
}

interface AbstractTableProps {
  abstracts: Abstract[];
  loading: boolean;
  error: string | null;
  filters: Filters;
  handleStatusUpdate: (
    abstractId: string,
    newStatus: string,
    comment?: string,
    presentationType?: string
  ) => Promise<void>;
}

const AbstractTable: React.FC<AbstractTableProps> = ({
  abstracts,
  loading,
  error,
  handleStatusUpdate,
}) => {
  // Filter out abstracts with status "Delete"
  const filteredAbstracts = abstracts.filter(
    (abstract) => abstract.Status !== "Delete"
  );

  const [rejectPopup, setRejectPopup] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });
  const [presentationTypePopup, setPresentationTypePopup] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });

  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    abstractId: string | null;
  }>({
    isOpen: false,
    abstractId: null,
  });

  const handleDownload = useCallback((abstract: Abstract) => {
    window.open(abstract.abstractFileUrl, "_blank");
  }, []);

  const getDesignationLabel = useCallback((value: string) => {
    const designation = designationOptions.find(
      (option: { value: string; label: string }) => option.value === value
    );
    return designation ? designation.label : "Unknown Designation";
  }, []);

  const handleStatusUpdateClick = useCallback(
    (abstract: Abstract, newStatus: string) => {
      if (newStatus === "Revision") {
        setRejectPopup({ isOpen: true, abstractId: abstract._id });
      } else if (newStatus === "Accepted") {
        setPresentationTypePopup({ isOpen: true, abstractId: abstract._id });
      } else {
        handleStatusUpdate(abstract._id, newStatus);
      }
      setStatusModal({ isOpen: false, abstractId: null });
    },
    [handleStatusUpdate]
  );

  const handleReject = useCallback(
    async (comment: string) => {
      if (rejectPopup.abstractId) {
        await handleStatusUpdate(rejectPopup.abstractId, "Revision", comment);
        setRejectPopup({ isOpen: false, abstractId: null });
      }
    },
    [rejectPopup.abstractId, handleStatusUpdate]
  );

  const SkeletonLoader = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-4"></div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="h-16 bg-gray-300 rounded mb-2"></div>
      ))}
    </div>
  );

  const CustomModal = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4">{title}</h2>
          {children}
          <button
            onClick={onClose}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const PresentationTypePopup = () => (
    <CustomModal
      isOpen={presentationTypePopup.isOpen}
      onClose={() =>
        setPresentationTypePopup({ isOpen: false, abstractId: null })
      }
      title="Select Presentation Type"
    >
      <select
        className="w-full p-2 border rounded mb-4 text-black"
        onChange={(e) => {
          if (presentationTypePopup.abstractId) {
            handleStatusUpdate(
              presentationTypePopup.abstractId,
              "Accepted",
              undefined,
              e.target.value
            );
            setPresentationTypePopup({ isOpen: false, abstractId: null });
          }
        }}
      >
        <option value="" className="text-black">
          Select a type
        </option>
        <option value="Oral">Oral</option>
        <option value="E-Poster">E-Poster</option>
      </select>
    </CustomModal>
  );

  const StatusChangeModal = () => (
    <CustomModal
      isOpen={statusModal.isOpen}
      onClose={() => setStatusModal({ isOpen: false, abstractId: null })}
      title="Change Status"
    >
      <div className="grid gap-4">
        {["Pending", "InReview", "Revision", "Accepted", "Delete"].map(
          (status) => (
            <button
              key={status}
              onClick={() => {
                if (statusModal.abstractId) {
                  const abstract = filteredAbstracts.find(
                    (a) => a._id === statusModal.abstractId
                  );
                  if (abstract) {
                    handleStatusUpdateClick(abstract, status);
                  }
                }
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              {status}
            </button>
          )
        )}
      </div>
    </CustomModal>
  );

  if (loading) return <SkeletonLoader />;
  if (error)
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl mb-4">Oops! Something went wrong.</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Retry
        </button>
      </div>
    );

  return (
    <>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-900 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Subject</th>
            <th className="py-3 px-6 text-left">Author</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">WhatsApp</th>
            <th className="py-3 px-6 text-left">Temporary Abstract Code</th>
            <th className="py-3 px-6 text-left">Final Abstract Code</th>
            <th className="py-3 px-6 text-left">Designation</th>
            <th className="py-3 px-6 text-left">Article Type</th>
            <th className="py-3 px-6 text-left">Registration Status</th>
            <th className="py-3 px-6 text-left">Registration Code</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {filteredAbstracts.map((abstract) => (
            <tr
              key={abstract._id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {abstract.subject}
              </td>
              <td className="py-3 px-6 text-left">
                <Link
                  href={`/abstractForm/${abstract._id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {abstract.name}
                </Link>
              </td>
              <td className="py-3 px-6 text-left">{abstract.email}</td>
              <td className="py-3 px-6 text-left">
                {abstract.whatsappNumber ? (
                  <a
                    href={`https://wa.me/${abstract.whatsappNumber.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium underline flex items-center gap-1"
                    title="Open WhatsApp chat"
                  >
                    {abstract.whatsappNumber}
                  </a>
                ) : (
                  <span className="text-gray-400">Not provided</span>
                )}
              </td>
              <td className="py-3 px-6 text-left">
                {abstract.temporyAbstractCode}
              </td>
              <td className="py-3 px-6 text-left">{abstract.AbstractCode}</td>
              <td className="py-3 px-6 text-left">
                {getDesignationLabel(abstract.designation)}
              </td>
              <td className="py-3 px-6 text-left">{abstract.articleType}</td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    abstract.registrationCompleted
                      ? "bg-green-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {abstract.registrationCompleted ? "Complete" : "Incomplete"}
                </span>
              </td>
              <td className="py-3 px-6 text-left">
                {abstract.registrationCode || "-"}
              </td>
              <td className="py-3 px-6 text-left">
                <span
                  className={`py-1 px-3 rounded-full text-xs ${
                    abstract.Status === "Accepted"
                      ? "bg-green-500 text-white"
                      : abstract.Status === "Revision"
                      ? "bg-red-500 text-white"
                      : abstract.Status === "InReview"
                      ? "bg-blue-500 text-white"
                      : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {abstract.Status}
                </span>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button
                    onClick={() => handleDownload(abstract)}
                    className="bg-green-500 hover:bg-green-700 text-white rounded-full p-2 mx-1"
                    title="Download"
                  >
                    <Download size={16} />
                  </button>

                  <button
                    onClick={() =>
                      setStatusModal({ isOpen: true, abstractId: abstract._id })
                    }
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 mx-1"
                    title="More Actions"
                  >
                    <MoreVertical size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RejectPopup
        isOpen={rejectPopup.isOpen}
        onClose={() => setRejectPopup({ isOpen: false, abstractId: null })}
        onReject={handleReject}
      />
      <PresentationTypePopup />
      <StatusChangeModal />
    </>
  );
};

export default AbstractTable;
