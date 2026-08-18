import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Sparkles, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AIInsightCardProps {
  title: string
  description: string
  recommendation: string
  status: 'safe' | 'pending' | 'alert'
  timestamp: string
  onApprove?: () => void
  onReject?: () => void
}

export function AIInsightCard({
  title,
  description,
  recommendation,
  status,
  timestamp,
  onApprove,
  onReject,
}: AIInsightCardProps) {
  const statusConfig = {
    safe: { icon: CheckCircle, color: 'text-[#79D900]', label: 'Safe' },
    pending: { icon: Clock, color: 'text-amber-500', label: 'Pending' },
    alert: { icon: AlertTriangle, color: 'text-red-500', label: 'Alert' },
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className="border-[#B6FF00]/10 hover:border-[#B6FF00]/30 transition-all">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-[#B6FF00]/10 p-2.5">
            <Sparkles className="h-5 w-5 text-[#B6FF00]" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-3">
              <h4 className="font-semibold text-[#F5F7F5]">{title}</h4>
              <Badge variant="outline" className={cn("border-none", config.color)}>
                <Icon className="mr-1 h-3 w-3" />
                {config.label}
              </Badge>
            </div>
            <p className="text-sm text-[#8C968F]">{description}</p>
            <div className="rounded-lg bg-[#111A14] p-3 border border-[#B6FF00]/5">
              <p className="text-sm font-medium text-[#B6FF00]">→ {recommendation}</p>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <p className="text-xs text-[#8C968F]">{timestamp}</p>
              {status === 'pending' && (
                <div className="flex gap-2">
                  <Button size="sm" className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90" onClick={onApprove}>
                    Approve
                  </Button>
                  <Button size="sm" variant="secondary" onClick={onReject}>
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
