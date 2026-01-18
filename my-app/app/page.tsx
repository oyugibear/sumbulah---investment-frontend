"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Coffee, Calendar, Globe } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const { state, addTransaction, simulatePayday, updateSettings, logAnalytics } = useApp()

  useEffect(() => {
    // Redirect to home if onboarding is complete
    if (state.onboardingComplete) {
      router.push("/home")
    }
  }, [state.onboardingComplete, router])

  const handleCoffeePurchase = () => {
    addTransaction({
      date: new Date().toISOString(),
      merchant: "Starbucks",
      category: "Coffee",
      amount: 19,
    })
    logAnalytics("demo_coffee_purchase")
    router.push("/home")
  }

  const handleSimulatePayday = () => {
    simulatePayday()
    logAnalytics("demo_payday_simulation")
  }

  const handleSwitchToArabic = () => {
    updateSettings({ language: "ar", rtl: true })
    logAnalytics("language_changed", { language: "ar" })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-4 py-12">
        {/* Wordmark */}
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">Sunbullah</h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold leading-tight text-foreground">
            Spend normally. Grow automatically.
          </h2>
          <p className="mb-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Round up your purchases and invest the change in domestic, Shariah-aligned portfolios.
          </p>

          {/* Trust Chips */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Domestic</div>
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Shariah-aligned</div>
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">Habit-first</div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <Button size="lg" className="w-full" onClick={() => router.push("/onboarding")}>
              Get Started (Demo)
            </Button>
          </div>
        </div>

        {/* Demo Actions */}
        <Card className="mb-8 p-6">
          <h3 className="mb-4 text-lg font-semibold text-card-foreground">Try Demo Features</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 bg-transparent"
              onClick={handleCoffeePurchase}
            >
              <Coffee className="h-5 w-5" />
              Try Coffee Purchase
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 bg-transparent"
              onClick={handleSimulatePayday}
            >
              <Calendar className="h-5 w-5" />
              Simulate Payday
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-3 bg-transparent"
              onClick={handleSwitchToArabic}
            >
              <Globe className="h-5 w-5" />
              Switch to Arabic (RTL)
            </Button>
          </div>
        </Card>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <button onClick={() => router.push("/legal?section=terms")} className="hover:text-foreground">
            Terms
          </button>
          <span>•</span>
          <button onClick={() => router.push("/legal?section=privacy")} className="hover:text-foreground">
            Privacy
          </button>
          <span>•</span>
          <button onClick={() => router.push("/legal?section=risk")} className="hover:text-foreground">
            Risk Disclosure
          </button>
        </div>

        {/* Legal Banner */}
        <div className="mt-8 rounded-xl border border-border bg-muted/50 p-4 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Demo Mode:</strong> Prototype for demonstration purposes only.
          </p>
          <p className="text-xs">
            Investing involves risk. Values may go down as well as up. Domestic & Shariah alignment are illustrative.
          </p>
        </div>
      </div>
    </div>
  )
}
