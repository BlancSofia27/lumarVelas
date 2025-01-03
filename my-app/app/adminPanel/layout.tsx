"use client"

import React from "react"
import AdminLayout from "@/components/Admin/adminLayout" // Ajusta la ruta si es necesario

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Envuelve todas las páginas en el layout de administración.
    <AdminLayout>{children}</AdminLayout>
  )
}
