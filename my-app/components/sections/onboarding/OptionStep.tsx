import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslation } from '@/lib/hooks/use-translation'
import { updateUserDuringOnboarding } from '@/lib/services/user-service'
import { Check, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from 'react'

interface OptionStepProps {
  handleNext: () => void
  riskProfile: "conservative" | "moderate" | "growth" | null
  setRiskProfile: (profile: "conservative" | "moderate" | "growth" | null) => void
  currentStep: number
  stepsLength: number
}

export default function OptionStep({
  handleNext,
  riskProfile,
  setRiskProfile,
  currentStep,
  stepsLength
}: OptionStepProps) {
  const { t, language } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!riskProfile) return

    setIsSubmitting(true)
    setError(null)

    try {
      const userId = localStorage.getItem('userId')
      if (userId) {
        // Update user with risk profile data
        await updateUserDuringOnboarding(userId, {
          risk_appetite: riskProfile
        })
      }
      
      // Proceed to next step
      handleNext()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update risk profile')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      {error && (
        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}
      
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold mb-2">
          {t("onboarding.option.title", {
            en: "Choose Your Risk Profile",
            ar: "اختر ملف المخاطر الخاص بك"
          })}
        </h2>
        <p className="text-muted-foreground">
          {t("onboarding.option.subtitle", {
            en: "Select your risk level and see how your funds will be allocated",
            ar: "حدد مستوى المخاطرة الذي يناسبك وشاهد كيف سيتم توزيع أموالك"
          })}
        </p>
      </div>

      {/* Educational Section */}
      <div className="mb-8 p-6 bg-muted/50 rounded-lg space-y-4">
        <h3 className="font-semibold text-lg">
          {t("onboarding.option.educationTitle", {
            en: "Understanding Your Options",
            ar: "فهم خياراتك"
          })}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <h4 className="font-semibold">
                {t("onboarding.option.savingsTitle", {
                  en: "Savings Account",
                  ar: "حساب التوفير"
                })}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("onboarding.option.savingsDesc", {
                en: "A safe, secure account with ~0.5% annual returns. Your funds are fully protected and can be withdrawn anytime. Ideal for short-term needs and emergencies.",
                ar: "حساب آمن ومضمون مع عوائد سنوية ~0.5%. أموالك محمية بالكامل ويمكن سحبها في أي وقت. مثالي للاحتياجات قصيرة الأجل والطوارئ."
              })}
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <h4 className="font-semibold">
                {t("onboarding.option.investmentTitle", {
                  en: "Investment Fund",
                  ar: "صندوق الاستثمار"
                })}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("onboarding.option.investmentDesc", {
                en: "Shariah-compliant investments (Sukuk) with expected ~5% annual returns. Certified by Islamic scholars and supervised by SAMA. Suitable for long-term growth.",
                ar: "استثمارات متوافقة مع الشريعة (صكوك) مع عوائد متوقعة ~5% سنوياً. معتمد من قبل العلماء الإسلاميين وتشرف عليه ساما. مناسب للنمو طويل الأجل."
              })}
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
                <h3 className="text-lg font-semibold">
                  {t("onboarding.risk.conservative", {
                    en: "Conservative",
                    ar: "متحفظ"
                  })}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-emerald-600 font-medium">
                    {t("onboarding.risk.riskFree", {
                      en: "Risk Free",
                      ar: "بدون مخاطر"
                    })}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                    <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("onboarding.risk.conservativeDesc", {
                  en: "Perfect for beginners or those prioritizing capital protection",
                  ar: "مثالي للمبتدئين أو أولئك الذين يعطون الأولوية لحماية رأس المال"
                })}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t("onboarding.risk.allocation", {
                      en: "Allocation",
                      ar: "التوزيع"
                    })}
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: "100%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>
                      {t("onboarding.risk.savingsOnly", {
                        en: "100% Savings",
                        ar: "توفير 100%"
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {t("onboarding.risk.conservativeReturn", {
                  en: "Expected Return: ~0.5% annually",
                  ar: "العائد المتوقع: ~0.5% سنوياً"
                })}
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
                <h3 className="text-lg font-semibold">
                  {t("onboarding.risk.moderate", {
                    en: "Moderate",
                    ar: "متوسط"
                  })}
                </h3>
                <div className="flex gap-1">
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                  <div className="w-8 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("onboarding.risk.moderateDesc", {
                  en: "Balanced approach with both safety and growth potential",
                  ar: "نهج متوازن يجمع بين الأمان وإمكانات النمو"
                })}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t("onboarding.risk.allocation", {
                      en: "Allocation",
                      ar: "التوزيع"
                    })}
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden flex">
                    <div className="h-full bg-emerald-500" style={{ width: "50%" }}></div>
                    <div className="h-full bg-yellow-500" style={{ width: "50%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>
                      {t("onboarding.risk.moderateSavings", {
                        en: "50% Savings",
                        ar: "توفير 50%"
                      })}
                    </span>
                    <span>
                      {t("onboarding.risk.moderateInvestment", {
                        en: "50% Investment",
                        ar: "استثمار 50%"
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {t("onboarding.risk.moderateReturn", {
                  en: "Expected Return: ~2.75% annually (blended)",
                  ar: "العائد المتوقع: ~2.75% سنوياً (مزيج)"
                })}
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
                <h3 className="text-lg font-semibold">
                  {t("onboarding.risk.growth", {
                    en: "Growth",
                    ar: "نمو"
                  })}
                </h3>
                <div className="flex gap-1">
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                  <div className="w-8 h-2 bg-emerald-500 rounded"></div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("onboarding.risk.growthDesc", {
                  en: "Maximum growth potential with Shariah-compliant investments",
                  ar: "أقصى إمكانات النمو مع الاستثمارات المتوافقة مع الشريعة"
                })}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground mb-1">
                    {t("onboarding.risk.allocation", {
                      en: "Allocation",
                      ar: "التوزيع"
                    })}
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: "100%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>
                      {t("onboarding.risk.investmentOnly", {
                        en: "100% Investment",
                        ar: "استثمار 100%"
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <span>
                  {t("onboarding.risk.growthReturn", {
                    en: "Expected Return: ~5% annually",
                    ar: "العائد المتوقع: ~5% سنوياً"
                  })}
                </span>
                <Check className="h-3 w-3 text-emerald-600" />
                <span className="text-emerald-600">
                  {t("onboarding.risk.shariahCompliant", {
                    en: "Shariah-Compliant",
                    ar: "متوافق مع الشريعة"
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button 
        className="w-full h-12" 
        onClick={handleSubmit} 
        disabled={!riskProfile || isSubmitting}
      >
        {isSubmitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {currentStep === stepsLength - 1 
          ? t("completeAndContinue", {
              en: "Complete & Continue",
              ar: "إكمال والمتابعة"
            })
          : t("continue", {
              en: "Continue", 
              ar: "متابعة"
            })
        }
      </Button>
    </div>
  )
}