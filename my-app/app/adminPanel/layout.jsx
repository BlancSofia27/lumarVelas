"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/Admin/adminSideBar";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

export default function AdminPanelLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-48" : "ml-0"
        }`}
      >
        <button
          onClick={handleSidebarToggle}
          className="p-4 bg-gray-200 text-gray-800 hover:bg-gray-300"
        >
          {isSidebarOpen ? <ArrowLeftToLine/> : <ArrowRightToLine/>}
        </button>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
