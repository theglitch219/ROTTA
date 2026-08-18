"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Users, 
  Wallet, 
  TrendingUp, 
  Calendar, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Bot,
  DollarSign,
  Shield,
  UserPlus
} from "lucide-react"
import { formatCurrency, formatRelativeTime } from "@/lib/utils"
import { demoCircuits, demoMembers } from "@/lib/data/demo-data"

export default function CircleDetailPage() {
  const params = useParams()
  const circleId = params.id as string
  
  // Find circle from demo data
  const circle = demoCircuits.find(c => c.id === circleId)

  if (!circle) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-[#F5F7F5]">Circle not found</h2>
          <p className="text-[#8C968F]">This circle doesn't exist or you don't have access</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#F5F7F5]">{circle.name}</h1>
            <Badge variant={circle.status === 'healthy' ? 'success' : 'warning'}>
              {circle.status === 'healthy' ? 'Healthy' : 'Needs Attention'}
            </Badge>
          </div>
          <p className="text-sm text-[#8C968F]">Cycle {circle.cycle} of {circle.totalCycles}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="border border-[#B6FF00]/10">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite
          </Button>
          <Button className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90">
            Contribute
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Treasury</p>
            <p className="text-2xl font-bold text-[#F5F7F5]">{formatCurrency(circle.total)}</p>
            <p className="text-xs text-[#8C968F]">{circle.progress}% of target</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Members</p>
            <p className="text-2xl font-bold text-[#F5F7F5]">{circle.members}</p>
            <p className="text-xs text-[#8C968F]">{circle.contribution} each</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Next Payout</p>
            <p className="text-2xl font-bold text-[#B6FF00]">{formatCurrency(circle.contribution)}</p>
            <p className="text-xs text-[#8C968F]">{formatRelativeTime(circle.nextPayout)}</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Yield Earned</p>
            <p className="text-2xl font-bold text-[#79D900]">{formatCurrency(circle.yield)}</p>
            <p className="text-xs text-[#8C968F]">4.2% APY</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress */}
          <Card className="border-[#B6FF00]/10">
            <CardHeader>
              <CardTitle className="text-lg">Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Circle progress</span>
                    <span className="font-medium text-[#F5F7F5]">{circle.progress}%</span>
                  </div>
                  <Progress value={circle.progress} className="h-2 mt-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#111A14] p-3">
                    <p className="text-xs text-[#8C968F]">Current Cycle</p>
                    <p className="font-semibold text-[#F5F7F5]">{circle.cycle} of {circle.totalCycles}</p>
                  </div>
                  <div className="rounded-lg bg-[#111A14] p-3">
                    <p className="text-xs text-[#8C968F]">Members</p>
                    <p className="font-semibold text-[#F5F7F5]">{circle.members} active</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Members */}
          <Card className="border-[#B6FF00]/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-[#B6FF00]" />
                Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demoMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-[#111A14] text-[#8C968F]">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-[#F5F7F5]">{member.name}</p>
                        <p className="text-xs text-[#8C968F]">{member.wallet}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={member.contributed ? 'success' : 'secondary'}>
                        {member.contributed ? 'Contributed' : 'Pending'}
                      </Badge>
                      <p className="text-xs text-[#8C968F] mt-1">{member.reliability}% reliability</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payout Schedule */}
          <Card className="border-[#B6FF00]/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#B6FF00]" />
                Payout Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((cycle) => (
                  <div key={cycle} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-center gap-3">
                      <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                        cycle < circle.cycle 
                          ? 'bg-[#79D900]/20 text-[#79D900]' 
                          : cycle === circle.cycle 
                            ? 'bg-[#B6FF00]/20 text-[#B6FF00]'
                            : 'bg-[#111A14] text-[#8C968F]'
                      }`}>
                        {cycle < circle.cycle ? <CheckCircle className="h-4 w-4" /> : cycle}
                      </div>
                      <div>
                        <p className="font-medium text-[#F5F7F5]">Cycle {cycle}</p>
                        <p className="text-xs text-[#8C968F]">{cycle === circle.cycle ? 'Current' : cycle < circle.cycle ? 'Completed' : 'Upcoming'}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-[#B6FF00]">{formatCurrency(circle.contribution)}</p>
                      <p className="text-xs text-[#8C968F]">Recipient #{cycle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Insight */}
          <Card className="border-[#B6FF00]/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5 text-[#B6FF00]" />
                ROTTA AI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-[#111A14] p-3 border border-[#B6FF00]/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-[#79D900] animate-pulse"></div>
                  <span className="text-xs font-medium text-[#79D900]">Monitoring</span>
                </div>
                <p className="text-sm text-[#8C968F]">
                  Circle liquidity is healthy. No immediate action required.
                </p>
              </div>
              <Button variant="outline" className="w-full border-[#B6FF00]/20">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Circle Rules */}
          <Card className="border-[#B6FF00]/10">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#B6FF00]" />
                Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#8C968F]">Contribution</span>
                <span className="text-[#F5F7F5]">{formatCurrency(circle.contribution)} monthly</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C968F]">Grace Period</span>
                <span className="text-[#F5F7F5]">3 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C968F]">Payout Order</span>
                <span className="text-[#F5F7F5]">Random</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C968F]">Safety Buffer</span>
                <span className="text-[#F5F7F5]">20%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
            }
