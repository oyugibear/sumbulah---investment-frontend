"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShieldCheck, Check, Plane, Car, Home, Heart, Wallet, Globe, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/hooks/use-translation"
import { trackEvent } from "@/lib/utils/track-event" // Declare the trackEvent variable
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

const steps = [
  { id: "welcome", title: "welcome" },
  { id: "phone", title: "phone" },
  { id: "kyc", title: "kyc" },
  { id: "goal", title: "goal" },
  { id: "option", title: "option" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { updateSettings, completeOnboarding } = useApp()
  const { t, language } = useTranslation()
  const [currentStep, setCurrentStep] = useState(0)
  const [goal, setGoal] = useState<string | null>(null)
  const [targetAmount, setTargetAmount] = useState("")
  const [showGoalSuccess, setShowGoalSuccess] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"savings" | "investment">("investment")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [kycData, setKycData] = useState({
    fullName: "",
    nationalId: "",
    dateOfBirth: "",
    occupation: "",
    monthlyIncome: "",
  })
  const [riskProfile, setRiskProfile] = useState<"conservative" | "moderate" | "growth" | null>(null)

  useEffect(() => {
    trackEvent("onboarding_start", { language })
  }, [language])

  useEffect(() => {
    if (steps[currentStep].id === "option") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentStep])

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      trackEvent("onboarding_complete", { goal, investmentOption: selectedOption, riskProfile })
      completeOnboarding([goal || "wealth"], selectedOption)
      router.push("/link")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      router.push("/")
    }
  }

  const handleGoalSubmit = () => {
    if (goal && targetAmount) {
      setShowGoalSuccess(true)
    }
  }

  const handleGoalSuccessContinue = () => {
    setShowGoalSuccess(false)
    handleNext()
  }

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case "welcome":
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="absolute top-4 left-4 z-10">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => updateSettings({ language: language === "en" ? "ar" : "en" })}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === "en" ? "العربية" : "English"}
              </Button>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/placeholder.svg?key=khgdt" alt="Sunbullah" className="w-12 h-12" />
              </div>
              <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-50">
                {t("onboarding.welcome.title", {
                  en: "Save without feeling it",
                  ar: "استثمر بفكة اليوم واصنع لك بكرة غير"
                })}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xs mx-auto">
                {t("onboarding.welcome.subtitle", {
                  en: "Join 50,000+ Saudis growing their wealth automatically.",
                  ar: "انضم لأكثر من 50 ألف سعودي يستثمرون بطريقة شرعية ومربحة"
                })}
              </p>
            </div>

            {/* Trust Signals Carousel */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      {t("onboarding.trust.regulated", {
                        en: "Regulated & Secure",
                        ar: "مرخص من الجهات المختصة"
                      })}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {t("onboarding.trust.regulatedDesc", {
                        en: "Operating in SAMA Sandbox & CMA FinTech Lab",
                        ar: "مرخص من مؤسسة النقد العربي السعودي وهيئة السوق المالية"
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm bg-slate-50 dark:bg-slate-900/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full">
                    <Check className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      {t("onboarding.trust.shariah", {
                        en: "100% Halal",
                        ar: "استثمار شرعي 100%"
                      })}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {t("onboarding.trust.shariahDesc", {
                        en: "Certified Shariah-compliant investments",
                        ar: "معتمد من كبار علماء الشريعة الإسلامية"
                      })}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              className="w-full h-12 text-lg bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:scale-[1.02]"
              onClick={handleNext}
            >
              {t("onboarding.welcome.cta")}
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              {language === "ar" ? "بالمتابعة، أنت توافق على " : "By continuing, you agree to our "}
              <a href="#" className="underline hover:text-emerald-600">
                {t("profile.legal.terms")}
              </a>
            </p>

            <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all mt-6">
              <div className="text-[10px] text-center">
                <div className="font-bold">SAMA</div>
                <div>Sandbox</div>
              </div>
              <div className="text-[10px] text-center">
                <div className="font-bold">CMA</div>
                <div>FinTech Lab</div>
              </div>
            </div>
          </div>
        )

      case "phone":
        return (
          <>
            {!isOtpSent ? (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">{t("onboarding.phone.title")}</h2>
                  <p className="text-muted-foreground">
                    {t("onboarding.phone.subtitle", {
                      en: "We'll send a code to verify your account",
                      ar: "سوف يتم إرسال رمز التحقق للتحقّق من حسابك على الرقم التالي"
                    })}
                  </p>
                  
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-left block">
                      {t("onboarding.phone.label")}
                    </Label>
                    <div className="flex gap-2" dir="ltr">
                      <div className="flex items-center justify-center px-3 border rounded-md bg-muted text-muted-foreground text-sm font-medium">
                        +966
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="5X XXX XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="text-lg tracking-wide"
                      />
                    </div>
                  </div>
                  <Button className="w-full h-12" onClick={() => setIsOtpSent(true)} disabled={phone.length < 9}>
                    {t("onboarding.phone.sendOtp")}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center space-y-2">
                  <h2 className="text-2xl font-bold">{t("")}
                    {t("onboarding.phone.title", {
                      en: "Enter the code sent to your phone",
                      ar: "الرجاء التحقق من الرمز المرسَل إلى هاتفك"
                    })}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("onboarding.phone.subtitle", {
                      en: "Check your messages for the 4-digit code",
                      ar: "الرجاء إدخال رمز التحقق"
                    })}
                  </p>
                  
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp" className="text-left block">
                      {t("onboarding.phone.otpLabel")}
                    </Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="XXXX"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="text-center text-2xl tracking-[1em] font-mono h-14"
                      maxLength={4}
                    />
                  </div>
                  <Button className="w-full h-12" onClick={handleNext} disabled={otp.length < 4}>
                    {t("onboarding.phone.verify")}
                  </Button>
                  <div className="text-center space-y-2">
                    <button
                      onClick={() => setIsOtpSent(false)}
                      className="text-sm text-emerald-600 hover:underline font-medium"
                    >
                      {t("onboarding.phone.changeNumber")}
                    </button>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar" ? "لم يصلك الرمز؟ " : "Didn't receive code? "}
                      <button className="underline hover:text-emerald-600">
                        {language === "ar" ? "إعادة إرسال" : "Resend"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )


      case "kyc":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">
                 {t("onboarding.kyc.title", {
                    en: "Introduce Yourself",
                    ar: "عرفنا عليك"
                  })}
              </h2>
              <p className="text-muted-foreground">{t("onboarding.kyc.subtitle")}</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">{t("onboarding.kyc.fullName")}</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={kycData.fullName}
                  onChange={(e) => setKycData({ ...kycData, fullName: e.target.value })}
                  placeholder={language === "ar" ? "الاسم الكامل" : "Full Name"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nationalId">{t("onboarding.kyc.nationalId")}</Label>
                <Input
                  id="nationalId"
                  type="text"
                  value={kycData.nationalId}
                  onChange={(e) => setKycData({ ...kycData, nationalId: e.target.value })}
                  placeholder="1XXXXXXXXX"
                  maxLength={10}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">{t("onboarding.kyc.dateOfBirth")}</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={kycData.dateOfBirth}
                  onChange={(e) => setKycData({ ...kycData, dateOfBirth: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">{t("onboarding.kyc.occupation")}</Label>
                <Input
                  id="occupation"
                  type="text"
                  value={kycData.occupation}
                  onChange={(e) => setKycData({ ...kycData, occupation: e.target.value })}
                  placeholder={language === "ar" ? "المهنة" : "Occupation"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthlyIncome">{t("onboarding.kyc.monthlyIncome")}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    SAR
                  </span>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    value={kycData.monthlyIncome}
                    onChange={(e) => setKycData({ ...kycData, monthlyIncome: e.target.value })}
                    placeholder="5000"
                    className="pl-12"
                  />
                </div>
              </div>
            </div>

            <Button
              className="w-full mt-4"
              onClick={handleNext}
              disabled={
                !kycData.fullName ||
                !kycData.nationalId ||
                !kycData.dateOfBirth ||
                !kycData.occupation ||
                !kycData.monthlyIncome
              }
            >
              {t("continue")}
            </Button>
          </div>
        )

      case "goal":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold">{t("onboarding.goal.title")}</h2>
              <p className="text-muted-foreground">{t("onboarding.goal.subtitle")}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { id: "emergency", icon: ShieldCheck, label: "Emergency" },
                { id: "hajj", icon: Plane, label: "Hajj / Umrah" },
                { id: "car", icon: Car, label: "New Car" },
                { id: "home", icon: Home, label: "Home" },
                { id: "marriage", icon: Heart, label: "Marriage" },
                { id: "wealth", icon: Wallet, label: "Wealth" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setGoal(item.id)}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-3 text-center ${
                    goal === item.id
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 shadow-md scale-[1.02]"
                      : "border-transparent bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm"
                  }`}
                >
                  <div
                    className={`p-3 rounded-full ${
                      goal === item.id ? "bg-emerald-200 dark:bg-emerald-800" : "bg-slate-100 dark:bg-slate-700"
                    }`}
                  >
                    <item.icon
                      className={`h-6 w-6 ${
                        goal === item.id ? "text-emerald-700 dark:text-emerald-300" : "text-slate-500"
                      }`}
                    />
                  </div>
                  <span className="font-medium text-sm">{t(`onboarding.goals.${item.id}`)}</span>
                </button>
              ))}
            </div>

            {goal && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
                <Label htmlFor="targetAmount">{t("onboarding.goal.targetLabel")}</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                    SAR
                  </span>
                  <Input
                    id="targetAmount"
                    type="number"
                    placeholder="5000"
                    value={targetAmount}
                    onChange={(e) => setTargetAmount(e.target.value)}
                    className="pl-12 text-lg"
                  />
                </div>
              </div>
            )}

            <Button className="w-full mt-4" onClick={handleGoalSubmit} disabled={!goal || !targetAmount}>
              {t("continue")}
            </Button>

            <Dialog open={showGoalSuccess} onOpenChange={setShowGoalSuccess}>
              <DialogContent className="sm:max-w-md text-center">
                <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">{t("onboarding.goal.successTitle")}</DialogTitle>
                  <DialogDescription className="text-center">
                    {t("onboarding.goal.successDesc").replace("{goal}", t(`onboarding.goals.${goal}`))}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center">
                  <Button onClick={handleGoalSuccessContinue} className="w-full sm:w-auto">
                    {t("onboarding.goal.successCta")}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        )

      case "option":
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold mb-2">
                {language === "ar" ? "اختر ملف المخاطر الخاص بك" : "Choose Your Risk Profile"}
              </h2>
              <p className="text-muted-foreground">
                {language === "ar"
                  ? "حدد مستوى المخاطرة الذي يناسبك وشاهد كيف سيتم توزيع أموالك"
                  : "Select your risk level and see how your funds will be allocated"}
              </p>
            </div>

            {/* Educational Section explaining savings and investment funds */}
            <div className="mb-8 p-6 bg-muted/50 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg">
                {language === "ar" ? "فهم خياراتك" : "Understanding Your Options"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                    <h4 className="font-semibold">{language === "ar" ? "حساب التوفير" : "Savings Account"}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "حساب آمن ومضمون مع عوائد سنوية ~0.5%. أموالك محمية بالكامل ويمكن سحبها في أي وقت. مثالي للاحتياجات قصيرة الأجل والطوارئ."
                      : "A safe, secure account with ~0.5% annual returns. Your funds are fully protected and can be withdrawn anytime. Ideal for short-term needs and emergencies."}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                    <h4 className="font-semibold">{language === "ar" ? "صندوق الاستثمار" : "Investment Fund"}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "استثمارات متوافقة مع الشريعة (صكوك) مع عوائد متوقعة ~5% سنوياً. معتمد من قبل العلماء الإسلاميين وتشرف عليه ساما. مناسب للنمو طويل الأجل."
                      : "Shariah-compliant investments (Sukuk) with expected ~5% annual returns. Certified by Islamic scholars and supervised by SAMA. Suitable for long-term growth."}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Conservative */}
              <Card
                className={cn(
                  "rounded-lg border-2 cursor-pointer transition-all",
                  riskProfile === "conservative"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "hover:border-primary/50",
                )}
                onClick={() => setRiskProfile("conservative")}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{t("onboarding.risk.conservative")}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-emerald-600 font-medium">
                          {language === "ar" ? "بدون مخاطر" : "Risk Free"}
                        </span>
                        <div className="flex gap-1">
                          <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                          <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                          <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("onboarding.risk.conservativeDesc")}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1">
                          {language === "ar" ? "التوزيع" : "Allocation"}
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: "100%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>{language === "ar" ? "توفير 100%" : "100% Savings"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar" ? "العائد المتوقع: ~0.5% سنوياً" : "Expected Return: ~0.5% annually"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Moderate */}
              <Card
                className={cn(
                  "rounded-lg border-2 cursor-pointer transition-all",
                  riskProfile === "moderate"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "hover:border-primary/50",
                )}
                onClick={() => setRiskProfile("moderate")}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{t("onboarding.risk.moderate")}</h3>
                      <div className="flex gap-1">
                        <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                        <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                        <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("onboarding.risk.moderateDesc")}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1">
                          {language === "ar" ? "التوزيع" : "Allocation"}
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
                          <div className="h-full bg-emerald-500" style={{ width: "50%" }}></div>
                          <div className="h-full bg-yellow-500" style={{ width: "50%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>{language === "ar" ? "توفير 50%" : "50% Savings"}</span>
                          <span>{language === "ar" ? "استثمار 50%" : "50% Investment"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {language === "ar"
                        ? "العائد المتوقع: ~2.75% سنوياً (مزيج)"
                        : "Expected Return: ~2.75% annually (blended)"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth */}
              <Card
                className={cn(
                  "rounded-lg border-2 cursor-pointer transition-all",
                  riskProfile === "growth"
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "hover:border-primary/50",
                )}
                onClick={() => setRiskProfile("growth")}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{t("onboarding.risk.growth")}</h3>
                      <div className="flex gap-1">
                        <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                        <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                        <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("onboarding.risk.growthDesc")}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="text-xs text-muted-foreground mb-1">
                          {language === "ar" ? "التوزيع" : "Allocation"}
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: "100%" }}></div>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span>{language === "ar" ? "استثمار 100%" : "100% Investment"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <span>{language === "ar" ? "العائد المتوقع: ~5% سنوياً" : "Expected Return: ~5% annually"}</span>
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span className="text-emerald-600">
                        {language === "ar" ? "متوافق مع الشريعة" : "Shariah-Compliant"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button className="w-full h-12" onClick={handleNext} disabled={!riskProfile}>
              {currentStep === steps.length - 1 ? t("completeAndContinue") : t("continue")}
            </Button>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-background pt-12 pb-4 px-4">
        <div className="max-w-md mx-auto">
          <Progress value={progress} className="w-full" />
        </div>
        <div className="absolute top-4 right-8">
          <p className="text-sm text-muted-foreground">
            {t("step")} {currentStep + 1} {t("of")} {steps.length}
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center pt-24 pb-8 px-4">
        <div className="w-full max-w-md">{renderStep()}</div>
      </div>
    </div>
  )
}
