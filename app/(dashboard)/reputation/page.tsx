"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Award, CheckCircle, Clock, Users, TrendingUp, Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ReputationPage() {
  const score = 94
  const breakdown = {
    'On-time contributions': { value: 98, weight: 35 },
    'Completed cycles': { value: 100, weight: 30 },
    'Contribution consistency': { value: 96, weight: 20 },
    'Circle completion': { value: 92, weight: 15 },
  }

  const completedCircles = [
    { name: 'Creators Circle', date: '2026-07-15', members: 8, amount: 24000 },
    { name: 'Builders Circle', date: '2026-05-20', members: 6, amount: 18000 },
    { name: 'Innovators Guild', date: '2026-03-10', members: 5, amount: 15000 },
    { name: 'Founders Circle', date: '2025-12-01', members: 4, amount: 12000 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#F5F7F5]">Reputation</h1>
        <p className="text-sm text-[#8C968F]">Your financial behavior builds trust</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1 border-[#B6FF00]/10">
          <CardContent className="p-6 text-center">
            <div className="relative inline-flex">
              <div className="h-40 w-40 rounded-full border-8 border-[#B6FF00]/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-[#B6FF00]">{score}</p>
                  <p className="text-sm text-[#8C968F]">Reliability</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-[#B6FF00] p-1.5">
                <Award className="h-5 w-5 text-[#050705]" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Badge variant="success" className="text-sm">
                Top 10% of users
              </Badge>
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="text-[#8C968F]">Streak: 18 cycles</span>
                <span className="text-[#8C968F]">•</span>
                <span className="text-[#8C968F]">Member since Jan 2024</span>
              </div>
              <Button variant="secondary" size="sm" className="gap-2">
                <Copy className="h-3 w-3" />
                Share Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 border-[#B6FF00]/10">
          <CardHeader>
            <CardTitle className="text-lg">Score Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(breakdown).map(([label, data]) => (
              <div key={label}>
                <div className="flex justify-between text-sm">
                  <span className="text-[#F5F7F5]">{label}</span>
                  <span className="text-[#B6FF00]">{data.value}%</span>
                </div>
                <Progress value={data.value} className="mt-1 h-1.5" />
                <p className="text-xs text-[#8C968F]">Weight: {data.weight}%</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border-[#B6FF00]/10">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#B6FF00]" />
            Completed Circles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {completedCircles.map((circle, i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-[#F5F7F5]">{circle.name}</p>
                  <div className="flex items-center gap-3 text-xs text-[#8C968F]">
                    <span>{circle.members} members</span>
                    <span>•</span>
                    <span>{circle.date}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#B6FF00]">${circle.amount.toLocaleString()}</p>
                  <Badge variant="success" className="text-xs">Completed</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
            }
