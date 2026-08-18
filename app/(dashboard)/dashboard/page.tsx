'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050705]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#B6FF00]/20 border-t-[#B6FF00]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050705] p-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-[#8C968F]">
          Welcome back, {session?.user?.name || 'User'}
        </p>

        {/* Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-6">
            <p className="text-sm text-[#8C968F]">Portfolio</p>
            <p className="text-2xl font-bold text-white">$24,840</p>
            <p className="text-xs text-[#79D900]">+12.4%</p>
          </div>

          <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-6">
            <p className="text-sm text-[#8C968F]">Active Circles</p>
            <p className="text-2xl font-bold text-white">3</p>
            <p className="text-xs text-[#8C968F]">0%</p>
          </div>

          <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-6">
            <p className="text-sm text-[#8C968F]">Total Contributed</p>
            <p className="text-2xl font-bold text-white">$18,400</p>
            <p className="text-xs text-[#79D900]">+8.2%</p>
          </div>

          <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-6">
            <p className="text-sm text-[#8C968F]">Reliability</p>
            <p className="text-2xl font-bold text-[#B6FF00]">94%</p>
            <p className="text-xs text-[#79D900]">+2.1%</p>
          </div>

        </div>

        {/* Circles & Activity */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Active Circles */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-lg font-semibold text-white">
              Active Circles
            </h2>

            <div className="grid gap-4 md:grid-cols-2">

              {/* Creators Circle */}
              <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-4 hover:border-[#B6FF00]/30">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    Creators Circle
                  </h3>

                  <span className="rounded-full bg-[#79D900]/20 px-2 py-0.5 text-xs text-[#79D900]">
                    Healthy
                  </span>
                </div>

                <div className="mt-4 space-y-2">

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Progress</span>
                    <span className="text-white">83%</span>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-[#111A14]">
                    <div
                      className="h-1.5 rounded-full bg-[#B6FF00]"
                      style={{ width: '83%' }}
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Treasury</span>
                    <span className="text-white">$12,480</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Members</span>
                    <span className="text-white">8</span>
                  </div>

                </div>
              </div>

              {/* Builders Circle */}
              <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-4 hover:border-[#B6FF00]/30">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    Builders Circle
                  </h3>

                  <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs text-amber-500">
                    Attention
                  </span>
                </div>

                <div className="mt-4 space-y-2">

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Progress</span>
                    <span className="text-white">82%</span>
                  </div>

                  <div className="h-1.5 w-full rounded-full bg-[#111A14]">
                    <div
                      className="h-1.5 rounded-full bg-amber-500"
                      style={{ width: '82%' }}
                    />
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Treasury</span>
                    <span className="text-white">$8,240</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-[#8C968F]">Members</span>
                    <span className="text-white">6</span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-4">

            <h2 className="text-lg font-semibold text-white">
              Recent Activity
            </h2>

            <div className="rounded-xl border border-[#B6FF00]/10 bg-[#0B110D] p-4">

              {/* Sarah */}
              <div className="flex items-center gap-3 border-b border-[#B6FF00]/5 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111A14]">
                  <span className="text-xs text-[#8C968F]">S</span>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-white">
                    <span className="font-medium">Sarah Chen</span>{' '}
                    Contributed $200
                  </p>

                  <p className="text-xs text-[#8C968F]">
                    2h ago
                  </p>
                </div>
              </div>

              {/* David */}
              <div className="flex items-center gap-3 border-b border-[#B6FF00]/5 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111A14]">
                  <span className="text-xs text-[#8C968F]">D</span>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-white">
                    <span className="font-medium">David Kim</span>{' '}
                    Contributed $200
                  </p>

                  <p className="text-xs text-[#8C968F]">
                    4h ago
                  </p>
                </div>
              </div>

              {/* System */}
              <div className="flex items-center gap-3 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111A14]">
                  <span className="text-xs text-[#8C968F]">S</span>
                </div>

                <div className="flex-1">
                  <p className="text-sm text-white">
                    <span className="font-medium">System</span>{' '}
                    Payout $1,000
                  </p>

                  <p className="text-xs text-[#8C968F]">
                    1d ago
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
        
