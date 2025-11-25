"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoTooltip } from "@/components/info-tooltip"
import { MOCK_ZAKAT_DATA } from "@/lib/mock-data"
import { BottomNav } from "@/components/bottom-nav"
import { Calculator, Calendar, CheckCircle2, Info, TrendingUp, Wallet, ArrowLeft } from "lucide-react"

export default function ZakatPage() {
  const router = useRouter()
  const { state, logAnalytics } = useApp()
  const { language } = state.settings
  const [customAssets, setCustomAssets] = useState("")

  const zakatData = MOCK_ZAKAT_DATA
  const totalAssets = customAssets ? Number.parseFloat(customAssets) || zakatData.totalAssets : state.totalInvested
  const isAboveNisab = totalAssets >= zakatData.nisabThreshold
  const calculatedZakat = isAboveNisab ? totalAssets * 0.025 : 0

  const handlePayZakat = () => {
    logAnalytics("zakat_payment_initiated", { amount: calculatedZakat })
    // In production, this would integrate with payment gateway
    alert(
      language === "ar"
        ? `سيتم توجيهك لدفع ${calculatedZakat.toFixed(2)} ريال سعودي`
        : `You would be directed to pay SAR ${calculatedZakat.toFixed(2)}`,
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
                  {state.totalInvested.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                </span>
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
