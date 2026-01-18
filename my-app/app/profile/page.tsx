"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { BottomNav } from "@/components/bottom-nav"
import { GoalSelectionModal } from "@/components/goal-selection-modal"
import { useToast } from "@/hooks/use-toast"
import { 
  Moon, 
  Sun, 
  Globe, 
  RotateCcw, 
  Download, 
  Info, 
  Plus, 
  Target,
  Plane,
  Car,
  Home,
  ShieldCheck,
  Heart,
  Wallet,
  GraduationCap,
  Baby
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProfilePage() {
  const router = useRouter()
  const { state, updateSettings, addGoal, resetDemo, logAnalytics } = useApp()
  const { toast } = useToast()
  const { darkMode, language, rtl } = state.settings

  // Goals state
  const [showGoalModal, setShowGoalModal] = useState(false)

  const handleDarkModeToggle = () => {
    updateSettings({ darkMode: !darkMode })
    logAnalytics("dark_mode_toggled", { enabled: !darkMode })
  }

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "ar" : "en"
    updateSettings({ language: newLang, rtl: newLang === "ar" })
    logAnalytics("language_changed", { language: newLang })
  }

  const handleCreateGoal = (goalData: { type: string; name: string; target: number }) => {
    addGoal({
      name: goalData.name,
      target: goalData.target,
      progress: 0,
    })
    
    toast({
      title: language === "ar" ? "تم إنشاء الهدف" : "Goal Created",
      description: language === "ar" 
        ? `تم إنشاء هدف "${goalData.name}" بنجاح` 
        : `Successfully created goal "${goalData.name}"`,
    })

    logAnalytics("goal_created", { 
      type: goalData.type, 
      target: goalData.target 
    })
  }

  const getGoalIcon = (goalName: string) => {
    const name = goalName.toLowerCase()
    if (name.includes('emergency') || name.includes('طوارئ')) return <ShieldCheck className="h-5 w-5" />
    if (name.includes('hajj') || name.includes('حج') || name.includes('umrah') || name.includes('عمرة')) return <Plane className="h-5 w-5" />
    if (name.includes('car') || name.includes('سيارة')) return <Car className="h-5 w-5" />
    if (name.includes('home') || name.includes('house') || name.includes('منزل') || name.includes('بيت')) return <Home className="h-5 w-5" />
    if (name.includes('wedding') || name.includes('marriage') || name.includes('زواج') || name.includes('زفاف')) return <Heart className="h-5 w-5" />
    if (name.includes('education') || name.includes('تعليم')) return <GraduationCap className="h-5 w-5" />
    if (name.includes('family') || name.includes('kids') || name.includes('أسرة') || name.includes('أطفال')) return <Baby className="h-5 w-5" />
    return <Wallet className="h-5 w-5" />
  }

  const getGoalColor = (goalName: string) => {
    const name = goalName.toLowerCase()
    if (name.includes('emergency') || name.includes('طوارئ')) return 'bg-red-100 text-red-600'
    if (name.includes('hajj') || name.includes('حج') || name.includes('umrah') || name.includes('عمرة')) return 'bg-emerald-100 text-emerald-600'
    if (name.includes('car') || name.includes('سيارة')) return 'bg-blue-100 text-blue-600'
    if (name.includes('home') || name.includes('house') || name.includes('منزل') || name.includes('بيت')) return 'bg-indigo-100 text-indigo-600'
    if (name.includes('wedding') || name.includes('marriage') || name.includes('زواج') || name.includes('زفاف')) return 'bg-pink-100 text-pink-600'
    if (name.includes('education') || name.includes('تعليم')) return 'bg-purple-100 text-purple-600'
    if (name.includes('family') || name.includes('kids') || name.includes('أسرة') || name.includes('أطفال')) return 'bg-yellow-100 text-yellow-600'
    return 'bg-amber-100 text-amber-600'
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleResetDemo = () => {
    if (confirm("Are you sure you want to reset all demo data? This cannot be undone.")) {
      resetDemo()
      toast({
        title: "Demo reset",
        description: "All data has been reset to defaults",
      })
      router.push("/")
    }
  }

  const handleExportData = () => {
    const dataStr = JSON.stringify(state, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "sunbullah-demo-data.json"
    link.click()
    URL.revokeObjectURL(url)
    logAnalytics("data_exported")
    toast({
      title: "Data exported",
      description: "Your demo data has been downloaded",
    })
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground">{language === "ar" ? "الملف الشخصي" : "Profile"}</h1>
          <p className="text-muted-foreground">
            {language === "ar" ? "إدارة حسابك وتفضيلاتك" : "Manage your account and preferences"}
          </p>
        </div>

        {/* Demo Banner */}
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>{language === "ar" ? "وضع التجريبي:" : "Demo Mode:"}</strong>{" "}
            {language === "ar"
              ? "هذا ملف تعريف وهمي. لا يتم تخزين بيانات حقيقية."
              : "This is a mock profile. No real KYC or personal data is stored."}
          </AlertDescription>
        </Alert>

        {/* Mock KYC Info */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "معلومات الحساب" : "Account Information"}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                {language === "ar" ? "الاسم الكامل" : "Full Name"}
              </label>
              <Input placeholder={language === "ar" ? "أحمد السعود" : "Ahmed Al-Saud"} disabled />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                {language === "ar" ? "رقم الهوية الوطنية" : "National ID"}
              </label>
              <Input placeholder="1234567890" disabled />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                {language === "ar" ? "رقم الآيبان" : "IBAN"}
              </label>
              <Input placeholder="SA00 0000 0000 0000 0000 0000" disabled />
            </div>
          </div>
        </Card>

        {/* Goals Section */}
        <Card className="mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-card-foreground">
                {language === "ar" ? "أهدافي المالية" : "My Financial Goals"}
              </h2>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowGoalModal(true)}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              {language === "ar" ? "إضافة هدف" : "Add Goal"}
            </Button>
          </div>

          {state.goals.length === 0 ? (
            <div className="text-center py-8">
              <Target className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {language === "ar" ? "لا توجد أهداف مالية" : "No Financial Goals Yet"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {language === "ar" 
                  ? "ابدأ رحلة الادخار بتحديد أهدافك المالية" 
                  : "Start your savings journey by setting financial goals"}
              </p>
              <Button onClick={() => setShowGoalModal(true)} className="gap-2">
                <Plus className="h-4 w-4" />
                {language === "ar" ? "إنشاء هدف جديد" : "Create First Goal"}
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {state.goals.map((goal) => (
                <div key={goal.id} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", getGoalColor(goal.name))}>
                      {getGoalIcon(goal.name)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-card-foreground">{goal.name}</h3>
                        <span className="text-sm font-medium text-muted-foreground">
                          {Math.round((goal.progress / goal.target) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <Progress value={(goal.progress / goal.target) * 100} className="mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{formatCurrency(goal.progress)}</span>
                    <span>
                      {language === "ar" ? "الهدف" : "Target"}: {formatCurrency(goal.target)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Preferences */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "التفضيلات" : "Preferences"}
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {darkMode ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-primary" />}
                <div>
                  <div className="font-medium text-card-foreground">
                    {language === "ar" ? "الوضع الداكن" : "Dark Mode"}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {language === "ar" ? "تبديل المظهر الداكن" : "Toggle dark theme"}
                  </div>
                </div>
              </div>
              <button
                onClick={handleDarkModeToggle}
                className={cn("relative h-6 w-11 rounded-full transition-colors", darkMode ? "bg-primary" : "bg-muted")}
              >
                <div
                  className={cn(
                    "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform",
                    darkMode ? "translate-x-5" : "translate-x-0.5",
                  )}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-card-foreground">{language === "ar" ? "اللغة" : "Language"}</div>
                  <div className="text-sm text-muted-foreground">
                    {language === "en" ? "English" : "العربية"} {rtl && "(RTL)"}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleLanguageToggle}>
                {language === "ar" ? "تبديل" : "Switch"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Demo Actions */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "إجراءات التجريبية" : "Demo Actions"}
          </h2>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" onClick={handleResetDemo}>
              <RotateCcw className="h-5 w-5" />
              {language === "ar" ? "إعادة تعيين البيانات التجريبية" : "Reset Demo Data"}
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 bg-transparent" onClick={handleExportData}>
              <Download className="h-5 w-5" />
              {language === "ar" ? "تصدير البيانات الوهمية (JSON)" : "Export Mock Data (JSON)"}
            </Button>
          </div>
        </Card>

        {/* Legal Links */}
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">
            {language === "ar" ? "القانونية" : "Legal"}
          </h2>
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/legal?section=terms")}
            >
              {language === "ar" ? "شروط الخدمة" : "Terms of Service"}
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => router.push("/legal?section=privacy")}
            >
              {language === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => router.push("/legal?section=risk")}>
              {language === "ar" ? "الإفصاح عن المخاطر" : "Risk Disclosure"}
            </Button>
          </div>
        </Card>
      </div>

      <BottomNav />

      {/* Goal Selection Modal */}
      <GoalSelectionModal
        open={showGoalModal}
        onOpenChange={setShowGoalModal}
        onCreateGoal={handleCreateGoal}
        language={language}
      />
    </div>
  )
}
