"use client"

import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { PORTFOLIOS } from "@/lib/mock-data"
import { ChevronRight, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PortfoliosPage() {
  const router = useRouter()
  const { state } = useApp()
  const { portfolioId, language } = state.settings

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground">Portfolios</h1>
          <p className="text-muted-foreground">
            All portfolios are Shariah-aligned and invest in domestic Saudi assets
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="mb-6 space-y-4">
          {PORTFOLIOS.map((portfolio) => {
            const isSelected = portfolioId === portfolio.id
            return (
              <Card
                key={portfolio.id}
                className={cn(
                  "cursor-pointer p-6 transition-all",
                  isSelected ? "border-primary bg-primary/5" : "hover:border-primary/50",
                )}
                onClick={() => router.push(`/portfolios/${portfolio.id}`)}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                      {language === "ar" ? portfolio.nameAr : portfolio.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Risk Level:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3].map((level) => (
                          <div
                            key={level}
                            className={cn("h-2 w-8 rounded-full", level <= portfolio.risk ? "bg-primary" : "bg-muted")}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  {isSelected && <CheckCircle2 className="h-6 w-6 text-primary" />}
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {language === "ar" ? portfolio.descriptionAr : portfolio.description}
                </p>

                <div className="mb-4 space-y-2">
                  {portfolio.allocations.map((allocation) => (
                    <div key={allocation.asset} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {language === "ar" ? allocation.assetAr : allocation.asset}
                      </span>
                      <span className="font-medium text-card-foreground">{allocation.percentage}%</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Time horizon: {language === "ar" ? portfolio.timeHorizonAr : portfolio.timeHorizon}
                  </div>
                  <Button variant="ghost" size="sm">
                    Details
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Info Card */}
        <Card className="border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-2 font-semibold text-card-foreground">About Our Portfolios</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            All portfolios invest exclusively in domestic Saudi assets and are structured to comply with Shariah
            principles. Fees are kept low with a flat subscription model. This is a demonstration - actual portfolios
            would be managed by licensed professionals.
          </p>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
