"use client"

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { NavHeader } from '@/components/dashboard/nav-header'
import { cn } from '@/lib/utils'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen bg-[#050705]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className={cn(
        "flex-1 transition-all duration-300",
        sidebarOpen ? "ml-64" : "ml-20"
      )}>
        <NavHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="p-6 pt-20">
          {children}
        </main>
      </div>
    </div>
  )
}
