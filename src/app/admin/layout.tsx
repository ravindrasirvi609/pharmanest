"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiMenu,
  FiX,
  FiBarChart,
  FiBell,
  FiSettings,
  FiUser,
  FiSearch,
} from "react-icons/fi";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: FiBarChart },
  { name: "Registrations", href: "/admin/registrationList", icon: FiUsers },
  { name: "Abstracts", href: "/admin/abstractList", icon: FiFileText },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Desktop Header */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 z-30 bg-white shadow-lg border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Left side - Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mr-3 flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">P</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PharmaNEST</h1>
                <p className="text-xs text-gray-500">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search registrations, abstracts..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side - Actions and Profile */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <FiBell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <FiSettings className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <FiUser className="h-4 w-4 text-white" />
              </div>
              <div className="text-sm">
                <p className="font-medium text-gray-900">Admin</p>
                <p className="text-gray-500">Administrator</p>
              </div>
            </div>
            <Link
              href="/"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md text-sm font-medium"
            >
              View Site
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:mt-16 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header - Mobile Only */}
        <div className="lg:hidden flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600 border-b border-blue-500">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded-lg mr-3 flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">P</span>
            </div>
            <h1 className="text-lg font-bold text-white">PharmaNEST</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md hover:bg-blue-500 text-white"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div className="mb-6 hidden lg:block">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Navigation
            </h3>
          </div>
          <div className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Stats Card in Sidebar */}
        <div className="hidden lg:block mx-4 mt-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Quick Stats
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Active Users</span>
                <span className="font-medium text-gray-900">1,234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Revenue</span>
                <span className="font-medium text-green-600">₹45,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to main site - Mobile Only */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4">
          <Link
            href="/"
            className="group flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 transition-all duration-200 hover:shadow-md"
          >
            <FiHome className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" />
            Back to Main Site
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 lg:pt-16">
        {/* Mobile header */}
        <div className="lg:hidden bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              <FiMenu className="h-5 w-5" />
            </button>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md mr-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <h1 className="text-lg font-semibold text-gray-900">
                PharmaNEST
              </h1>
            </div>
            <div className="w-9" /> {/* Spacer */}
          </div>
        </div>

        {/* Page content */}
        <div className="min-h-screen">{children}</div>
      </div>
    </div>
  );
}
