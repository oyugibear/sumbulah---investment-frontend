"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { MilestoneCelebration } from "@/components/milestone-celebration"
import { StatCardSkeleton } from "@/components/skeleton-loader"
import {
  Settings,
  ShieldCheck,
  Bell,
  HelpCircle,
  Calendar,
  Target,
  HandCoins,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react"
import { MOCK_MARKET_DATA } from "@/lib/mock-data"
import { SavingsSimulator } from "@/components/savings-simulator"
import { GoalJars } from "@/components/goal-jars"
import { useTranslation } from "@/lib/hooks/use-translation"
import { trackEvent } from "@/lib/analytics"

export default function HomePage() {
  const router = useRouter()
  const { state, addDeposit, updateSettings, logAnalytics } = useApp()
  const { t, language } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [showMilestone, setShowMilestone] = useState(false)
  const [milestone, setMilestone] = useState<{ amount: number; message: string } | null>(null)

  useEffect(() => {
    trackEvent("app_open", { source: "direct" })
  }, [])

  useEffect(() => {
    if (!state.onboardingComplete) {
      router.push("/")
    } else {
      // Simulate loading
      setTimeout(() => setIsLoading(false), 800)
    }
  }, [state.onboardingComplete, router])

  useEffect(() => {
    const milestones = [
      { amount: 50, message: "You've taken your first steps into investing. Every riyal counts!" },
      { amount: 100, message: "You're building momentum! Keep up the great habit." },
      { amount: 250, message: "Quarter of the way to 1000! Your consistency is paying off." },
      { amount: 500, message: "Halfway to 1000 SAR! You're doing amazing." },
      { amount: 1000, message: "1000 SAR invested! You're a serious investor now." },
    ]

    const reachedMilestone = milestones.find(
      (m) => state.totalInvested >= m.amount && state.totalInvested < m.amount + 10,
    )

    if (reachedMilestone && !showMilestone) {
      setMilestone(reachedMilestone)
      setShowMilestone(true)
    }
  }, [state.totalInvested, showMilestone])

  const handleQuickDeposit = () => {
    addDeposit(25)
    logAnalytics("deposit_added", { amount: 25, type: "quick" })
  }

  const toggleRoundUps = () => {
    const newStatus = state.settings.linkedSource ? null : "MockBank"
    updateSettings({ linkedSource: newStatus })
    logAnalytics(newStatus ? "roundups_enabled" : "roundups_paused")
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const isRoundUpsActive = state.settings.linkedSource !== null
  const marketData = MOCK_MARKET_DATA
  const investmentOption = state.settings.investmentOption

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-lg px-4 py-8">
          <div className="mb-8">
            <div className="mb-1 h-8 w-32 animate-pulse rounded bg-muted" />
            <div className="h-4 w-64 animate-pulse rounded bg-muted" />
          </div>
          <StatCardSkeleton />
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {showMilestone && milestone && (
        <MilestoneCelebration milestone={milestone} onDismiss={() => setShowMilestone(false)} />
      )}

      <div className="mx-auto max-w-lg px-4 py-8 space-y-6 animate-in fade-in duration-500">
        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-emerald-950 dark:text-emerald-50">
              {t("home.title")}, {state.user?.name || "Guest"} 👋
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-emerald-600" />
              <span>{t("onboarding.trust.regulated")}</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </header>

        {/* Hero: Savings Simulator */}
        <section>
          <SavingsSimulator />
        </section>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="outline"
            className="flex flex-col h-auto py-3 gap-1 border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 bg-transparent"
            onClick={() => router.push("/transfer")}
          >
            <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
            <span className="text-[10px]">{t("transfer.deposit")}</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col h-auto py-3 gap-1 border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 bg-transparent"
            onClick={() => router.push("/transfer")}
          >
            <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            <span className="text-[10px]">{t("transfer.withdraw")}</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col h-auto py-3 gap-1 border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 bg-transparent"
            onClick={() => router.push("/roundups")}
          >
            <Settings className="h-5 w-5 text-emerald-600" />
            <span className="text-[10px]">{t("home.quickActions")}</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col h-auto py-3 gap-1 border-emerald-100 dark:border-emerald-900/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 bg-transparent"
            onClick={() => router.push("/learn")}
          >
            <HelpCircle className="h-5 w-5 text-emerald-600" />
            <span className="text-[10px]">{t("learn.title")}</span>
          </Button>
        </div>

        {/* Payday Nudge */}
        {state.settings.paydaySaveEnabled && (
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-none shadow-lg">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-emerald-100" />
                  <span className="text-xs font-medium text-emerald-100">
                    {t("home.nextDeposit")} {formatDate(state.nextAutoDeposit.date)}
                  </span>
                </div>
                <div className="font-bold text-lg">
                  {t("roundups.paydaySave")} {state.nextAutoDeposit.amount} SAR?
                </div>
              </div>
              <Button size="sm" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold shadow-sm">
                {t("common.continue")}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Goal Jars */}
        <section>
          {state.goals.length > 0 ? (
            <GoalJars />
          ) : (
            <Card className="border-dashed border-2 bg-slate-50 dark:bg-slate-900/50">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{t("home.noGoals")}</h3>
                  <p className="text-sm text-muted-foreground">{t("home.noGoalsDesc")}</p>
                </div>
                <Button variant="outline" onClick={() => router.push("/onboarding")}>
                  {t("home.addGoal")}
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Zakat feature */}
        <section>
          <Card className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                  <HandCoins className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-semibold">{language === "ar" ? "الزكاة" : "Zakat"}</div>
                  <div className="text-xs text-muted-foreground">
                    {language === "ar" ? "احسب وتتبع زكاتك" : "Calculate and track your zakat"}
                  </div>
                </div>
              </div>
              <Button size="sm" variant="outline" onClick={() => router.push("/zakat")}>
                {language === "ar" ? "عرض" : "View"}
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Recent Activity */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h2 className="font-bold text-lg">{t("savings.recentActivity")}</h2>
            <Button variant="link" size="sm" className="text-emerald-600 h-auto p-0">
              {t("market.viewMarket")}
            </Button>
          </div>
          <div className="space-y-2">
            {/* Mock recent transactions */}
            {[
              { id: 1, merchant: "Starbucks", date: "Today", roundUp: 2.5 },
              { id: 2, merchant: "Uber", date: "Yesterday", roundUp: 4.2 },
              { id: 3, merchant: "Panda", date: "Yesterday", roundUp: 1.8 },
            ].map((tx) => (
              <Card key={tx.id} className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-lg shadow-sm">
                      {tx.merchant === "Starbucks" ? "☕️" : tx.merchant === "Uber" ? "🚗" : "🛒"}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{tx.merchant}</div>
                      <div className="text-xs text-muted-foreground">{tx.date}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-600">+{tx.roundUp.toFixed(2)} SAR</div>
                    <div className="text-[10px] text-muted-foreground">{t("roundups.investing")}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  )
}
