"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatRelativeTime } from "@/lib/utils"
import { RefreshCw, Filter } from "lucide-react"

// Exten
const initialActivities = [
  { id: 1, user: 'Sarah Chen', action: 'Contributed', amount: 200, circle: 'Creators Circle', time: new Date(Date.now() - 2 * 60 * 60 * 1000), status: 'confirmed' },
  { id: 2, user: 'David Kim', action: 'Contributed', amount: 200, circle: 'Creators Circle', time: new Date(Date.now() - 4 * 60 * 60 * 1000), status: 'confirmed' },
  { id: 3, user: 'System', action: 'Payout', amount: 1000, circle: 'Builders Circle', time: new Date(Date.now() - 24 * 60 * 60 * 1000), status: 'confirmed' },
  { id: 4, user: 'ROTTA AI', action: 'Recommendation', description: 'Liquidity optimization', circle: 'Creators Circle', time: new Date(Date.now() - 30 * 60 * 60 * 1000), status: 'pending' },
  { id: 5, user: 'Maria Garcia', action: 'Joined', circle: 'Innovators Guild', time: new Date(Date.now() - 48 * 60 * 60 * 1000), status: 'confirmed' },
]

export default function ActivityPage() {
  const [activities, setActivities] = useState(initialActivities)
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = () => {
    setRefreshing(true)
    setTimeout(() => {
      // Add a new activity
      setActivities(prev => [{
        id: Date.now(),
        user: 'System',
        action: 'Update',
        description: 'New contribution recorded',
        circle: 'Innovators Guild',
        time: new Date(),
        status: 'confirmed'
      }, ...prev])
      setRefreshing(false)
    }, 1000)
  }

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'Contributed': return '💰'
      case 'Payout': return '💸'
      case 'Recommendation': return '🤖'
      case 'Joined': return '👋'
      default: return '📌'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F5F7F5]">Activity</h1>
          <p className="text-sm text-[#8C968F]">All activity across your circles</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          </Button>
          <Button variant="secondary" size="sm">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <Card key={activity.id} className="border-[#B6FF00]/10 hover:border-[#B6FF00]/30 transition-all">
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{getActionIcon(activity.action)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
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
                <Badge variant={activity.status === 'confirmed' ? 'success' : 'warning'}>
                  {activity.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
        }
