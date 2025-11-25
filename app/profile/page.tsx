"use client"

import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BottomNav } from "@/components/bottom-nav"
import { useToast } from "@/hooks/use-toast"
import { Moon, Sun, Globe, RotateCcw, Download, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProfilePage() {
  const router = useRouter()
  const { state, updateSettings, resetDemo, logAnalytics } = useApp()
  const { toast } = useToast()
  const { darkMode, language, rtl } = state.settings

  const handleDarkModeToggle = () => {
    updateSettings({ darkMode: !darkMode })
    logAnalytics("dark_mode_toggled", { enabled: !darkMode })
  }

  const handleLanguageToggle = () => {
    const newLang = language === "en" ? "ar" : "en"
    updateSettings({ language: newLang, rtl: newLang === "ar" })
    logAnalytics("language_changed", { language: newLang })
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
    </div>
  )
}
