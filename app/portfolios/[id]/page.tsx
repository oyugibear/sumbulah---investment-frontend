"use client"

import { useRouter, useParams } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PORTFOLIOS } from "@/lib/mock-data"
import { ChevronLeft, TrendingUp, Shield, Clock } from "lucide-react"

export default function PortfolioDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { state, updateSettings, logAnalytics } = useApp()

  const portfolio = PORTFOLIOS.find((p) => p.id === params.id)
  const { language, portfolioId } = state.settings

  if (!portfolio) {
    return null
  }

  const isSelected = portfolioId === portfolio.id

  const handleSelect = () => {
    updateSettings({ portfolioId: portfolio.id })
    logAnalytics("portfolio_selected", { portfolioId: portfolio.id })
    router.push("/portfolios")
  }

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="mb-4">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          <h1 className="mb-2 text-3xl font-bold text-foreground">
            {language === "ar" ? portfolio.nameAr : portfolio.name}
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Risk Level:</span>
            <div className="flex gap-1">
              {[1, 2, 3].map((level) => (
                <div
                  key={level}
                  className={`h-2 w-8 rounded-full ${level <= portfolio.risk ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-6 p-6">
          <p className="leading-relaxed text-card-foreground">
            {language === "ar" ? portfolio.descriptionAr : portfolio.description}
          </p>
        </Card>

        {/* Key Features */}
        <div className="mb-6 space-y-3">
          <Card className="flex items-start gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 font-semibold text-card-foreground">Growth Potential</h3>
              <p className="text-sm text-muted-foreground">
                {portfolio.risk === 1 && "Steady, conservative growth with capital preservation focus"}
                {portfolio.risk === 2 && "Balanced growth with moderate risk and diversification"}
                {portfolio.risk === 3 && "Higher growth potential with increased market exposure"}
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 font-semibold text-card-foreground">Shariah Compliant</h3>
              <p className="text-sm text-muted-foreground">
                All investments screened and structured according to Islamic principles
              </p>
            </div>
          </Card>

          <Card className="flex items-start gap-4 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 font-semibold text-card-foreground">Time Horizon</h3>
              <p className="text-sm text-muted-foreground">
                Recommended: {language === "ar" ? portfolio.timeHorizonAr : portfolio.timeHorizon}
              </p>
            </div>
          </Card>
        </div>

        {/* Asset Allocation */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Asset Allocation</h2>
          <div className="space-y-4">
            {portfolio.allocations.map((allocation) => (
              <div key={allocation.asset}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-card-foreground">
                    {language === "ar" ? allocation.assetAr : allocation.asset}
                  </span>
                  <span className="text-sm text-muted-foreground">{allocation.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${allocation.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Fees */}
        <Card className="mb-6 p-6">
          <h2 className="mb-2 text-lg font-semibold text-card-foreground">Fees</h2>
          <p className="text-sm text-muted-foreground">
            Low flat subscription fee - Demo mode. Actual fees would be disclosed in production.
          </p>
        </Card>

        {/* Action Button */}
        {!isSelected ? (
          <Button className="w-full" size="lg" onClick={handleSelect}>
            Switch to This Portfolio
          </Button>
        ) : (
          <Button className="w-full bg-transparent" size="lg" variant="outline" disabled>
            Currently Selected
          </Button>
        )}

        {/* Risk Disclosure */}
        <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4 text-center text-sm text-muted-foreground">
          <p>
            <strong>Risk Disclosure:</strong> Investing involves risk. Values may go down as well as up. Past
            performance does not guarantee future results.
          </p>
        </div>
      </div>
    </div>
  )
}
