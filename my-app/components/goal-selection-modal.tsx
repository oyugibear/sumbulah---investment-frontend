"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Plane, Car, Home, ShieldCheck, Heart, Wallet, GraduationCap, Baby } from "lucide-react"
import { cn } from "@/lib/utils"

export interface GoalType {
  id: string
  name: string
  nameAr: string
  icon: React.ReactNode
  color: string
  suggestedAmount: number
  description: string
  descriptionAr: string
}

interface GoalSelectionModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateGoal: (goal: { type: string; name: string; target: number }) => void
  language: "en" | "ar"
}

const GOAL_TYPES: GoalType[] = [
  {
    id: "emergency",
    name: "Emergency Fund",
    nameAr: "صندوق الطوارئ",
    icon: <ShieldCheck className="h-6 w-6" />,
    color: "bg-red-100 text-red-600 border-red-200",
    suggestedAmount: 10000,
    description: "3-6 months of expenses for unexpected situations",
    descriptionAr: "3-6 أشهر من المصاريف للحالات الطارئة"
  },
  {
    id: "hajj",
    name: "Hajj & Umrah",
    nameAr: "الحج والعمرة",
    icon: <Plane className="h-6 w-6" />,
    color: "bg-emerald-100 text-emerald-600 border-emerald-200",
    suggestedAmount: 25000,
    description: "Save for your spiritual journey",
    descriptionAr: "ادخر لرحلتك الروحية"
  },
  {
    id: "car",
    name: "Car Purchase",
    nameAr: "شراء سيارة",
    icon: <Car className="h-6 w-6" />,
    color: "bg-blue-100 text-blue-600 border-blue-200",
    suggestedAmount: 80000,
    description: "Save for your dream car",
    descriptionAr: "ادخر لسيارة أحلامك"
  },
  {
    id: "home",
    name: "Home Down Payment",
    nameAr: "دفعة أولى للمنزل",
    icon: <Home className="h-6 w-6" />,
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
    suggestedAmount: 200000,
    description: "Down payment for your first home",
    descriptionAr: "دفعة أولى لمنزلك الأول"
  },
  {
    id: "marriage",
    name: "Wedding & Marriage",
    nameAr: "الزواج والزفاف",
    icon: <Heart className="h-6 w-6" />,
    color: "bg-pink-100 text-pink-600 border-pink-200",
    suggestedAmount: 50000,
    description: "Celebrate your special day",
    descriptionAr: "احتفل بيومك المميز"
  },
  {
    id: "education",
    name: "Education",
    nameAr: "التعليم",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "bg-purple-100 text-purple-600 border-purple-200",
    suggestedAmount: 100000,
    description: "Invest in your education or your children's",
    descriptionAr: "استثمر في تعليمك أو تعليم أطفالك"
  },
  {
    id: "family",
    name: "Family & Kids",
    nameAr: "الأسرة والأطفال",
    icon: <Baby className="h-6 w-6" />,
    color: "bg-yellow-100 text-yellow-600 border-yellow-200",
    suggestedAmount: 50000,
    description: "Prepare for family expenses",
    descriptionAr: "استعد لمصاريف الأسرة"
  },
  {
    id: "wealth",
    name: "Wealth Building",
    nameAr: "بناء الثروة",
    icon: <Wallet className="h-6 w-6" />,
    color: "bg-amber-100 text-amber-600 border-amber-200",
    suggestedAmount: 100000,
    description: "Long-term wealth accumulation",
    descriptionAr: "تراكم الثروة على المدى الطويل"
  }
]

export function GoalSelectionModal({ open, onOpenChange, onCreateGoal, language }: GoalSelectionModalProps) {
  const [selectedGoal, setSelectedGoal] = useState<GoalType | null>(null)
  const [customName, setCustomName] = useState("")
  const [targetAmount, setTargetAmount] = useState("")
  const [step, setStep] = useState<"select" | "configure">("select")

  const handleGoalSelect = (goal: GoalType) => {
    setSelectedGoal(goal)
    setCustomName(language === "ar" ? goal.nameAr : goal.name)
    setTargetAmount(goal.suggestedAmount.toString())
    setStep("configure")
  }

  const handleCreateGoal = () => {
    if (selectedGoal && customName && targetAmount) {
      onCreateGoal({
        type: selectedGoal.id,
        name: customName,
        target: parseInt(targetAmount)
      })
      handleReset()
      onOpenChange(false)
    }
  }

  const handleReset = () => {
    setSelectedGoal(null)
    setCustomName("")
    setTargetAmount("")
    setStep("select")
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <Dialog open={open} onOpenChange={(open) => {
      onOpenChange(open)
      if (!open) handleReset()
    }}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {step === "select" 
              ? (language === "ar" ? "اختر هدف جديد" : "Choose a New Goal")
              : (language === "ar" ? "تخصيص هدفك" : "Customize Your Goal")
            }
          </DialogTitle>
          <DialogDescription>
            {step === "select"
              ? (language === "ar" ? "اختر نوع الهدف الذي تريد البدء في الادخار من أجله" : "Select the type of goal you want to start saving for")
              : (language === "ar" ? "أضبط تفاصيل هدفك المالي" : "Set up your financial goal details")
            }
          </DialogDescription>
        </DialogHeader>

        {step === "select" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {GOAL_TYPES.map((goal) => (
              <Card
                key={goal.id}
                className="p-4 cursor-pointer hover:shadow-md transition-all hover:scale-105 border-2"
                onClick={() => handleGoalSelect(goal)}
              >
                <div className="text-center space-y-3">
                  <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mx-auto", goal.color)}>
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">
                      {language === "ar" ? goal.nameAr : goal.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {formatCurrency(goal.suggestedAmount)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {step === "configure" && selectedGoal && (
          <div className="space-y-6 mt-4">
            {/* Selected Goal Preview */}
            <Card className="p-4 bg-muted/50">
              <div className="flex items-center gap-3">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", selectedGoal.color)}>
                  {selectedGoal.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">
                    {language === "ar" ? selectedGoal.nameAr : selectedGoal.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "ar" ? selectedGoal.descriptionAr : selectedGoal.description}
                  </p>
                </div>
              </div>
            </Card>

            {/* Goal Configuration */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="goalName">
                  {language === "ar" ? "اسم الهدف" : "Goal Name"}
                </Label>
                <Input
                  id="goalName"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder={language === "ar" ? "أدخل اسم الهدف" : "Enter goal name"}
                />
              </div>

              <div>
                <Label htmlFor="targetAmount">
                  {language === "ar" ? "المبلغ المستهدف (ريال)" : "Target Amount (SAR)"}
                </Label>
                <Input
                  id="targetAmount"
                  type="number"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  placeholder="0"
                  min="1"
                />
                {targetAmount && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {formatCurrency(parseInt(targetAmount || "0"))}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep("select")} className="flex-1">
                {language === "ar" ? "رجوع" : "Back"}
              </Button>
              <Button 
                onClick={handleCreateGoal}
                disabled={!customName || !targetAmount || parseInt(targetAmount) < 1}
                className="flex-1"
              >
                <Plus className="w-4 h-4 mr-2" />
                {language === "ar" ? "إنشاء الهدف" : "Create Goal"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}