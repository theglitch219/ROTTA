"use client"

import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Users,
  Wallet,
  Bot,
  Award,
  Activity,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Users, label: 'Circles', href: '/circles' },
  { icon: Wallet, label: 'Treasury', href: '/treasury' },
  { icon: Bot, label: 'AI Manager', href: '/ai' },
  { icon: Award, label: 'Reputation', href: '/reputation' },
  { icon: Activity, label: 'Activity', href: '/activity' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: PlusCircle, label: 'Create Circle', href: '/circles/create', highlight: true },
]

export function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-[#0B110D] border-r border-[#B6FF00]/10 transition-all duration-300",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-[#B6FF00]/10">
        <div className={cn("flex items-center gap-2", !open && "justify-center w-full")}>
          <div className="h-8 w-8 rounded bg-[#B6FF00] flex items-center justify-center flex-shrink-0">
            <span className="text-[#050705] font-bold text-sm">R</span>
          </div>
          {open && (
            <span className="text-xl font-bold tracking-tight text-white">ROTTA</span>
          )}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={cn(
            "rounded-lg p-1 hover:bg-[#111A14] transition",
            !open && "hidden"
          )}
        >
          <ChevronLeft className="h-4 w-4 text-[#8C968F]" />
        </button>
      </div>

      <nav className="p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200",
                isActive
                  ? "bg-[#B6FF00]/10 text-[#B6FF00]"
                  : "text-[#8C968F] hover:bg-[#111A14] hover:text-[#F5F7F5]",
                !open && "justify-center px-2"
              )}
            >
              <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-[#B6FF00]")} />
              {open && <span>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#B6FF00]/10">
        <div className={cn(
          "flex items-center gap-3 rounded-lg bg-[#111A14] p-3",
          !open && "justify-center"
        )}>
          <div className="h-8 w-8 rounded-full bg-[#B6FF00]/20 flex items-center justify-center">
            <span className="text-[#B6FF00] text-sm font-semibold">A</span>
          </div>
          {open && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#F5F7F5]">Alex Morgan</p>
              <p className="text-xs text-[#8C968F] truncate">0x7A8...F9A</p>
          </
