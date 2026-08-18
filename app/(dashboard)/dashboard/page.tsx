"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { StatsCard } from '@/components/dashboard/stats-card'
import { CircleCard } from '@/components/dashboard/circle-card'
import { AIInsightCard } from '@/components/dashboard/ai-insight-card'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Wallet, 
  Users, 
  TrendingUp, 
  Award, 
  Plus,
  ArrowRight 
} from 'lucide-react'
import { demoUser, demoCircuits, demoAIRecommendations } from '@/lib/data/demo-data'
import { formatCurrency, formatRelativeTime } from '@/lib/utils'

export default function DashboardPage() {
  const router = useRouter()
  
  const recentActivities = [
    { user: 'Sarah Chen', action: 'contributed', amount: 200, circle: 'Creators Circle', time: '2h ago' },
    { user: 'David Kim', action: 'contributed', amount: 200, circle: 'Creators Circle', time: '4h ago' },
    { user: 'System', action: 'payout', amount: 1000, circle: 'Builders Circle', time: '1d ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#F5F7F5]">Good morning, Alex</h1>
          <p className="text-sm text-[#8C968F]">Here's your ROTTA overview</p>
        </div>
        <Button 
          className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
          onClick={() => router.push('/circles/create')}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Circle
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Portfolio Value"
          value={formatCurrency(demoUser.portfolio)}
          change={12.4}
          icon={Wallet}
          trend="up"
        />
        <StatsCard
          title="Active Circles"
          value={demoUser.activeCircles}
          change={0}
          icon={Users}
        />
        <StatsCard
          title="Total Contributed"
          value={formatCurrency(demoUser.totalContributed)}
          change={8.2}
          icon={TrendingUp}
          trend="up"
        />
        <StatsCard
          title="Reliability Score"
          value={`${demoUser.reliability}%`}
          change={2.1}
          icon={Award}
          trend="up"
        />
      </div>

      {/* AI Insight */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#B6FF00]">ROTTA AI</span>
          <span className="text-xs text-[#8C968F]">• Active</span>
        </div>
        <AIInsightCard
          title={demoAIRecommendations[0].title}
          description={demoAIRecommendations[0].description}
          recommendation={demoAIRecommendations[0].recommendation}
          status={demoAIRecommendations[0].status as any}
          timestamp={formatRelativeTime(demoAIRecommendations[0].timestamp)}
        />
      </div>

      {/* Circles & Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#F5F7F5]">Active Circles</h2>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[#B6FF00]"
              onClick={() => router.push('/circles')}
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {demoCircuits.slice(0, 2).map((circle) => (
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

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#F5F7F5]">Recent Activity</h2>
          <Card className="border-[#B6FF00]/10">
            <CardContent className="p-4 space-y-3">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                  <div className="h-8 w-8 rounded-full bg-[#111A14] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#8C968F]">
                      {activity.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#F5F7F5]">
                      <span className="font-medium">{activity.user}</span>
                      {activity.action === 'contributed' && (
                        <> contributed <span className="text-[#B6FF00]">${activity.amount}</span></>
                      )}
                      {activity.action === 'payout' && (
                        <> received <span className="text-[#B6FF00]">${activity.amount}</span></>
                      )}
                    </p>
                    <p className="text-xs text-[#8C968F]">{activity.circle} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}                status={circle.status as any}
                yield={circle.yield}
                cycle={circle.cycle}
                totalCycles={circle.totalCycles}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#F5F7F5]">Recent Activity</h2>
          <Card className="border-[#B6FF00]/10">
            <CardContent className="p-4 space-y-3">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                  <div className="h-8 w-8 rounded-full bg-[#111A14] flex items-center justify-center">
                    <span className="text-xs font-semibold text-[#8C968F]">
                      {activity.user.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#F5F7F5]">
                      <span className="font-medium">{activity.user}</span>
                      {activity.action === 'contributed' && (
                        <> contributed <span className="text-[#B6FF00]">${activity.amount}</span></>
                      )}
                      {activity.action === 'payout' && (
                        <> received <span className="text-[#B6FF00]">${activity.amount}</span></>
                      )}
                    </p>
                    <p className="text-xs text-[#8C968F]">{activity.circle} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
              }
