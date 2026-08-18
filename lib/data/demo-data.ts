export const demoUser = {
  id: 'user_1',
  name: 'Alex Morgan',
  email: 'alex@example.com',
  wallet: '0x7A8F9B3E2C1D5F6A8B9C0D1E2F3A4B5C6D7E8F9A',
  avatar: '',
  reliability: 94,
  portfolio: 24840,
  activeCircles: 3,
  totalContributed: 18400,
  yieldGenerated: 420.34,
  memberSince: '2024-01-15',
}

export const demoCircuits = [
  {
    id: 'circle_1',
    name: 'Creators Circle',
    description: 'Monthly savings for creative projects',
    total: 12480,
    target: 15000,
    progress: 83.2,
    members: 8,
    contribution: 2000,
    nextPayout: '2026-08-22',
    status: 'healthy',
    health: 'healthy',
    yield: 240,
    cycle: 3,
    totalCycles: 6,
  },
  {
    id: 'circle_2',
    name: 'Builders Circle',
    description: 'Quarterly builder fund',
    total: 8240,
    target: 10000,
    progress: 82.4,
    members: 6,
    contribution: 1500,
    nextPayout: '2026-09-05',
    status: 'attention',
    health: 'attention',
    yield: 180,
    cycle: 2,
    totalCycles: 4,
  },
  {
    id: 'circle_3',
    name: 'Innovators Guild',
    description: 'Monthly innovation fund',
    total: 4120,
    target: 5000,
    progress: 82.4,
    members: 5,
    contribution: 1000,
    nextPayout: '2026-08-28',
    status: 'healthy',
    health: 'healthy',
    yield: 80,
    cycle: 1,
    totalCycles: 3,
  },
]

export const demoMembers = [
  { id: 'm1', name: 'Sarah Chen', wallet: '0x7A8...F9A', contributed: true, onTime: 98, reliability: 96, status: 'active' },
  { id: 'm2', name: 'David Kim', wallet: '0x3B2...E4D', contributed: true, onTime: 94, reliability: 92, status: 'active' },
  { id: 'm3', name: 'Alex Morgan', wallet: '0x9C5...A2B', contributed: true, onTime: 100, reliability: 94, status: 'active' },
  { id: 'm4', name: 'Maria Garcia', wallet: '0x1E7...F3C', contributed: false, onTime: 86, reliability: 84, status: 'pending' },
]

export const demoActivities = [
  { id: 'a1', user: 'Sarah Chen', action: 'contributed', amount: 200, circle: 'Creators Circle', time: '2026-08-18T10:30:00Z' },
  { id: 'a2', user: 'David Kim', action: 'contributed', amount: 200, circle: 'Creators Circle', time: '2026-08-18T09:15:00Z' },
  { id: 'a3', user: 'System', action: 'payout', amount: 1000, circle: 'Builders Circle', time: '2026-08-17T14:00:00Z' },
  { id: 'a4', user: 'ROTTA AI', action: 'recommendation', description: 'Liquidity optimization', circle: 'Creators Circle', time: '2026-08-17T11:00:00Z' },
  { id: 'a5', user: 'Maria Garcia', action: 'joined', circle: 'Innovators Guild', time: '2026-08-16T16:45:00Z' },
]

export const demoAIRecommendations = [
  {
    id: 'ai_1',
    title: 'Liquidity Forecast Update',
    description: 'Your next payout requires $1,000 in liquidity. Current liquid balance is $1,240 with $400 projected contributions.',
    recommendation: 'No action required. Circle remains solvent.',
    status: 'safe',
    timestamp: '2026-08-18T08:00:00Z',
  },
  {
    id: 'ai_2',
    title: 'Yield Optimization',
    description: '$800 of idle capital is eligible for yield deployment while maintaining safety buffer.',
    recommendation: 'Deploy $800 into USDC/DAI pool at 4.2% APY.',
    status: 'pending',
    timestamp: '2026-08-17T15:30:00Z',
  },
]
