"use client"

import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { ChevronLeft, Award, Calendar, Shield, TrendingUp, Info } from "lucide-react"
import { TrustBadge } from "@/components/trust-badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTranslation } from "@/lib/hooks/use-translation"

export default function InvestmentPage() {
  const router = useRouter()
  const { state } = useApp()
  const { t } = useTranslation()

  const estimatedMonthlyProfit = (state.investmentBalance * 0.05) / 12

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => router.push("/home")}>
            <ChevronLeft className="h-4 w-4" />
            {t("back")}
          </Button>
          <h1 className="text-2xl font-bold text-foreground">{t("investment.title")}</h1>
          <div className="w-10" />
        </div>

        {/* Portfolio Value Card */}
        <Card className="mb-6 border-primary/20 bg-primary/5 p-6">
          <div className="mb-1 text-sm text-muted-foreground">{t("investment.currentPortfolioValue")}</div>
          <div className="mb-6 text-4xl font-bold text-card-foreground">{state.investmentBalance.toFixed(2)} SAR</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs text-muted-foreground">{t("investment.expectedAnnualProfit")}</div>
              <div className="text-lg font-semibold text-primary">
                {(state.investmentBalance * 0.05).toFixed(2)} SAR
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">{t("investment.monthlyEstimate")}</div>
              <div className="text-lg font-semibold text-primary">{estimatedMonthlyProfit.toFixed(2)} SAR</div>
            </div>
          </div>
        </Card>

        {/* Portfolio Details with TrustBadge and Tooltips */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold mb-1">{t("investment.portfolio.title")}</h2>
                <div className="flex gap-2">
                  <TrustBadge type="shariah" />
                  <TrustBadge type="regulated" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    {t("investment.returns.label")}
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3 text-emerald-600/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">{t("investment.returns.tooltip")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">~5.0%</div>
                <div className="text-[10px] text-emerald-600/80">{t("investment.returns.sub")}</div>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {t("investment.risk.label")}
                  </span>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="h-3 w-3 text-slate-500/70" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-xs">{t("investment.risk.tooltip")}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="text-2xl font-bold text-slate-700 dark:text-slate-300">{t("investment.risk.low")}</div>
                <div className="text-[10px] text-slate-500">{t("investment.risk.sub")}</div>
              </div>
            </div>

            {/* Investment Details List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">{t("savings.partnerBank")}</span>
                <span className="font-medium text-card-foreground">Al Rajhi Bank</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">{t("investment.investmentType")}</span>
                <span className="font-medium text-card-foreground">{t("investment.fixedIncomeSukuk")}</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">{t("investment.expectedReturn")}</span>
                <span className="font-medium text-primary">~5%</span>
              </div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-muted-foreground">{t("investment.nextPayout")}</span>
                <span className="font-medium text-card-foreground">31 Dec 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{t("savings.accountStatus")}</span>
                <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  <div className="h-2 w-2 rounded-full bg-green-700" />
                  {t("savings.active")}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-6 mt-6">
          <h2 className="mb-3 text-lg font-semibold text-foreground">{t("investment.whyPartnerInvestment")}</h2>
          <div className="grid gap-3">
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">{t("investment.fixedReturns")}</div>
                <div className="text-sm text-muted-foreground">{t("investment.fixedReturnsDesc")}</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">{t("investment.shariahCompliant")}</div>
                <div className="text-sm text-muted-foreground">{t("investment.shariahCompliantDesc")}</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">{t("investment.annualPayouts")}</div>
                <div className="text-sm text-muted-foreground">{t("investment.annualPayoutsDesc")}</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">{t("investment.steadyGrowth")}</div>
                <div className="text-sm text-muted-foreground">{t("investment.steadyGrowthDesc")}</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Risk Disclosure */}
        <Card className="mb-6 border-amber-200/50 bg-amber-50/50 p-6">
          <h2 className="mb-3 text-lg font-semibold text-card-foreground">{t("investment.riskDisclosure")}</h2>
          <div className="text-sm text-muted-foreground">{t("investment.riskDisclosureDesc")}</div>
        </Card>

        {/* FAQs */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">{t("savings.commonQuestions")}</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-2 font-medium text-card-foreground">{t("investment.isGuaranteed")}</div>
              <div className="text-sm text-muted-foreground">{t("investment.isGuaranteedDesc")}</div>
            </div>
            <div>
              <div className="mb-2 font-medium text-card-foreground">{t("investment.canWithdrawEarly")}</div>
              <div className="text-sm text-muted-foreground">{t("investment.canWithdrawEarlyDesc")}</div>
            </div>
            <div>
              <div className="mb-2 font-medium text-card-foreground">{t("investment.isShariahCompliant")}</div>
              <div className="text-sm text-muted-foreground">{t("investment.isShariahCompliantDesc")}</div>
            </div>
            <div>
              <div className="mb-2 font-medium text-card-foreground">{t("investment.howTaxesCalculated")}</div>
              <div className="text-sm text-muted-foreground">{t("investment.howTaxesCalculatedDesc")}</div>
            </div>
          </div>
        </Card>
      </div>
      <BottomNav />
    </div>
  )
}
