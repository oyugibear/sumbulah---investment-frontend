"use client"

import { useState, useEffect } from "react"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { calculateFinancialHealthScore, generateRecommendations } from "@/lib/services/recommendations-service"
import type { FinancialHealthScore, FinancialRecommendation } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { BottomNav } from "@/components/bottom-nav"

export default function HealthPage() {
  const { state } = useApp()
  const t = useTranslation()
  const [healthScore, setHealthScore] = useState<FinancialHealthScore | null>(null)
  const [recommendations, setRecommendations] = useState<FinancialRecommendation[]>([])

  useEffect(() => {
    const score = calculateFinancialHealthScore(state)
    setHealthScore(score)
    setRecommendations(generateRecommendations(state, score))
  }, [state])

  if (!healthScore) return null

  const radarData = [
    {
      metric: state.settings.language === "ar" ? "معدل الادخار" : "Savings Rate",
      value: healthScore.savingsRate,
    },
    {
      metric: state.settings.language === "ar" ? "التنويع" : "Diversification",
      value: healthScore.diversification,
    },
    {
      metric: state.settings.language === "ar" ? "صندوق الطوارئ" : "Emergency Fund",
      value: healthScore.emergencyFund,
    },
    {
      metric: state.settings.language === "ar" ? "الأداء" : "Performance",
      value: healthScore.investmentPerformance,
    },
    {
      metric: state.settings.language === "ar" ? "الزكاة" : "Zakat",
      value: healthScore.zakatCompliance,
    },
    {
      metric: state.settings.language === "ar" ? "الميزانية" : "Budget",
      value: healthScore.budgetAdherence,
    },
  ]

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400"
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  const getHealthBg = (score: number) => {
    if (score >= 80) return "bg-green-50 dark:bg-green-950 border-green-200"
    if (score >= 60) return "bg-yellow-50 dark:bg-yellow-950 border-yellow-200"
    return "bg-red-50 dark:bg-red-950 border-red-200"
  }

  const getPriorityColor = (priority: string) => {
    if (priority === "high") return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
    if (priority === "medium") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
    return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="container max-w-4xl py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {state.settings.language === "ar" ? "تقرير الصحة المالية" : "Financial Health Report"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {state.settings.language === "ar"
              ? "تقييم شامل لصحتك المالية والتوصيات الشخصية"
              : "Comprehensive assessment of your financial health with personalized recommendations"}
          </p>
        </div>

        {/* Overall Health Score */}
        <Card className={`mb-6 border-2 ${getHealthBg(healthScore.overall)}`}>
          <CardHeader>
            <CardTitle className="text-emerald-900 dark:text-emerald-100">
              {state.settings.language === "ar" ? "درجة الصحة العامة" : "Overall Health Score"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="flex-1">
                <div className={`text-5xl font-bold ${getHealthColor(healthScore.overall)}`}>{healthScore.overall}</div>
                <p className="text-sm text-muted-foreground mt-2">
                  {healthScore.overall >= 80
                    ? state.settings.language === "ar"
                      ? "صحتك المالية ممتازة!"
                      : "Excellent financial health!"
                    : healthScore.overall >= 60
                      ? state.settings.language === "ar"
                        ? "صحتك المالية جيدة"
                        : "Good financial health"
                      : state.settings.language === "ar"
                        ? "هناك مجال للتحسن"
                        : "Room for improvement"}
                </p>
              </div>

              {/* Radar Chart */}
              <div className="flex-1">
                <ResponsiveContainer width="100%" height={250}>
                  <RadarChart data={radarData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar name="Score" dataKey="value" stroke="#059669" fill="#10b981" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {[
            { label: "Savings Rate", labelAr: "معدل الادخار", value: healthScore.savingsRate },
            { label: "Diversification", labelAr: "التنويع", value: healthScore.diversification },
            { label: "Emergency Fund", labelAr: "صندوق الطوارئ", value: healthScore.emergencyFund },
            { label: "Performance", labelAr: "الأداء", value: healthScore.investmentPerformance },
            { label: "Zakat", labelAr: "الزكاة", value: healthScore.zakatCompliance },
            { label: "Budget", labelAr: "الميزانية", value: healthScore.budgetAdherence },
          ].map((metric) => (
            <Card key={metric.label} className="text-center">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  {state.settings.language === "ar" ? metric.labelAr : metric.label}
                </p>
                <p className={`text-3xl font-bold ${getHealthColor(metric.value)}`}>{metric.value}%</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>
              {state.settings.language === "ar" ? "التوصيات الشخصية" : "Personalized Recommendations"}
            </CardTitle>
            <CardDescription>
              {state.settings.language === "ar"
                ? `لديك ${recommendations.length} توصيات`
                : `You have ${recommendations.length} recommendations`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="border rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(rec.priority)}`}>
                      {rec.priority.toUpperCase()}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">
                        {state.settings.language === "ar" ? rec.titleAr : rec.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {state.settings.language === "ar" ? rec.descriptionAr : rec.description}
                      </p>
                      {rec.actionLabel && (
                        <Button variant="outline" size="sm">
                          {rec.actionLabel}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}
