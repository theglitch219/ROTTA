"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatRelativeTime } from '@/lib/utils'
import { demoActivities } from '@/lib/data/demo-data'
import { ArrowRight, Plus, Filter } from 'lucide-react'

export default function ActivityPage() {
  const activities = [
    { user: 'Sarah Chen', action: 'Contributed', amount: 200, circle: 'Creators Circle', time: '2026-08-18T10:30:00Z' },
    { user: 'David Kim', action: 'Contributed', amount: 200, circle: 'Creators Circle', time: '2026-08-18T09:15:00Z' },
    { user: 'System', action: 'Payout', amount: 1000, circle: 'Builders Circle', time: '2026-08-17T14:00:00Z' },
    { user: 'ROTTA AI', action: 'Recommendation', description: 'Liquidity optimization', circle: 'Creators Circle', time: '2026-08-17T11:00:00Z' },
    { user: 'Maria Garcia', action: 'Joined', circle: 'Innovators Guild', time: '2026-08-16T16:45:00Z' },
  ]

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'Contributed':
        return '💰'
      case 'Payout':
        return '💸'
      case 'Recommendation':
        return '🤖'
      case 'Joined':
        return '👋'
      default:
        return '📌'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F5F7F5]">Activity</h1>
          <p className="text-sm text-[#8C968F]">All activity across your circles</p>
        </div>
        <Badge variant="outline" className="gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#79D900]"></span>
          Live
        </Badge>
      </div>

      <div className="space-y-3">
        {activities.map((activity, i) => (
          <Card key={i} className="border-[#B6FF00]/10 hover:border-[#B6FF00]/30 transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{getActionIcon(activity.action)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#F5F7F5]">{activity.user}</span>
                    <span className="text-sm text-[#8C968F]">{activity.action}</span>
                    {activity.amount && (
                      <span className="text-sm font-medium text-[#B6FF00]">${activity.amount}</span>
                    )}
                    {activity.description && (
                      <span className="text-sm text-[#8C968F]">— {activity.description}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-[#8C968F]">{activity.circle}</span>
                    <span className="text-xs text-[#8C968F]">•</span>
                    <span className="text-xs text-[#8C968F]">{formatRelativeTime(activity.time)}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">Confirmed</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
