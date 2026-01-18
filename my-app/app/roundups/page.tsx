"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { getRoundupSettings, updateRoundupSettings, type RoundupSettings, getUserById } from "@/lib/services/user-service"
import { getCurrentUserId, getAuthState, debugAuthStatus } from "@/lib/utils/auth"
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
  const { state, logAnalytics } = useApp()
  const { language } = state.settings

  // Local state for roundup settings
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [settings, setSettings] = useState<RoundupSettings>({
    round_up_by: 1,
    weekly_cap_sar: 50,
    discretionary_only: false,
    payday_save_percent: 0,
    category_boosts: []
  })

  // Check authentication and get user ID
  useEffect(() => {
    const checkAuth = () => {
      debugAuthStatus()
      const authState = getAuthState()
      
      if (!authState.isAuthenticated) {
        console.log('❌ User not authenticated, redirecting to login')
        setError('Redirecting to login...')
        setTimeout(() => {
          router.push('/onboarding') // or wherever your login page is
        }, 2000)
        setIsLoading(false)
        return
      }
      
      const currentUserId = getCurrentUserId()
      if (!currentUserId) {
        console.log('❌ No user ID found, redirecting to login')
        setError('User session expired. Redirecting to login...')
        setTimeout(() => {
          router.push('/onboarding')
        }, 2000)
        setIsLoading(false)
        return
      }
      
      setUserId(currentUserId)
      console.log('✅ User authenticated:', currentUserId)
    }

    checkAuth()
  }, [])

  // Load roundup settings when userId is available
  useEffect(() => {
    const loadSettings = async () => {
      if (!userId) return
      
      try {
        console.log('📊 Loading roundup settings for user:', userId)
        
        // First, get user data to ensure portfolio is set up
        const userData = await getUserById(userId)
        console.log('👤 User data loaded:', {
          id: userData._id,
          hasPortfolio: !!userData.portfolio_id,
          investmentBalance: userData.investment_balance
        })

        // Load roundup settings
        const roundupData = await getRoundupSettings(userId)
        console.log('⚙️ Roundup settings loaded:', roundupData)
        
        setSettings(roundupData)
        setError(null)
      } catch (err) {
        console.error('❌ Error loading data:', err)
        setError('Failed to load roundup settings. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    if (userId) {
      loadSettings()
    }
  }, [userId])

  // Save settings to backend
  const saveSettings = async (newSettings: Partial<RoundupSettings>) => {
    if (!userId) {
      setError('User session expired. Please log in again.')
      return false
    }

    try {
      setIsSaving(true)
      console.log('💾 Saving roundup settings:', newSettings)

      const updatedSettings = { ...settings, ...newSettings }
      const savedSettings = await updateRoundupSettings(userId, newSettings)
      
      setSettings(savedSettings)
      setError(null)
      console.log('✅ Settings saved successfully:', savedSettings)
      return true
    } catch (err) {
      console.error('❌ Error saving settings:', err)
      setError('Failed to save settings. Please try again.')
      return false
    } finally {
      setIsSaving(false)
    }
  }

  const handleRoundUpChange = async (value: 1 | 5 | 10) => {
    setSettings(prev => ({ ...prev, round_up_by: value }))
    const success = await saveSettings({ round_up_by: value })
    if (success) {
      logAnalytics("roundup_rule_changed", { value })
    }
  }

  const handleWeeklyCapChange = async (value: number) => {
    setSettings(prev => ({ ...prev, weekly_cap_sar: value }))
    await saveSettings({ weekly_cap_sar: value })
  }

  const handleDiscretionaryToggle = async () => {
    const newValue = !settings.discretionary_only
    setSettings(prev => ({ ...prev, discretionary_only: newValue }))
    const success = await saveSettings({ discretionary_only: newValue })
    if (success) {
      logAnalytics("discretionary_toggle", { enabled: newValue })
    }
  }

  const handlePaydaySaveChange = async (value: 0 | 1 | 2 | 5) => {
    setSettings(prev => ({ ...prev, payday_save_percent: value }))
    const success = await saveSettings({ payday_save_percent: value })
    if (success) {
      logAnalytics("payday_save_changed", { percent: value })
    }
  }

  const updateBoost = async (category: (typeof CATEGORY_OPTIONS)[number], addSar: number) => {
    const newBoosts = settings.category_boosts.filter((b) => b.category !== category)
    if (addSar > 0) {
      newBoosts.push({ category, add_sar: addSar })
    }
    setSettings(prev => ({ ...prev, category_boosts: newBoosts }))
    await saveSettings({ category_boosts: newBoosts })
  }

  const getBoostAmount = (category: (typeof CATEGORY_OPTIONS)[number]) => {
    return settings.category_boosts.find((b) => b.category === category)?.add_sar || 0
  }

  // Calculate estimated monthly investment
  const estimatedMonthly = 85 + settings.payday_save_percent * 100 // Base + payday save

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-lg px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">
                {userId ? 'Loading roundup settings...' : 'Checking authentication...'}
              </p>
              {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
              )}
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }

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
          
          {/* Error Display */}
          {error && (
            <div className="mt-4 rounded-lg border border-red-500/20 bg-red-50/50 p-3">
              <div className="text-sm text-red-600">{error}</div>
            </div>
          )}
          
          {/* Saving Indicator */}
          {isSaving && (
            <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-50/50 p-3">
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                Saving changes...
              </div>
            </div>
          )}
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
                variant={settings.round_up_by === value ? "default" : "outline"}
                onClick={() => handleRoundUpChange(value as 1 | 5 | 10)}
                className="flex-1 transition-all hover:scale-105"
                disabled={isSaving}
              >
                {value} SAR
              </Button>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {language === "ar" ? "مثال: كوب قهوة بـ 18 ريال تقريب إلى" : "Example: A 18 SAR coffee rounds to"}{" "}
            {settings.round_up_by === 1 ? "19" : settings.round_up_by === 5 ? "20" : "20"} SAR, {language === "ar" ? "استثمار" : "investing"}{" "}
            {settings.round_up_by === 1 ? "1" : settings.round_up_by === 5 ? "2" : "2"} SAR
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
              value={settings.weekly_cap_sar}
              onChange={(e) => handleWeeklyCapChange(Number(e.target.value))}
              className="flex-1"
              min={0}
              max={500}
              disabled={isSaving}
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
                settings.discretionary_only ? "bg-primary" : "bg-muted",
              )}
              disabled={isSaving}
            >
              <div
                className={cn(
                  "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform",
                  settings.discretionary_only ? "translate-x-5" : "translate-x-0.5",
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
                      disabled={amount === 0 || isSaving}
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
                      disabled={isSaving}
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
                variant={settings.payday_save_percent === value ? "default" : "outline"}
                onClick={() => handlePaydaySaveChange(value as 0 | 1 | 2 | 5)}
                className="transition-all hover:scale-105"
                disabled={isSaving}
              >
                {value}%
              </Button>
            ))}
          </div>

          {settings.payday_save_percent > 0 && (
            <div className="mt-4 rounded-lg border border-emerald-500/20 bg-emerald-50/50 p-3">
              <div className="mb-1 text-sm font-medium text-card-foreground">
                {language === "ar" ? "الإيداع المجدول التالي" : "Next Auto Deposit"}
              </div>
              <div className="text-lg font-bold text-primary">{settings.payday_save_percent * 100} SAR</div>
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
