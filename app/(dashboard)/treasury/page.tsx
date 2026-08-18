"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { formatCurrency } from '@/lib/utils'
import { Wallet, TrendingUp, Shield, Clock, ArrowUpRight } from 'lucide-react'

export default function TreasuryPage() {
  const treasuryData = {
    total: 12480,
    liquid: 8240,
    deployed: 4240,
    upcomingPayout: 2000,
    safetyBuffer: 1500,
    yieldEarned: 420.34,
    riskLevel: 'Low',
  }

  const yieldPositions = [
    { name: 'USDC/DAI Pool', capital: 2500, apy: 4.2, risk: 'Low', status: 'Active' },
    { name: 'ETH/USDC Pool', capital: 1740, apy: 6.8, risk: 'Medium', status: 'Active' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#F5F7F5]">Treasury</h1>
        <p className="text-sm text-[#8C968F]">Manage circle capital and yield positions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Total Treasury</p>
            <p className="text-2xl font-bold text-[#F5F7F5]">{formatCurrency(treasuryData.total)}</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Liquid</p>
            <p className="text-2xl font-bold text-[#79D900]">{formatCurrency(treasuryData.liquid)}</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Yield Deployed</p>
            <p className="text-2xl font-bold text-[#B6FF00]">{formatCurrency(treasuryData.deployed)}</p>
          </CardContent>
        </Card>
        <Card className="border-[#B6FF00]/10">
          <CardContent className="p-4">
            <p className="text-sm text-[#8C968F]">Upcoming Payout</p>
            <p className="text-2xl font-bold text-amber-500">{formatCurrency(treasuryData.upcomingPayout)}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-[#B6FF00]/10">
          <CardHeader>
            <CardTitle className="text-lg text-[#F5F7F5]">Yield Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {yieldPositions.map((position, i) => (
                <div key={i} className="flex items-center justify-between border-b border-[#B6FF00]/5 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-[#F5F7F5]">{position.name}</p>
                    <p className="text-sm text-[#8C968F]">Capital: {formatCurrency(position.capital)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-[#B6FF00]">{position.apy}% APY</p>
                    <Badge variant={position.risk === 'Low' ? 'success' : 'warning'}>
                      {position.risk}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#B6FF00]/10">
          <CardHeader>
            <CardTitle className="text-lg text-[#F5F7F5]">Safety Buffer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm">
                <span className="text-[#8C968F]">Current Buffer</span>
                <span className="font-medium text-[#F5F7F5]">{formatCurrency(treasuryData.safetyBuffer)}</span>
              </div>
              <Progress value={75} className="mt-2 h-1.5" />
              <p className="mt-1 text-xs text-[#8C968F]">75% of target</p>
            </div>
            <div className="rounded-lg bg-[#111A14] p-3">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#B6FF00]" />
                <span className="text-sm font-medium text-[#F5F7F5]">Risk Level: Low</span>
              </div>
              <p className="mt-1 text-xs text-[#8C968F]">Sufficient liquidity for upcoming obligations</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
