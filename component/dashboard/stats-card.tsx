import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  icon: LucideIcon
  className?: string
  trend?: 'up' | 'down' | 'neutral'
}

export function StatsCard({ title, value, change, icon: Icon, className, trend }: StatsCardProps) {
  return (
    <Card className={cn("border-[#B6FF00]/10 hover:border-[#B6FF00]/30 transition-all", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-[#8C968F]">{title}</p>
            <p className="text-2xl font-bold tracking-tight text-[#F5F7F5]">{value}</p>
            {change !== undefined && (
              <p className={cn(
                "text-xs font-medium",
                trend === 'up' ? 'text-[#79D900]' : trend === 'down' ? 'text-red-500' : 'text-[#8C968F]'
              )}>
                {change > 0 ? '+' : ''}{change}%
              </p>
            )}
          </div>
          <div className="rounded-lg bg-[#111A14] p-3">
            <Icon className="h-5 w-5 text-[#B6FF00]" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
