"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BottomNav } from "@/components/bottom-nav"
import { InfoTooltip } from "@/components/info-tooltip"
import { Plus, Minus, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = ["Coffee", "Restaurant", "Entertainment"] as const

export default function RoundUpsPage() {
  const router = useRouter()
  const { state, updateSettings, logAnalytics } = useApp()
  const { roundUpTo, weeklyCapSar, discretionaryOnly, paydaySavePercent, boosts, language } = state.settings

  const [localBoosts, setLocalBoosts] = useState(boosts)

  const handleRoundUpChange = (value: 1 | 5 | 10) => {
    updateSettings({ roundUpTo: value })
    logAnalytics("roundup_rule_changed", { value })
  }

  const handleWeeklyCapChange = (value: number) => {
    updateSettings({ weeklyCapSar: value })
  }

  const handleDiscretionaryToggle = () => {
    updateSettings({ discretionaryOnly: !discretionaryOnly })
    logAnalytics("discretionary_toggle", { enabled: !discretionaryOnly })
  }

  const handlePaydaySaveChange = (value: 0 | 1 | 2 | 5) => {
    updateSettings({ paydaySavePercent: value })
    logAnalytics("payday_save_changed", { percent: value })
  }

  const updateBoost = (category: (typeof CATEGORY_OPTIONS)[number], addSar: number) => {
    const newBoosts = localBoosts.filter((b) => b.category !== category)
    if (addSar > 0) {
      newBoosts.push({ category, addSar })
    }
    setLocalBoosts(newBoosts)
    updateSettings({ boosts: newBoosts })
  }

  const getBoostAmount = (category: (typeof CATEGORY_OPTIONS)[number]) => {
    return localBoosts.find((b) => b.category === category)?.addSar || 0
  }

  // Calculate estimated monthly investment
  const estimatedMonthly = 85 + paydaySavePercent * 100 // Base + payday save

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "ar" ? "رجوع" : "Back"}
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground">
            {language === "ar" ? "إعدادات التقريبات" : "Round-Ups Settings"}
          </h1>
          <p className="text-muted-foreground">
            {language === "ar" ? "خصص كيفية استثمار رقائقك الزيادة" : "Customize how your spare change gets invested"}
          </p>
        </div>

        {/* Round-Up Rule */}
        <Card className="mb-6 p-6">
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">
              {language === "ar" ? "تقريب إلى أقرب" : "Round up to nearest"}
            </h2>
            <InfoTooltip
              content={
                language === "ar"
                  ? "اختر كم تريد تقريب كل شراء. القيم الأعلى تعني استثمار أسرع ولكن تقريبات أكبر لكل صفقة."
                  : "Choose how much to round up each purchase. Higher amounts mean faster investing but larger round-ups per transaction."
              }
            />
          </div>
          <div className="flex gap-2">
            {[1, 5, 10].map((value) => (
              <Button
                key={value}
                variant={roundUpTo === value ? "default" : "outline"}
                onClick={() => handleRoundUpChange(value as 1 | 5 | 10)}
                className="flex-1 transition-all hover:scale-105"
              >
                {value} SAR
              </Button>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {language === "ar" ? "مثال: كوب قهوة بـ 18 ريال تقريب إلى" : "Example: A 18 SAR coffee rounds to"}{" "}
            {roundUpTo === 1 ? "19" : roundUpTo === 5 ? "20" : "20"} SAR, {language === "ar" ? "استثمار" : "investing"}{" "}
            {roundUpTo === 1 ? "1" : roundUpTo === 5 ? "2" : "2"} SAR
          </p>
        </Card>

        {/* Weekly Cap */}
        <Card className="mb-6 p-6">
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">
              {language === "ar" ? "الحد الأسبوعي" : "Weekly Cap"}
            </h2>
            <InfoTooltip
              content={
                language === "ar"
                  ? "حدد حد استثمار أسبوعي أقصى لتحكم في ميزانيتك. هذا يساعدك على البقاء ضمن الميزانية بينما تبني عادة استثمارية."
                  : "Set a maximum weekly investment limit to control your spending. This helps you stay within budget while building your investment habit."
              }
            />
          </div>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={weeklyCapSar}
              onChange={(e) => handleWeeklyCapChange(Number(e.target.value))}
              className="flex-1"
              min={0}
              max={500}
            />
            <span className="text-muted-foreground">SAR/week</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {language === "ar"
              ? "الحد الأقصى للاستثمار أسبوعياً من خلال التقريبات"
              : "Maximum amount to invest per week through round-ups"}
          </p>
        </Card>

        {/* Discretionary Only */}
        <Card className="mb-6 p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <h2 className="text-lg font-semibold text-card-foreground">
                  {language === "ar" ? "فقط الاستهلاك غير الضروري" : "Discretionary Only"}
                </h2>
                <InfoTooltip
                  content={
                    language === "ar"
                      ? "عند تمكينه، سيتم تقريب فقط المشتريات الممتعة مثل الوجبات الخفيفة والترفيه. المشتريات الأساسية مثل البقالة لن تتأثر."
                      : "When enabled, only fun purchases like dining out and entertainment will be rounded up. Essential purchases like groceries won't be affected."
                  }
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {language === "ar"
                  ? "قم فقط بتقريب المطاعم، القهوة، والترفيه"
                  : "Only round up restaurants, coffee, and entertainment"}
              </p>
            </div>
            <button
              onClick={handleDiscretionaryToggle}
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors",
                discretionaryOnly ? "bg-primary" : "bg-muted",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform",
                  discretionaryOnly ? "translate-x-5" : "translate-x-0.5",
                )}
              />
            </button>
          </div>
        </Card>

        {/* Category Boosts */}
        <Card className="mb-6 p-6">
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">
              {language === "ar" ? "زيادات الفئة" : "Category Boosts"}
            </h2>
            <InfoTooltip
              content={
                language === "ar"
                  ? "أضف ريالات إضافية إلى فئات معينة لتسريع استثماراتك. رائع للفئات التي تريد الاستثمار فيها بشكل أكثر حدة."
                  : "Add extra SAR to specific categories to accelerate your investing. Great for categories where you want to invest more aggressively."
              }
            />
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            {language === "ar" ? "أضف ريالات إضافية إلى فئات معينة" : "Add extra SAR to specific categories"}
          </p>

          <div className="space-y-3">
            {CATEGORY_OPTIONS.map((category) => {
              const amount = getBoostAmount(category)
              return (
                <div key={category} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="font-medium text-card-foreground">{category}</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateBoost(category, Math.max(0, amount - 1))}
                      disabled={amount === 0}
                      className="transition-all hover:scale-110"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium text-card-foreground">+{amount}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => updateBoost(category, amount + 1)}
                      className="transition-all hover:scale-110"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Payday Save */}
        <Card className="mb-6 p-6">
          <div className="mb-3 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-card-foreground">
              {language === "ar" ? "توفير الرواتب" : "Payday Save"}
            </h2>
            <InfoTooltip
              content={
                language === "ar"
                  ? "استثمر تلقائياً نسبة من راتبك الشهري. هذا بالإضافة إلى تقريباتك ويساعدك على الوصول لأهدافك بشكل أسرع."
                  : "Automatically invest a percentage of your monthly paycheck each month. This is in addition to your round-ups and helps you reach your goals faster."
              }
            />
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            {language === "ar"
              ? "استثمر تلقائياً نسبة من راتبك الشهري"
              : "Automatically invest a percentage of your monthly paycheck"}
          </p>

          <div className="grid grid-cols-4 gap-2">
            {[0, 1, 2, 5].map((value) => (
              <Button
                key={value}
                variant={paydaySavePercent === value ? "default" : "outline"}
                onClick={() => handlePaydaySaveChange(value as 0 | 1 | 2 | 5)}
                className="transition-all hover:scale-105"
              >
                {value}%
              </Button>
            ))}
          </div>

          {paydaySavePercent > 0 && (
            <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-50/50 p-3">
              <div className="mb-1 text-sm font-medium text-card-foreground">
                {language === "ar" ? "الإيداع المجدول التالي" : "Next Auto Deposit"}
              </div>
              <div className="text-lg font-bold text-primary">{paydaySavePercent * 100} SAR</div>
              <div className="text-xs text-muted-foreground">
                {language === "ar" ? `في الأول من الشهر القادم` : `on the 1st of next month`}
              </div>
            </div>
          )}
        </Card>

        {/* Estimated Monthly Investment */}
        <Card className="border-primary/20 bg-primary/5 p-6">
          <h2 className="mb-2 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "الاستثمار المتوقع شهريًا" : "Estimated Monthly Investment"}
          </h2>
          <div className="mb-2 text-3xl font-bold text-primary">
            {estimatedMonthly}-{estimatedMonthly + 15} SAR
          </div>
          <p className="text-sm text-muted-foreground">
            {language === "ar"
              ? "بناءً على سلسلة 30 يوم من الإنفاق الأخيرة وإعدادات الحالية"
              : "Based on your last 30 days of spending and current settings"}
          </p>
        </Card>
      </div>

      <BottomNav />
    </div>
  )
}
