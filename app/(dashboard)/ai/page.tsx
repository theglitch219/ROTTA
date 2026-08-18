"use client"

import { AIInsightCard } from '@/components/dashboard/ai-insight-card'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Bot, Sparkles, Clock, CheckCircle, AlertTriangle, Activity } from 'lucide-react'
import { formatRelativeTime } from '@/lib/utils'
import { demoAIRecommendations } from '@/lib/data/demo-data'

export default function AIPage() {
  const recentDecisions = [
    { action: 'Liquidity optimization', result: 'Approved', time: '2h ago' },
    { action: 'Yield deployment', result: 'Rejected', time: '1d ago' },
    { action: 'Member overdue alert', result: 'Sent', time: '3d ago' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F5F7F5]">AI Manager</h1>
          <p className="text-sm text-[#8C968F]">Your circle's financial manager</p>
        </div>
        <Badge variant="success" className="gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#79D900] animate-pulse"></span>
          Active
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#B6FF00]/10 p-2">
              <Activity className="h-5 w-5 text-[#B6FF00]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#F5F7F5]">12</p>
              <p className="text-xs text-[#8C968F]">Actions taken</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg bg-amber-500/10 p-2">
              <Clock className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#F5F7F5]">3</p>
              <p className="text-xs text-[#8C968F]">Pending actions</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="rounded-lg bg-[#79D900]/10 p-2">
              <CheckCircle className="h-5 w-5 text-[#79D900]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#F5F7F5]">96%</p>
              <p className="text-xs text-[#8C968F]">Success rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-[#F5F7F5]">Active Recommendations</h2>
        {demoAIRecommendations.map((rec) => (
          <AIInsightCard
            key={rec.id}
            title={rec.title}
            description={rec.description}
            recommendation={rec.recommendation}
            status={rec.status as any}
            timestamp={formatRelativeTime(rec.timestamp)}
          />
        ))}
      </div>

      <Card className="border-[#B6FF00]/10">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-[#8C968F]" />
            Recent Decisions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentDecisions.map((decision, i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-[#F5F7F5]">{decision.action}</p>
                  <p className="text-xs text-[#8C968F]">{decision.time}</p>
                </div>
                <Badge variant={decision.result === 'Approved' ? 'success' : decision.result === 'Rejected' ? 'destructive' : 'secondary'}>
                  {decision.result}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
