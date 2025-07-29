"use client";
import LoadingExample from "@/components/Loader";
import RegistrationTable from "@/components/RegistrationTable";
import { exportToExcel, Registration } from "@/lib/excelExport";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RegistrationList() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<
    Registration[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchRegistrations() {
      try {
        const response = await fetch("/api/registrationsList");
        const data = await response.json();
        setRegistrations(data);
        setFilteredRegistrations(data);
      } catch (error) {
        console.error("Failed to fetch registrations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRegistrations();
  }, []);

  useEffect(() => {
    const filtered = registrations.filter((registration) =>
      Object.values(registration).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRegistrations(filtered);
  }, [searchTerm, registrations]);

  const handleExport = () => {
    exportToExcel(filteredRegistrations, "Registrations");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/delete-registration?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove the deleted registration from both arrays
        setRegistrations((prev) => prev.filter((reg) => reg._id !== id));
        setFilteredRegistrations((prev) =>
          prev.filter((reg) => reg._id !== id)
        );
      } else {
        const error = await response.json();
        alert(`Failed to delete registration: ${error.error}`);
      }
    } catch (error) {
      console.error("Error deleting registration:", error);
      alert("Failed to delete registration. Please try again.");
    }
  };

  const handleConfirmGroup = async (id: string) => {
    if (!confirm("Are you sure you want to confirm this group registration?")) {
      return;
    }

    try {
      const response = await fetch("/api/confirm-group-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ registrationId: id }),
      });

      if (response.ok) {
        // Update the registration status in both arrays
        setRegistrations((prev) =>
          prev.map((reg) =>
            reg._id === id
              ? {
                  ...reg,
                  registrationStatus: "Confirmed",
                  paymentStatus: "Completed",
                }
              : reg
          )
        );
        setFilteredRegistrations((prev) =>
          prev.map((reg) =>
            reg._id === id
              ? {
                  ...reg,
                  registrationStatus: "Confirmed",
                  paymentStatus: "Completed",
                }
              : reg
          )
        );
        alert("Group registration confirmed successfully!");
      } else {
        const error = await response.json();
        alert(
          `Failed to confirm registration: ${error.error || error.message}`
        );
      }
    } catch (error) {
      console.error("Error confirming group registration:", error);
      alert("Failed to confirm group registration. Please try again.");
    }
  };

  if (loading)
    return (
      <div>
        {" "}
        <LoadingExample />
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Registration List</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search registrations..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleExport}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            Export to Excel
          </button>
          <Link href={"/admin/abstractList"}>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              Abstract List
            </button>
          </Link>
        </div>
      </div>
      <RegistrationTable
        registrations={filteredRegistrations}
        onDelete={handleDelete}
        onConfirmGroup={handleConfirmGroup}
      />
    </div>
  );
}
