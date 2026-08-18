"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (status === "loading") return
    
    if (!session) {
      router.push("/auth/signin")
    } else {
      setIsLoading(false)
    }
  }, [session, status, router])

  if (isLoading || status === "loading") {
    return (
      <div className="min-h-screen bg-[#050705] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#B6FF00]/20 border-t-[#B6FF00]"></div>
      </div>
    )
  }

  return <>{children}</>
}
