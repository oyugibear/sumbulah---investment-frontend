import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslation } from '@/lib/hooks/use-translation'
import { ShieldCheck, Plane, Car, Home, Heart, Wallet, CheckCircle2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

interface GoalStepProps {
  handleNext: () => void
  goal: string | null
  setGoal: (goal: string | null) => void
  targetAmount: string
  setTargetAmount: (amount: string) => void
  showGoalSuccess: boolean
  setShowGoalSuccess: (show: boolean) => void
  handleGoalSubmit: () => void
  handleGoalSuccessContinue: () => void
}

export default function GoalStep({
  handleNext,
  goal,
  setGoal,
  targetAmount,
  setTargetAmount,
  showGoalSuccess,
  setShowGoalSuccess,
  handleGoalSubmit,
  handleGoalSuccessContinue
}: GoalStepProps) {
  const { t, language } = useTranslation()

  const goalOptions = [
    { id: "emergency", icon: ShieldCheck, labelEn: "Emergency Fund", labelAr: "صندوق الطوارئ" },
    { id: "hajj", icon: Plane, labelEn: "Hajj / Umrah", labelAr: "الحج / العمرة" },
    { id: "car", icon: Car, labelEn: "New Car", labelAr: "سيارة جديدة" },
    { id: "home", icon: Home, labelEn: "Home Purchase", labelAr: "شراء منزل" },
    { id: "marriage", icon: Heart, labelEn: "Marriage", labelAr: "الزواج" },
    { id: "wealth", icon: Wallet, labelEn: "Build Wealth", labelAr: "بناء الثروة" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">
          {t("onboarding.goal.title", {
            en: "What's Your Goal?",
            ar: "ما هو هدفك؟"
          })}
        </h2>
        <p className="text-muted-foreground">
          {t("onboarding.goal.subtitle", {
            en: "Choose what you're saving for",
            ar: "اختر ما تدخر من أجله"
          })}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {goalOptions.map((item) => (
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
            <span className="font-medium text-sm">
              {language === "ar" ? item.labelAr : item.labelEn}
            </span>
          </button>
        ))}
      </div>

      {goal && (
        <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
          <Label htmlFor="targetAmount">
            {t("onboarding.goal.targetLabel", {
              en: "Target Amount (SAR)",
              ar: "المبلغ المستهدف (ريال)"
            })}
          </Label>
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
        {t("continue", {
          en: "Continue",
          ar: "متابعة"
        })}
      </Button>

      <Dialog open={showGoalSuccess} onOpenChange={setShowGoalSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {t("onboarding.goal.successTitle", {
                en: "Great Choice!",
                ar: "اختيار ممتاز!"
              })}
            </DialogTitle>
            <DialogDescription className="text-center">
              {t("onboarding.goal.successDesc", {
                en: `You've set a goal to save ${targetAmount} SAR for your ${goalOptions.find(g => g.id === goal)?.[language === "ar" ? "labelAr" : "labelEn"]}. Let's make it happen!`,
                ar: `لقد حددت هدفاً لادخار ${targetAmount} ريال من أجل ${goalOptions.find(g => g.id === goal)?.labelAr}. دعنا نحققه معاً!`
              })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button onClick={handleGoalSuccessContinue} className="w-full sm:w-auto">
              {t("onboarding.goal.successCta", {
                en: "Let's Start Saving!",
                ar: "لنبدأ الادخار!"
              })}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}