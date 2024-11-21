import { Plan } from "@/lib/interface";

export const plans: Plan[] = [
  {
    name: "OPF/OBRF Members",
    description: "Includes entry to all sessions and conference kit.",
    earlyBird: 1500,
    regular: 2000,
    spot: 2500,
  },
  {
    name: "Students (UG /PG)",
    description: "Includes entry to all sessions and conference kit.",
    earlyBird: 2124,
    regular: 2200,
    spot: 2600,
  },
  {
    name: "Research Scholars & Faculties",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 2784,
    regular: 2950,
    spot: 3550,
  },
  {
    name: "Industry Professionals",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 3550,
    regular: 4130,
    spot: 4720,
  },
  {
    name: "International Delegates",
    description: "Includes entry to all sessions, conference kit, and lunch.",
    earlyBird: 130 * 83, // Assuming 1 USD = 83 INR
    regular: 150 * 83,
    spot: 180 * 83,
  },
];

export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
