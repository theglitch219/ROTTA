"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Users, 
  DollarSign, 
  Calendar,
  Shield,
  Bot,
  FileText
} from "lucide-react"

const steps = [
  { id: 0, label: "Identity", icon: FileText },
  { id: 1, label: "Contributions", icon: DollarSign },
  { id: 2, label: "Members", icon: Users },
  { id: 3, label: "Payout", icon: Calendar },
  { id: 4, label: "Treasury", icon: Shield },
  { id: 5, label: "AI", icon: Bot },
]

export default function CreateCirclePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    contributionAmount: 1000,
    currency: "USDC",
    frequency: "Monthly",
    memberCount: 5,
    members: [] as string[],
    payoutOrder: "Random",
    cycleLength: 3,
    gracePeriod: 3,
    safetyBuffer: 20,
    yieldStrategy: "Conservative",
    allowedAssets: ["USDC", "DAI"],
    aiPermission: "recommendations" as "manual" | "recommendations" | "guarded"
  })

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleCreate = () => {
    // Save circle logic
    console.log("Creating circle:", formData)
    router.push("/dashboard/circles")
  }

  const renderStep = () => {
    switch(currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Circle Name</Label>
              <Input
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="e.g., Creators Circle"
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Input
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                placeholder="What's this circle for?"
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Contribution Amount</Label>
              <Input
                type="number"
                value={formData.contributionAmount}
                onChange={(e) => updateField("contributionAmount", parseFloat(e.target.value))}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
            </div>
            <div className="space-y-2">
              <Label>Frequency</Label>
              <select
                value={formData.frequency}
                onChange={(e) => updateField("frequency", e.target.value)}
                className="w-full rounded-lg bg-[#111A14] border border-[#B6FF00]/10 p-2 text-[#F5F7F5]"
              >
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Quarterly</option>
              </select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Number of Members</Label>
              <Input
                type="number"
                value={formData.memberCount}
                onChange={(e) => updateField("memberCount", parseInt(e.target.value))}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
                min={3}
                max={20}
              />
            </div>
            <div className="space-y-2">
              <Label>Invite Members</Label>
              <Input
                placeholder="Enter email addresses"
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
              <p className="text-xs text-[#8C968F]">Members will receive invitations via email</p>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Payout Order</Label>
              <select
                value={formData.payoutOrder}
                onChange={(e) => updateField("payoutOrder", e.target.value)}
                className="w-full rounded-lg bg-[#111A14] border border-[#B6FF00]/10 p-2 text-[#F5F7F5]"
              >
                <option>Random</option>
                <option>Sequential</option>
                <option>Vote-based</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label>Grace Period (days)</Label>
              <Input
                type="number"
                value={formData.gracePeriod}
                onChange={(e) => updateField("gracePeriod", parseInt(e.target.value))}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Safety Buffer (%)</Label>
              <Input
                type="number"
                value={formData.safetyBuffer}
                onChange={(e) => updateField("safetyBuffer", parseFloat(e.target.value))}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
              <p className="text-xs text-[#8C968F]">Minimum reserve to protect payouts</p>
            </div>
            <div className="space-y-2">
              <Label>Yield Strategy</Label>
              <select
                value={formData.yieldStrategy}
                onChange={(e) => updateField("yieldStrategy", e.target.value)}
                className="w-full rounded-lg bg-[#111A14] border border-[#B6FF00]/10 p-2 text-[#F5F7F5]"
              >
                <option>Conservative</option>
                <option>Balanced</option>
                <option>Aggressive</option>
              </select>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>AI Permissions</Label>
              <div className="space-y-2">
                {[
                  { value: "manual", label: "Manual", desc: "User controls everything" },
                  { value: "recommendations", label: "AI Recommendations", desc: "AI suggests, user approves" },
                  { value: "guarded", label: "Guarded Autonomy", desc: "AI acts within guardrails" }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateField("aiPermission", option.value)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      formData.aiPermission === option.value
                        ? "border-[#B6FF00] bg-[#B6FF00]/10"
                        : "border-[#B6FF00]/10 hover:border-[#B6FF00]/30"
                    }`}
                  >
                    <p className="font-medium text-[#F5F7F5]">{option.label}</p>
                    <p className="text-sm text-[#8C968F]">{option.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6 text-[#8C968F]"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card className="border-[#B6FF00]/10 bg-[#0B110D]">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-[#B6FF00]">
              Step {currentStep + 1} of {steps.length}
            </Badge>
            <span className="text-sm text-[#8C968F]">
              {steps[currentStep].label}
            </span>
          </div>
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="h-1" />
          <CardTitle className="text-2xl text-[#F5F7F5] mt-4">
            {steps[currentStep].label}
          </CardTitle>
          <CardDescription className="text-[#8C968F]">
            Configure your circle's {steps[currentStep].label.toLowerCase()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            
            {currentStep === steps.length - 1 ? (
              <Button
                className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
                onClick={handleCreate}
              >
                <Check className="mr-2 h-4 w-4" />
                Create Circle
              </Button>
            ) : (
              <Button
                className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
                onClick={handleNext}
                disabled={currentStep === 1 && !formData.contributionAmount}
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
