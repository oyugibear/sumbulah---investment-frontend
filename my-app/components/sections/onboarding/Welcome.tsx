import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useApp } from '@/lib/context/app-context'
import { useTranslation } from '@/lib/hooks/use-translation'
import { Check, CheckCheck, Globe, ShieldCheck } from 'lucide-react'
import React from 'react'

export default function Welcome({ handleNext }: { handleNext: () => void }) {
     const { updateSettings, completeOnboarding } = useApp()
      const { t, language } = useTranslation()
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
}
