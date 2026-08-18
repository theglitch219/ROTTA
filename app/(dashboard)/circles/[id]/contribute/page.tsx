"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, ArrowLeft, DollarSign, Wallet } from "lucide-react"

export default function ContributePage() {
  const params = useParams()
  const router = useRouter()
  const circleId = params.id as string
  
  const [amount, setAmount] = useState(1000)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleContribute = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
    setSuccess(true)
    
    // Update demo state would happen here
    setTimeout(() => {
      router.push(`/circles/${circleId}`)
    }, 2000)
  }

  return (
    <div className="max-w-lg mx-auto py-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 text-[#8C968F]"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Circle
      </Button>

      <Card className="border-[#B6FF00]/10 bg-[#0B110D]">
        <CardHeader>
          <CardTitle className="text-2xl text-[#F5F7F5]">Contribute to Circle</CardTitle>
          <CardDescription className="text-[#8C968F]">
            Enter the amount you'd like to contribute
          </CardDescription>
        </CardHeader>
        <CardContent>
          {success ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-full bg-[#79D900]/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-[#79D900]" />
              </div>
              <h3 className="text-xl font-semibold text-[#F5F7F5]">Contribution Successful!</h3>
              <p className="text-[#8C968F] mt-2">Your contribution of ${amount} has been recorded</p>
              <Badge variant="outline" className="mt-4 border-[#B6FF00]/20 text-[#B6FF00]">
                DEMO MODE
              </Badge>
            </div>
          ) : (
            <form onSubmit={handleContribute} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[#8C968F]">Amount (USDC)</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8C968F]" />
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="pl-10 bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
                    min={10}
                    step={10}
                  />
                </div>
                <p className="text-xs text-[#8C968F]">Minimum contribution: $10 USDC</p>
              </div>

              <div className="rounded-lg bg-[#111A14] p-4 border border-[#B6FF00]/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8C968F]">Your Wallet</span>
                  <span className="font-medium text-[#F5F7F5]">0x7A8...F9A</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-[#8C968F]">Balance</span>
                  <span className="font-medium text-[#B6FF00]">$4,250.00</span>
                </div>
              </div>

              <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/20">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-amber-500">Demo Mode</p>
                    <p className="text-xs text-amber-500/70">This is a simulated contribution. No real funds will be transferred.</p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#050705] border-t-transparent mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Wallet className="mr-2 h-4 w-4" />
                    Contribute ${amount}
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-[#8C968F]">
                By contributing, you agree to the circle's rules and terms
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
        }
