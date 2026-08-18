"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet, Mail, ArrowRight } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("Invalid credentials")
      setLoading(false)
    } else {
      router.push("/dashboard")
    }
  }

  const handleWalletConnect = () => {
    // Demo wallet connection
    setLoading(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#050705] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-[#B6FF00]/10 bg-[#0B110D]">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded bg-[#B6FF00] flex items-center justify-center">
              <span className="text-[#050705] font-bold text-xl">R</span>
            </div>
          </div>
          <CardTitle className="text-2xl text-[#F5F7F5]">Welcome to ROTTA</CardTitle>
          <CardDescription className="text-[#8C968F]">
            Collective finance. Onchain.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#8C968F]">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#8C968F]">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <Button
              type="submit"
              className="w-full bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in with Email"}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#B6FF00]/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0B110D] px-2 text-[#8C968F]">Or continue with</span>
            </div>
          </div>

          <Button
            variant="secondary"
            className="w-full border border-[#B6FF00]/10"
            onClick={handleWalletConnect}
            disabled={loading}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>

          <p className="text-center text-xs text-[#8C968F]">
            Demo: Use any email + password (min 4 chars) or click Connect Wallet
          </p>
        </CardContent>
      </Card>
    </div>
  )
            }
