"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CircleCard } from '@/components/dashboard/circle-card'
import { Plus, Search, Filter } from 'lucide-react'
import { demoCircuits } from '@/lib/data/demo-data'

export default function CirclesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F5F7F5]">Circles</h1>
          <p className="text-sm text-[#8C968F]">Manage your savings circles</p>
        </div>
        <Button className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90">
          <Plus className="mr-2 h-4 w-4" />
          Create Circle
        </Button>
      </div>

      <div className="flex gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C968F]" />
          <input
            type="text"
            placeholder="Search circles..."
            className="w-full rounded-lg border border-[#B6FF00]/10 bg-[#0B110D] pl-9 pr-4 py-2 text-sm text-[#F5F7F5] placeholder:text-[#8C968F] focus:border-[#B6FF00]/30 focus:outline-none"
          />
        </div>
        <Button variant="secondary" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {demoCircuits.map((circle) => (
          <CircleCard
            key={circle.id}
            name={circle.name}
            total={circle.total}
            target={circle.target}
            progress={circle.progress}
            members={circle.members}
            contribution={circle.contribution}
            nextPayout={circle.nextPayout}
            status={circle.status as any}
            yield={circle.yield}
            cycle={circle.cycle}
            totalCycles={circle.totalCycles}
          />
        ))}
      </div>
    </div>
  )
}
