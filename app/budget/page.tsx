"use client"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MOCK_BUDGET_DATA } from "@/lib/mock-data"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { BottomNav } from "@/components/bottom-nav"

const COLORS = ["#059669", "#10b981", "#34d399", "#6ee7b7", "#d1fae5", "#ecfdf5"]

export default function BudgetPage() {
  const { state } = useApp()
  const t = useTranslation()

  const categoryData = MOCK_BUDGET_DATA.categories.map((cat) => ({
    name: state.settings.language === "ar" ? cat.name : cat.name,
    spent: cat.spent,
    limit: cat.limit,
    percentage: (cat.spent / cat.limit) * 100,
  }))

  const pieData = MOCK_BUDGET_DATA.categories.map((cat) => ({
    name: cat.name,
    value: cat.spent,
  }))

  const budgetUtilization = (MOCK_BUDGET_DATA.totalSpent / MOCK_BUDGET_DATA.totalBudget) * 100

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="container max-w-4xl py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {state.settings.language === "ar" ? "متتبع الميزانية" : "Budget Tracker"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {state.settings.language === "ar"
              ? "تابع نفقاتك الشهرية وتحقق من أهدافك المالية"
              : "Track your monthly spending and reach your financial goals"}
          </p>
        </div>

        {/* Overall Budget Summary */}
        <Card className="mb-6 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-background">
          <CardHeader>
            <CardTitle className="text-emerald-900 dark:text-emerald-100">
              {state.settings.language === "ar" ? "ملخص الميزانية الشهرية" : "Monthly Budget Summary"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {state.settings.language === "ar" ? "الميزانية الكلية" : "Total Budget"}
                </p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  {MOCK_BUDGET_DATA.totalBudget.toLocaleString()} SAR
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {state.settings.language === "ar" ? "المبلغ المنفق" : "Spent"}
                </p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {MOCK_BUDGET_DATA.totalSpent.toLocaleString()} SAR
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {state.settings.language === "ar" ? "المتبقي" : "Remaining"}
                </p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {(MOCK_BUDGET_DATA.totalBudget - MOCK_BUDGET_DATA.totalSpent).toLocaleString()} SAR
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">
                  {state.settings.language === "ar" ? "استخدام الميزانية" : "Budget Utilization"}
                </span>
                <span className="font-semibold">{budgetUtilization.toFixed(1)}%</span>
              </div>
              <Progress value={budgetUtilization} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {state.settings.language === "ar" ? "الإنفاق حسب الفئة" : "Spending by Category"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => `${value} SAR`} />
                  <Bar dataKey="spent" fill="#059669" name="Spent" />
                  <Bar dataKey="limit" fill="#d1fae5" name="Limit" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {state.settings.language === "ar" ? "توزيع النفقات" : "Expense Distribution"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value} SAR`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Category Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {state.settings.language === "ar" ? "تفاصيل الفئات" : "Category Details"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {MOCK_BUDGET_DATA.categories.map((category) => {
                const percentage = (category.spent / category.limit) * 100
                const isOverBudget = percentage > 100
                return (
                  <div key={category.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.spent} / {category.limit} SAR
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${isOverBudget ? "text-red-600" : "text-emerald-600"}`}>
                          {percentage.toFixed(0)}%
                        </p>
                      </div>
                    </div>
                    <Progress value={Math.min(percentage, 100)} className="h-2" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}
