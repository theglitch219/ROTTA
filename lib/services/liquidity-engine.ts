export interface CircleData {
  total: number
  liquid: number
  deployed: number
  upcomingPayout: number
  safetyBuffer: number
  expectedContributions: number
  currentCycle: number
  totalCycles: number
}

export interface LiquidityAnalysis {
  liquidBalance: number
  upcomingObligations: number
  expectedContributions: number
  minimumReserve: number
  deployableCapital: number
  projectedLiquidity: number
  safetyBufferAmount: number
  riskStatus: 'safe' | 'warning' | 'critical'
  recommendations: string[]
}

export function analyzeLiquidity(data: CircleData): LiquidityAnalysis {
  const { 
    total, 
    liquid, 
    deployed, 
    upcomingPayout, 
    safetyBuffer, 
    expectedContributions 
  } = data

  const liquidBalance = liquid
  const upcomingObligations = upcomingPayout
  const minimumReserve = upcomingPayout * (1 + safetyBuffer / 100)
  const deployableCapital = Math.max(0, liquidBalance - minimumReserve)
  const projectedLiquidity = liquidBalance + expectedContributions - upcomingPayout

  let riskStatus: 'safe' | 'warning' | 'critical' = 'safe'
  const recommendations: string[] = []

  if (projectedLiquidity < minimumReserve) {
    if (projectedLiquidity < minimumReserve * 0.5) {
      riskStatus = 'critical'
      recommendations.push('Immediate liquidity intervention required')
      recommendations.push('Consider withdrawing from yield positions')
    } else {
      riskStatus = 'warning'
      recommendations.push('Liquidity is below safety buffer')
      recommendations.push('Reduce deployed capital or increase contributions')
    }
  } else if (deployableCapital > 0 && deployableCapital > 100) {
    recommendations.push(`${formatCurrency(deployableCapital)} deployable capital available`)
    recommendations.push('Consider yield deployment for idle capital')
  } else {
    recommendations.push('Liquidity is healthy. No action required.')
  }

  return {
    liquidBalance,
    upcomingObligations,
    expectedContributions,
    minimumReserve,
    deployableCapital,
    projectedLiquidity,
    safetyBufferAmount: Math.max(0, liquidBalance - upcomingObligations),
    riskStatus,
    recommendations
  }
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
    }
