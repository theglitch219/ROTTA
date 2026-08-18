
import { NextResponse } from 'next/server'

// Demo AI recommendations data
const demoRecommendations = [
  {
    id: 'rec_1',
    title: 'Liquidity Forecast Update',
    description: 'Your next payout requires $1,000 in liquidity. Current liquid balance is $1,240 with $400 projected contributions.',
    recommendation: 'No action required. Circle remains solvent.',
    status: 'safe',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'rec_2',
    title: 'Yield Optimization Opportunity',
    description: '$800 of idle capital is eligible for yield deployment while maintaining safety buffer.',
    recommendation: 'Deploy $800 into USDC/DAI pool at 4.2% APY.',
    status: 'pending',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'rec_3',
    title: 'Member Contribution Alert',
    description: 'One member (Maria Garcia) is 2 days overdue for their contribution.',
    recommendation: 'Send reminder notification to Maria Garcia.',
    status: 'alert',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
  },
]

// GET /api/recommendations
export async function GET() {
  return NextResponse.json({
    recommendations: demoRecommendations,
    status: 'active',
    count: demoRecommendations.length,
  })
}

// POST /api/recommendations
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action, recommendationId, approved } = body

    // Find the recommendation
    const recommendation = demoRecommendations.find(r => r.id === recommendationId)

    if (!recommendation) {
      return NextResponse.json(
        { error: 'Recommendation not found' },
        { status: 404 }
      )
    }

    // In a real app, this would trigger smart contract calls
    // For demo, we just simulate the action
    const result = {
      success: true,
      message: `Recommendation "${recommendation.title}" ${approved ? 'approved' : 'rejected'}`,
      action: approved ? 'approved' : 'rejected',
      recommendationId: recommendationId,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process recommendation' },
      { status: 500 }
    )
  }
    }
