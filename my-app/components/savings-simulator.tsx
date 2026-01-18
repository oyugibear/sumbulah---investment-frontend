"use client"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, TrendingUp, PiggyBank, Loader2 } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts"
import { useTranslation } from "@/lib/hooks/use-translation"
import { trackEvent } from "@/lib/analytics"
import { getUserById, User } from "@/lib/services/user-service"
import { getAuthState, debugAuthStatus, getCurrentUserId } from "@/lib/utils/auth"

export function SavingsSimulator() {
  const { t, language } = useTranslation()
  const isRTL = language === "ar"

  const [timeHorizon, setTimeHorizon] = useState(3) // Years
  const [monthlyContribution, setMonthlyContribution] = useState(200)
  const [roundUpAvg, setRoundUpAvg] = useState(120)
  const [investmentType, setInvestmentType] = useState<"savings" | "investment">("investment")
  const [userData, setUserData] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [data, setData] = useState<any[]>([])
  const [finalAmount, setFinalAmount] = useState(0)
  const [totalInvested, setTotalInvested] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true)
        
        // Debug localStorage contents
        console.log("🔍 LocalStorage contents:", {
          token: localStorage.getItem('token'),
          authToken: localStorage.getItem('authToken'), 
          userId: localStorage.getItem('userId'),
          user: localStorage.getItem('user')
        })
        
        // Debug authentication status
        debugAuthStatus()
        
        const authState = getAuthState()
        console.log("🔍 Auth state:", authState)
        
        if (!authState.isAuthenticated) {
          console.log("🚫 User not authenticated - using default simulator values")
          setError("User not authenticated - using default values")
          return
        }
        
        const userId = getCurrentUserId()
        console.log("🔍 Retrieved user ID:", userId)
        
        if (userId) {
          const user = await getUserById(userId)
          console.log("✅ Raw API response:", user)
          
          setUserData(user)
          
          // Set initial values based on user data
          // We don't have monthly_contribution field, so estimate from income
          if (user.monthly_income) {
            const income = user.monthly_income
            if (!isNaN(income)) {
              // Suggest 10% of monthly income as default investment amount
              const suggestedContribution = Math.floor(income * 0.1)
              setMonthlyContribution(Math.max(100, Math.min(suggestedContribution, 5000))) // Between 100-5000 SAR
            }
          }
          
          // Calculate round-up average based on round_up_by setting
          if (user.round_up_by) {
            // Estimate: average purchase rounds up to half of the round-up rule
            setRoundUpAvg(user.round_up_by * 15) // Assuming ~30 purchases per month
          }
          
          // Set investment type based on risk appetite
          if (user.risk_appetite) {
            if (user.risk_appetite === 'conservative') {
              setInvestmentType('savings')
            } else {
              setInvestmentType('investment')
            }
          }
          
          // Set time horizon based on financial goal (if available)
          if (user.target_amount && user.monthly_income) {
            const income = user.monthly_income
            if (!isNaN(income)) {
              const estimatedMonthlyInvestment = income * 0.1 // Assume 10% investment rate
              const estimatedYears = Math.ceil(user.target_amount / (estimatedMonthlyInvestment * 12))
              setTimeHorizon(Math.min(Math.max(estimatedYears, 1), 10))
            }
          }
        } else {
          console.log("⚠️ No user ID found in localStorage")
          setError("No user ID found")
        }
      } catch (err) {
        console.error("❌ Error fetching user data:", err)
        setError(err instanceof Error ? err.message : 'Failed to load user data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserData()
  }, [])

  // Calculate projection data
  useEffect(() => {
    // Wait for user data to load before calculating projections
    if (isLoading || !userData) {
      console.log("⏳ Waiting for user data to load before calculating projections...")
      return
    }
    
    const monthlyDeposit = monthlyContribution + roundUpAvg
    const annualRate = investmentType === "investment" ? 0.05 : 0.005 // 5% vs 0.5%
    const monthlyRate = annualRate / 12
    console.log("💰 User data in calculation:", userData)
    console.log("💰 Investment balance:", userData?.investment_balance)
    
    const newData = []
    let currentBalance = userData?.investment_balance || 0 // Start with user's actual investment balance
    let invested = userData?.investment_balance || 0 // Count existing balance as already invested

    // Generate data points (monthly)
    const totalMonths = timeHorizon * 12

    // Add initial data point showing current balance
    newData.push({
      month: 0,
      balance: Math.round(currentBalance),
      invested: Math.round(invested),
      profit: 0, // No profit at starting point
    })

    for (let i = 1; i <= totalMonths; i++) {
      currentBalance = (currentBalance + monthlyDeposit) * (1 + monthlyRate)
      invested += monthlyDeposit

      // Add data point every 3 months or for short durations every month
      if (timeHorizon <= 1 || i % 3 === 0 || i === totalMonths) {
        newData.push({
          month: i,
          balance: Math.round(currentBalance),
          invested: Math.round(invested),
          profit: Math.round(currentBalance - (userData?.investment_balance || 0) - (i * monthlyDeposit)),
        })
      }
    }

    setData(newData)
    setFinalAmount(Math.round(currentBalance))
    setTotalInvested(Math.round(invested))
    // Calculate profit as final balance minus starting balance minus new contributions
    const startingBalance = userData?.investment_balance || 0
    const newContributions = totalMonths * monthlyDeposit
    setTotalProfit(Math.round(currentBalance - startingBalance - newContributions))

    // Only track if values changed from defaults
    if (timeHorizon !== 3 || monthlyContribution !== 200) {
      trackEvent("slider_interaction", {
        timeHorizon,
        monthlyContribution,
        finalAmount,
      })
    }
  }, [timeHorizon, monthlyContribution, roundUpAvg, investmentType, userData, isLoading])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (isLoading) {
    return (
      <Card className="w-full overflow-hidden border-emerald-100 dark:border-emerald-900/50 shadow-lg">
        <CardContent className="p-6 flex items-center justify-center h-64">
          <div className="flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-emerald-500" />
            <span className="text-muted-foreground">{t("loading")}</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="w-full overflow-hidden border-red-100 dark:border-red-900/50 shadow-lg">
        <CardContent className="p-6 text-center">
          <div className="text-red-600 dark:text-red-400">{error}</div>
          <p className="text-sm text-muted-foreground mt-2">
            {t("Using default values for simulation")}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full overflow-hidden border-emerald-100 dark:border-emerald-900/50 shadow-lg">
      <CardHeader className="bg-linear-to-r from-emerald-50 to-white dark:from-emerald-950/30 dark:to-background pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-medium text-emerald-900 dark:text-emerald-50 flex items-center gap-2">
              {t("simulator.title")}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-emerald-500/70" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs text-xs">{t("simulator.tooltip")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{t("simulator.subtitle")}</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {formatCurrency(finalAmount)}
            </div>
            <div className="text-xs text-emerald-600/80 font-medium flex items-center justify-end gap-1">
              <TrendingUp className="h-3 w-3" />+{formatCurrency(totalProfit)} {t("simulator.profit")}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-6">
        {/* Chart Area */}
        <div className="h-[200px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                tick={{ fontSize: 10 }}
                tickFormatter={(value) => `${Math.round(value / 12)}y`}
                axisLine={false}
                tickLine={false}
                ticks={
                  data.length > 5
                    ? data.filter((_, i) => i % Math.ceil(data.length / 5) === 0).map((d) => d.month)
                    : undefined
                }
              />
              <YAxis
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <RechartsTooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  borderRadius: "8px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                }}
                formatter={(value: number) => [formatCurrency(value), t("simulator.balance")]}
                labelFormatter={(label) => `${Math.floor(label / 12)} ${t("years")} ${label % 12} ${t("months")}`}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorBalance)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Time Horizon Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">{t("simulator.timeHorizon")}</label>
              <span className="text-sm font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded">
                {timeHorizon} {t("years")}
              </span>
            </div>
            <Slider
              value={[timeHorizon]}
              min={1}
              max={10}
              step={1}
              onValueChange={(vals) => setTimeHorizon(vals[0])}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground px-1">
              <span>1y</span>
              <span>5y</span>
              <span>10y</span>
            </div>
          </div>

          {/* Investment Type Toggle */}
          <div className="bg-slate-100 dark:bg-slate-800/50 p-1 rounded-lg">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setInvestmentType("savings")}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-all flex items-center gap-8 ${
                  investmentType === "savings"
                    ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-700 dark:text-emerald-400"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                }`}
              >
                <PiggyBank className="h-4 w-4 shrink-0" />
                <div className="flex flex-col items-center leading-tight text-sm">
                  <span>{t("savings.title")}</span>
                  <span>(~0.5%)</span>
                </div>
              </button>
              <button
                onClick={() => setInvestmentType("investment")}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-all flex items-center ${
                  investmentType === "investment"
                    ? "bg-white dark:bg-slate-700 shadow-sm text-emerald-700 dark:text-emerald-400"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                }`}
              >
                <TrendingUp className="h-4 w-4 shrink-0" />
                <div className="flex flex-col items-center leading-tight text-sm flex-1">
                  <span>{t("investment.title")}</span>
                  <span>(~5%)</span>
                </div>
              </button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
              <div className="text-xs text-muted-foreground mb-1">{t("simulator.totalDeposited")}</div>
              <div className="font-semibold">{formatCurrency(totalInvested)}</div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-xs text-emerald-700/70 dark:text-emerald-400/70 mb-1">
                {t("simulator.estvProfit")}
              </div>
              <div className="font-semibold text-emerald-700 dark:text-emerald-400">+{formatCurrency(totalProfit)}</div>
            </div>
          </div>

          <p className="text-[10px] text-center text-muted-foreground/60">{t("simulator.disclaimer")}</p>
        </div>
      </CardContent>
    </Card>
  )
}
