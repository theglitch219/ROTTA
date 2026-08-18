import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { formatCurrency, formatRelativeTime } from '@/lib/utils'
import { Users, Clock, TrendingUp } from 'lucide-react'

interface CircleCardProps {
  name: string
  total: number
  target: number
  progress: number
  members: number
  contribution: number
  nextPayout: string
  status: 'healthy' | 'attention' | 'critical'
  yield: number
  cycle: number
  totalCycles: number
}

export function CircleCard({
  name,
  total,
  target,
  progress,
  members,
  contribution,
  nextPayout,
  status,
  yield: yieldAmount,
  cycle,
  totalCycles,
}: CircleCardProps) {
  const statusColors = {
    healthy: 'success',
    attention: 'warning',
    critical: 'destructive',
  }

  const statusLabels = {
    healthy: 'Healthy',
    attention: 'Needs Attention',
    critical: 'Critical',
  }

  return (
    <Card className="border-[#B6FF00]/10 hover:border-[#B6FF00]/30 transition-all hover:bg-[#0B110D]/80 group">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-[#F5F7F5]">{name}</h3>
            <p className="text-sm text-[#8C968F]">Cycle {cycle} of {totalCycles}</p>
          </div>
          <Badge variant={statusColors[status] as any}>
            {statusLabels[status]}
          </Badge>
        </div>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#8C968F]">Progress</span>
            <span className="font-medium text-[#F5F7F5]">{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#8C968F]">Treasury</span>
            <span className="font-medium text-[#F5F7F5]">{formatCurrency(total)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#8C968F]">Target</span>
            <span className="font-medium text-[#F5F7F5]">{formatCurrency(target)}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 border-t border-[#B6FF00]/5 pt-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#8C968F]" />
            <span className="text-sm text-[#F5F7F5]">{members}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-[#8C968F]" />
            <span className="text-sm text-[#B6FF00]">+{formatCurrency(yieldAmount)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#8C968F]" />
            <span className="text-sm text-[#8C968F]">{formatRelativeTime(nextPayout)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
