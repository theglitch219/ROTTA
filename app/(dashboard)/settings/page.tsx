"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Wallet, 
  Bell, 
  Shield, 
  Bot, 
  Users, 
  Lock,
  Save,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'ai', label: 'AI Permissions', icon: Bot },
  { id: 'defaults', label: 'Circle Defaults', icon: Users },
  { id: 'privacy', label: 'Privacy', icon: Lock },
]

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile')
  const [saved, setSaved] = useState(false)
  const [formData, setFormData] = useState({
    name: 'Alex Morgan',
    email: 'alex@example.com',
    wallet: '0x7A8F9B3E2C1D5F6A8B9C0D1E2F3A4B5C6D7E8F9A',
    notifications: true,
    emailNotifications: true,
    twoFactor: false,
    aiPermission: 'recommendations',
    defaultBuffer: 20,
    privacySettings: 'public',
  })

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const renderContent = () => {
    switch(activeSection) {
      case 'profile':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Display Name</Label>
              <Input 
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
              />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input 
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="bg-[#111A14] border-[#B6FF00]/10 text-[#F5F7F5]"
                type="email"
              />
            </div>
            <div className="rounded-lg bg-[#111A14] p-3 border border-[#B6FF00]/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#79D900]" />
                <span className="text-sm text-[#F5F7F5]">Profile verified</span>
              </div>
            </div>
          </div>
        )
      case 'wallet':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Connected Wallet</Label>
              <div className="rounded-lg bg-[#111A14] p-3 border border-[#B6FF00]/10">
                <p className="font-mono text-sm text-[#F5F7F5]">{formData.wallet}</p>
              </div>
            </div>
            <Button variant="secondary" className="w-full border border-[#B6FF00]/10">
              Disconnect Wallet
            </Button>
            <Button variant="outline" className="w-full border-[#B6FF00]/20">
              Connect New Wallet
            </Button>
          </div>
        )
      case 'notifications':
        return (
          <div className="space-y-4">
            {[
              { id: 'notifications', label: 'Push Notifications', desc: 'Get notified about circle activity' },
              { id: 'emailNotifications', label: 'Email Notifications', desc: 'Receive email updates' },
            ].map((setting) => (
              <div key={setting.id} className="flex items-center justify-between rounded-lg bg-[#111A14] p-3 border border-[#B6FF00]/5">
                <div>
                  <p className="font-medium text-[#F5F7F5]">{setting.label}</p>
                  <p className="text-sm text-[#8C968F]">{setting.desc}</p>
                </div>
                <button
                  onClick={() => updateField(setting.id, !formData[setting.id as keyof typeof formData])}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    formData[setting.id as keyof typeof formData] ? 'bg-[#B6FF00]' : 'bg-[#111A14] border border-[#B6FF00]/10'
                  }`}
                >
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    formData[setting.id as keyof typeof formData] ? 'translate-x-5' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        )
      case 'security':
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Two-Factor Authentication</Label>
              <Button 
                variant={formData.twoFactor ? 'secondary' : 'default'}
                className="w-full"
                onClick={() => updateField('twoFactor', !formData.twoFactor)}
              >
                {formData.twoFactor ? 'Disable 2FA' : 'Enable 2FA'}
              </Button>
            </div>
            <div className="rounded-lg bg-amber-500/10 p-3 border border-amber-500/20">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-500">Security Tip</p>
                  <p className="text-xs text-amber-500/70">Enable 2FA to protect your account</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'ai':
        return (
          <div className="space-y-4">
            <Label>AI Permission Level</Label>
            <div className="space-y-2">
              {[
                { value: 'manual', label: 'Manual', desc: 'User controls everything' },
                { value: 'recommendations', label: 'AI Recommendations', desc: 'AI suggests, user approves' },
                { value: 'guarded', label: 'Guarded Autonomy', desc: 'AI acts within guardrails' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateField('aiPermission', option.value)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    formData.aiPermission === option.value
                      ? 'border-[#B6FF00] bg-[#B6FF00]/10'
                      : 'border-[#B6FF00]/10 hover:border-[#B6FF00]/30'
                  }`}
                >
                  <p className="font-medium text-[#F5F7F5]">{option.label}</p>
                  <p className="text-sm text-[#8C968F]">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )
      default:
        return <p className="text-[#8C968F]">Settings for {activeSection}</p>
    }
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#F5F7F5]">Settings</h1>
        <p className="text-sm text-[#8C968F]">Manage your account and preferences</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                activeSection === section.id
                  ? 'bg-[#B6FF00]/10 text-[#B6FF00]'
                  : 'text-[#8C968F] hover:bg-[#111A14] hover:text-[#F5F7F5]'
              }`}
            >
              <section.icon className="h-4 w-4" />
              {section.label}
            </button>
          ))}
        </div>

        <div className="md:col-span-3">
          <Card className="border-[#B6FF00]/10 bg-[#0B110D]">
            <CardHeader>
              <CardTitle className="text-lg text-[#F5F7F5]">
                {sections.find(s => s.id === activeSection)?.label}
              </CardTitle>
              <CardDescription className="text-[#8C968F]">
                Update your {sections.find(s => s.id === activeSection)?.label.toLowerCase()} settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              {renderContent()}
              
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {saved && (
                    <>
                      <CheckCircle className="h-4 w-4 text-[#79D900]" />
                      <span className="text-sm text-[#79D900]">Settings saved</span>
                    </>
                  )}
                </div>
                <Button 
                  className="bg-[#B6FF00] text-[#050705] hover:bg-[#B6FF00]/90"
                  onClick={handleSave}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
                }
