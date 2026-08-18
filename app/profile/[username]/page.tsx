"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp,
  Copy,
  Check,
  Calendar,
  Wallet,
  Star
} from "lucide-react"
import { demoUser, demoCircuits } from "@/lib/data/demo-data"
import { formatCurrency } from "@/lib/utils"
import { useState } from "react"

export default function PublicProfilePage() {
  const params = useParams()
  const username = params.username as string
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(`rotta.profile/${username}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Simulate user data (in real app, fetch by username)
  const user = {
    ...demoUser,
    memberSince: '2024-01-15',
    completedCycles: 4,
    totalCycles: 6,
    onTimeRate: 98.4,
    streak: 18,
    verified: true,
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[#F5F7F5]">{user.name}</h1>
              <Badge variant="success" className="gap-1">
                <CheckCircle className="h-3 w-3" />
                Verified
              </Badge>
            </div>
            <p className="text-sm text-[#8C968F]">@{username}</p>
          </div>
          <Button variant="secondary" size="sm" onClick={handleCopy} className="gap-2">
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#79D900]" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Share Profile
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Score Card */}
        <Card className="md:col-span-1 border-[#B6FF00]/10 bg-[#0B110D]">
          <CardContent className="p-6 text-center">
            <div className="relative inline-flex">
              <div className="h-32 w-32 rounded-full border-8 border-[#B6FF00]/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#B6FF00]">{user.reliability}</p>
                  <p className="text-xs text-[#8C968F]">Reliability</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full bg-[#B6FF00] p-1.5">
                <Award className="h-4 w-4 text-[#050705]" />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Badge variant="success" className="text-sm">Top 10%</Badge>
              <div className="flex items-center justify-center gap-3 text-xs text-[#8C968F]">
                <span>{user.streak} cycle streak</span>
                <span>•</span>
                <span>Member since {new Date(user.memberSince).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="md:col-span-2 border-[#B6FF00]/10 bg-[#0B110D]">
          <CardHeader>
            <CardTitle className="text-lg">Contribution History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-[#111A14] p-3">
                  <p className="text-xs text-[#8C968F]">Completed Circles</p>
                  <p className="text-xl font-bold text-[#F5F7F5]">{user.completedCycles}</p>
                </div>
                <div className="rounded-lg bg-[#111A14] p-3">
                  <p className="text-xs text-[#8C968F]">On-Time Rate</p>
                  <p className="text-xl font-bold text-[#B6FF00]">{user.onTimeRate}%</p>
                </div>
                <div className="rounded-lg bg-[#111A14] p-3">
                  <p className="text-xs text-[#8C968F]">Total Contributed</p>
                  <p className="text-xl font-bold text-[#F5F7F5]">{formatCurrency(user.totalContributed)}</p>
                </div>
                <div className="rounded-lg bg-[#111A14] p-3">
                  <p className="text-xs text-[#8C968F]">Wallet</p>
                  <p className="text-xs font-mono text-[#8C968F] truncate">{user.wallet}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Completed Circles */}
      <Card className="mt-6 border-[#B6FF00]/10 bg-[#0B110D]">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-[#B6FF00]" />
            Completed Circles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {demoCircuits.slice(0, 2).map((circle, i) => (
              <div key={i} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-[#F5F7F5]">{circle.name}</p>
                  <div className="flex items-center gap-3 text-xs text-[#8C968F]">
                    <span>{circle.members} members</span>
                    <span>•</span>
                    <span>{circle.totalCycles} cycles</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#B6FF00]">{formatCurrency(circle.total)}</p>
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
