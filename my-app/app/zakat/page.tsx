"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { getCurrentUserId, getAuthState } from "@/lib/utils/auth"
import { getUserPortfolio, getPortfolioStats, type Portfolio, type PortfolioStats } from "@/lib/services/portfolio-service"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoTooltip } from "@/components/info-tooltip"
import { MOCK_ZAKAT_DATA } from "@/lib/mock-data"
import { BottomNav } from "@/components/bottom-nav"
import { Calculator, Calendar, CheckCircle2, Info, TrendingUp, Wallet, ArrowLeft, Loader2 } from "lucide-react"

export default function ZakatPage() {
  const router = useRouter()
  const { state, logAnalytics } = useApp()
  const { language } = state.settings
  
  // Local state
  const [customAssets, setCustomAssets] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null)
  const [portfolioStats, setPortfolioStats] = useState<PortfolioStats | null>(null)

  // Load portfolio data on component mount
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        
        const authState = getAuthState()
        const userId = getCurrentUserId()
        
        if (!authState.isAuthenticated || !userId) {
          setError(language === "ar" ? "يرجى تسجيل الدخول للوصول إلى بيانات الزكاة" : "Please log in to access zakat data")
          setIsLoading(false)
          return
        }

        console.log("📊 Loading portfolio data for Zakat calculation...")
        
        // Load user's portfolio
        const userPortfolio = await getUserPortfolio(userId)
        setPortfolio(userPortfolio)
        
        // Load portfolio statistics
        if (userPortfolio._id) {
          const stats = await getPortfolioStats(userPortfolio._id)
          setPortfolioStats(stats)
        }
        
        console.log("✅ Portfolio data loaded for Zakat:", {
          portfolioId: userPortfolio._id,
          investmentCount: userPortfolio.investments.length,
          totalCurrentValue: portfolioStats?.totalCurrentValue
        })
        
      } catch (err) {
        console.error("❌ Error loading portfolio data:", err)
        setError(language === "ar" ? "فشل في تحميل بيانات المحفظة" : "Failed to load portfolio data")
      } finally {
        setIsLoading(false)
      }
    }

    loadPortfolioData()
  }, [language])

  const zakatData = MOCK_ZAKAT_DATA
  
  // Calculate total assets from real portfolio data
  const portfolioValue = portfolioStats?.totalCurrentValue || 0
  const additionalAssets = customAssets ? Number.parseFloat(customAssets) || 0 : 0
  const totalAssets = portfolioValue + additionalAssets
  
  const isAboveNisab = totalAssets >= zakatData.nisabThreshold
  const calculatedZakat = isAboveNisab ? totalAssets * 0.025 : 0
  
  // Debug calculation for development
  console.log("🧮 Zakat Calculation:", {
    portfolioValue,
    additionalAssets,
    totalAssets,
    nisabThreshold: zakatData.nisabThreshold,
    isAboveNisab,
    calculatedZakat
  })

  const handlePayZakat = () => {
    logAnalytics("zakat_payment_initiated", { 
      amount: calculatedZakat,
      portfolioValue,
      totalAssets,
      source: "portfolio_data"
    })
    // In production, this would integrate with payment gateway
    alert(
      language === "ar"
        ? `سيتم توجيهك لدفع ${calculatedZakat.toFixed(2)} ريال سعودي`
        : `You would be directed to pay SAR ${calculatedZakat.toFixed(2)}`,
    )
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-lg px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
              <p className="text-muted-foreground">
                {language === "ar" ? "جاري تحميل بيانات المحفظة..." : "Loading portfolio data..."}
              </p>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-lg px-4 py-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "ar" ? "رجوع" : "Back"}
          </Button>
          
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Info className="w-8 h-8 mx-auto mb-4 text-red-500" />
              <h3 className="text-lg font-semibold mb-2">
                {language === "ar" ? "خطأ في تحميل البيانات" : "Error Loading Data"}
              </h3>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={() => window.location.reload()}>
                {language === "ar" ? "إعادة المحاولة" : "Try Again"}
              </Button>
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
        <Button variant="ghost" onClick={() => router.back()} className="mb-4 -ml-2">
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === "ar" ? "رجوع" : "Back"}
        </Button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">{language === "ar" ? "الزكاة" : "Zakat"}</h1>
          <p className="text-muted-foreground">
            {language === "ar"
              ? "احسب وتتبع التزامات الزكاة على استثماراتك"
              : "Calculate and track your zakat obligations on investments"}
          </p>
        </div>

        {/* Nisab Status Alert */}
        {isAboveNisab ? (
          <Alert className="mb-6 border-primary/50 bg-primary/5">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <AlertDescription>
              {language === "ar"
                ? "أصولك تتجاوز عتبة النصاب. الزكاة واجبة."
                : "Your assets exceed the nisab threshold. Zakat is due."}
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              {language === "ar"
                ? "أصولك أقل من عتبة النصاب. لا زكاة واجبة حاليًا."
                : "Your assets are below the nisab threshold. No zakat is currently due."}
            </AlertDescription>
          </Alert>
        )}

        {/* Zakat Calculator */}
        <Card className="mb-6 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-card-foreground">
              {language === "ar" ? "حاسبة الزكاة" : "Zakat Calculator"}
            </h2>
            <InfoTooltip
              content={
                language === "ar"
                  ? "الزكاة هي ٢.٥٪ من إجمالي الأصول التي تتجاوز النصاب وتم الاحتفاظ بها لمدة عام قمري"
                  : "Zakat is 2.5% of total assets above nisab held for a lunar year"
              }
            />
          </div>

          <div className="space-y-4">
            {/* Current Investment Value */}
            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                {language === "ar" ? "قيمة الاستثمار الحالية" : "Current Investment Value"}
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="font-semibold text-card-foreground">
                  {portfolioValue.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                </span>
                {portfolio && (
                  <span className="text-xs text-muted-foreground">
                    ({portfolio.investments.length} {language === "ar" ? "استثمار" : "investments"})
                  </span>
                )}
              </div>
            </div>

            {/* Additional Assets (Optional) */}
            <div>
              <label className="mb-2 block text-sm font-medium text-card-foreground">
                {language === "ar" ? "أصول إضافية (اختياري)" : "Additional Assets (Optional)"}
              </label>
              <Input
                type="number"
                placeholder={language === "ar" ? "أدخل المبلغ بالريال" : "Enter amount in SAR"}
                value={customAssets}
                onChange={(e) => setCustomAssets(e.target.value)}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {language === "ar"
                  ? "أضف نقود أو ذهب أو أصول أخرى خاضعة للزكاة"
                  : "Add cash, gold, or other zakatable assets"}
              </p>
            </div>

            {/* Nisab Threshold */}
            <div className="rounded-lg border border-border bg-muted/30 p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {language === "ar" ? "عتبة النصاب" : "Nisab Threshold"}
                </span>
                <span className="font-semibold text-card-foreground">
                  {zakatData.nisabThreshold.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {language === "ar"
                  ? "يعادل ٣٥ جرام من الذهب بالأسعار الحالية"
                  : "Equivalent to 85g of gold at current prices"}
              </p>
            </div>

            {/* Total Assets Summary */}
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="mb-2 text-sm font-medium text-card-foreground">
                {language === "ar" ? "إجمالي الأصول" : "Total Assets"}
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "ar" ? "قيمة المحفظة" : "Portfolio Value"}
                  </span>
                  <span className="font-medium">
                    {portfolioValue.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                  </span>
                </div>
                {additionalAssets > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === "ar" ? "أصول إضافية" : "Additional Assets"}
                    </span>
                    <span className="font-medium">
                      {additionalAssets.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                    </span>
                  </div>
                )}
                <div className="flex justify-between border-t border-border pt-2 font-semibold">
                  <span>{language === "ar" ? "المجموع" : "Total"}</span>
                  <span>
                    {totalAssets.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                  </span>
                </div>
              </div>
            </div>

            {/* Calculated Zakat */}
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-4">
              <div className="mb-1 text-sm text-muted-foreground">
                {language === "ar" ? "الزكاة المستحقة (٢.٥٪)" : "Zakat Due (2.5%)"}
              </div>
              <div className="text-3xl font-bold text-primary">
                {calculatedZakat.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
              </div>
            </div>
          </div>
        </Card>

        {/* Hijri Year Info */}
        <Card className="mb-6 p-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-primary" />
            <div>
              <div className="font-semibold text-card-foreground">
                {language === "ar" ? "السنة الهجرية الحالية" : "Current Hijri Year"}
              </div>
              <div className="text-sm text-muted-foreground">{zakatData.hijriYear}</div>
            </div>
          </div>
        </Card>

        {/* Payment History */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "سجل المدفوعات" : "Payment History"}
          </h2>
          {zakatData.paymentHistory.length > 0 ? (
            <div className="space-y-3">
              {zakatData.paymentHistory.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between rounded-lg border border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Wallet className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">
                        {payment.amount.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {language === "ar" ? payment.hijriDate : new Date(payment.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              {language === "ar" ? "لا توجد مدفوعات سابقة" : "No previous payments"}
            </p>
          )}
        </Card>

        {/* Action Buttons */}
        {isAboveNisab && calculatedZakat > 0 && (
          <div className="space-y-3">
            <Button className="w-full" size="lg" onClick={handlePayZakat}>
              {language === "ar" ? "ادفع الزكاة الآن" : "Pay Zakat Now"}
            </Button>
            <Button
              variant="outline"
              className="w-full bg-transparent"
              size="lg"
              onClick={() => router.push("/learn/zakat-guide")}
            >
              {language === "ar" ? "تعلم المزيد عن الزكاة" : "Learn More About Zakat"}
            </Button>
          </div>
        )}

        {/* Educational Note */}
        <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
          <p className="leading-relaxed">
            {language === "ar"
              ? "ملاحظة: هذه الحاسبة للإرشاد فقط. استشر عالم دين مؤهل للحصول على فتوى شخصية بشأن التزامات الزكاة الخاصة بك."
              : "Note: This calculator is for guidance only. Consult a qualified Islamic scholar for personalized fatwa regarding your zakat obligations."}
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
