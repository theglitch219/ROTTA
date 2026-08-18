export interface ContributionRecord {
  date: Date
  amount: number
  onTime: boolean
  circleId: string
  completed: boolean
}

export interface ReputationMetrics {
  onTimeContributions: number
  totalContributions: number
  completedCycles: number
  totalCycles: number
  missedContributions: number
  disputes: number
  consistency: number
  streak: number
}

export interface ReputationScore {
  overall: number
  breakdown: {
    punctuality: number
    completion: number
    consistency: number
    cycleCompletion: number
  }
  metrics: ReputationMetrics
}

export function calculateReputation(
  contributions: ContributionRecord[],
  completedCycles: number,
  totalCycles: number,
  disputes: number
): ReputationScore {
  const totalContributions = contributions.length
  const onTimeContributions = contributions.filter(c => c.onTime).length
  const completedContributions = contributions.filter(c => c.completed).length
  const missedContributions = totalContributions - completedContributions

  // Punctuality score (0-40)
  const punctualityScore = totalContributions > 0 
    ? Math.round((onTimeContributions / totalContributions) * 40)
    : 0

  // Completion score (0-30)
  const completionScore = totalCycles > 0
    ? Math.round((completedCycles / totalCycles) * 30)
    : 0

  // Consistency score (0-20)
  const consistencyRate = totalContributions > 0
    ? Math.round((completedContributions / totalContributions) * 20)
    : 0

  // Cycle completion score (0-10)
  const cycleCompletionScore = totalCycles > 0
    ? Math.min(10, Math.round((completedCycles / Math.max(1, totalCycles)) * 10))
    : 0

  // Dispute penalty
  const disputePenalty = Math.min(10, disputes * 3)

  // Calculate streak
  let streak = 0
  const sortedContributions = [...contributions].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  )
  for (const contrib of sortedContributions) {
    if (contrib.onTime && contrib.completed) {
      streak++
    } else {
      break
    }
  }

  // Calculate metrics
  const metrics: ReputationMetrics = {
    onTimeContributions,
    totalContributions,
    completedCycles,
    totalCycles,
    missedContributions,
    disputes,
    consistency: Math.round((completedContributions / Math.max(1, totalContributions)) * 100),
    streak
  }

  // Calculate overall score (0-100)
  let overall = punctualityScore + completionScore + consistencyScore + cycleCompletionScore
  overall = Math.max(0, Math.min(100, overall - disputePenalty))

  return {
    overall,
    breakdown: {
      punctuality: punctualityScore,
      completion: completionScore,
      consistency: consistencyScore,
      cycleCompletion: cycleCompletionScore,
    },
    metrics
  }
}

export function generateReputationHistory(
  user: string,
  months: number = 6
): ContributionRecord[] {
  const history: ContributionRecord[] = []
  const now = new Date()
  
  for (let i = months; i >= 0; i--) {
    const date = new Date(now)
    date.setMonth(date.getMonth() - i)
    
    // Simulate realistic contribution patterns
    const onTime = Math.random() > 0.1
    const completed = Math.random() > 0.05
    
    history.push({
      date,
      amount: 200 + Math.floor(Math.random() * 800),
      onTime,
      circleId: `circle_${Math.floor(Math.random() * 3) + 1}`,
      completed
    })
  }
  
  return history
}
