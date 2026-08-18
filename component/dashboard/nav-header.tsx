"use client"

import { Button } from '@/components/ui/button'
import { Menu, Bell, Wallet, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavHeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function NavHeader({ sidebarOpen, setSidebarOpen }: NavHeaderProps) {
  return (
    <header className="fixed right-0 top-0 z-30 flex h-16 items-center justify-between border-b border-[#B6FF00]/10 bg-[#050705]/80 backdrop-blur-xl px-4 transition-all duration-300" 
      style={{ left: sidebarOpen ? '16rem' : '5rem' }}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#8C968F]">Dashboard</span>
          <span className="text-[#B6FF00]">/</span>
          <span className="text-[#F5F7F5]">Overview</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-[#8C968F]" />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-[#B6FF00]"></span>
        </Button>
        
        <Button variant="secondary" size="sm" className="gap-2 border border-[#B6FF00]/10">
          <Wallet className="h-4 w-4 text-[#B6FF00]" />
          <span className="text-xs">0x7A8...F9A</span>
          <ChevronDown className="h-3 w-3 text-[#8C968F]" />
        </Button>

        <div className="flex items-center gap-2 rounded-lg bg-[#111A14] p-1.5 pl-3">
          <div className="h-7 w-7 rounded-full bg-[#B6FF00]/20 flex items-center justify-center">
            <span className="text-[#B6FF00] text-xs font-semibold">A</span>
          </div>
          <span className="text-sm font-medium">Alex</span>
        </div>
      </div>
    </header>
  )
}
