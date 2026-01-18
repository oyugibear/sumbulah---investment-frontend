"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useApp } from "@/lib/context/app-context"
import {
  Plus,
  MoreHorizontal,
  Plane,
  Car,
  Home,
  ShieldCheck,
  Heart,
  Wallet,
  Pencil,
  Trash2,
  ArrowDownLeft,
  ArrowUpRight,
  Target,
  GraduationCap,
  Baby,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/hooks/use-translation"

export function GoalJars() {
  const { t, language } = useTranslation()
  const { state } = useApp()
  const { goals } = state

  const getIcon = (goalName: string) => {
    const name = goalName.toLowerCase()
    if (name.includes('emergency') || name.includes('طوارئ')) return <ShieldCheck className="h-5 w-5 text-red-600" />
    if (name.includes('hajj') || name.includes('حج') || name.includes('umrah') || name.includes('عمرة')) return <Plane className="h-5 w-5 text-emerald-600" />
    if (name.includes('car') || name.includes('سيارة')) return <Car className="h-5 w-5 text-blue-600" />
    if (name.includes('home') || name.includes('house') || name.includes('منزل') || name.includes('بيت')) return <Home className="h-5 w-5 text-indigo-600" />
    if (name.includes('wedding') || name.includes('marriage') || name.includes('زواج') || name.includes('زفاف')) return <Heart className="h-5 w-5 text-pink-600" />
    if (name.includes('education') || name.includes('تعليم')) return <GraduationCap className="h-5 w-5 text-purple-600" />
    if (name.includes('family') || name.includes('kids') || name.includes('أسرة') || name.includes('أطفال')) return <Baby className="h-5 w-5 text-yellow-600" />
    return <Wallet className="h-5 w-5 text-amber-600" />
  }

  const getBgColor = (goalName: string) => {
    const name = goalName.toLowerCase()
    if (name.includes('emergency') || name.includes('طوارئ')) return "bg-red-100 dark:bg-red-900/20"
    if (name.includes('hajj') || name.includes('حج') || name.includes('umrah') || name.includes('عمرة')) return "bg-emerald-100 dark:bg-emerald-900/20"
    if (name.includes('car') || name.includes('سيارة')) return "bg-blue-100 dark:bg-blue-900/20"
    if (name.includes('home') || name.includes('house') || name.includes('منزل') || name.includes('بيت')) return "bg-indigo-100 dark:bg-indigo-900/20"
    if (name.includes('wedding') || name.includes('marriage') || name.includes('زواج') || name.includes('زفاف')) return "bg-pink-100 dark:bg-pink-900/20"
    if (name.includes('education') || name.includes('تعليم')) return "bg-purple-100 dark:bg-purple-900/20"
    if (name.includes('family') || name.includes('kids') || name.includes('أسرة') || name.includes('أطفال')) return "bg-yellow-100 dark:bg-yellow-900/20"
    return "bg-amber-100 dark:bg-amber-900/20"
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  if (goals.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <h2 className="font-bold text-lg">{t("home.yourGoals")}</h2>
        </div>
        
        <Card className="border-dashed">
          <CardContent className="p-6 text-center">
            <Target className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              {language === "ar" ? "لا توجد أهداف مالية" : "No Financial Goals Yet"}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {language === "ar" 
                ? "ابدأ رحلة الادخار بتحديد أهدافك المالية في الملف الشخصي" 
                : "Start your savings journey by setting financial goals in your profile"}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="font-bold text-lg">{t("home.yourGoals")}</h2>
        <Button variant="ghost" size="sm" className="text-emerald-600 h-auto p-0 hover:bg-transparent">
          <Plus className="h-4 w-4 mr-1" />
          Add
        </Button>
      </div>

      <div className="grid gap-3">
        {goals.map((goal) => (
          <Card key={goal.id} className="border-none shadow-sm bg-white dark:bg-slate-900 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBgColor(goal.name)}`}>
                  {getIcon(goal.name)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm">{goal.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {Math.round((goal.progress / goal.target) * 100)}%
                    </span>
                  </div>
                  <Progress value={(goal.progress / goal.target) * 100} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{formatCurrency(goal.progress)}</span>
                    <span>
                      {t("target")}: {formatCurrency(goal.target)}
                    </span>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 text-muted-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {t("goals.options", {
                        en: "Options",
                        ar: "خيارات"
                      })}
                    </DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => console.log("Add funds", goal.id)}>
                      <ArrowDownLeft className="mr-2 h-4 w-4" />
                      {t("goals.addFunds", {
                        en: "Add Funds",
                        ar: "إيداع"
                      })}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log("Withdraw", goal.id)}>
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      {t("goals.withdraw", {
                        en: "Withdraw",
                        ar: "سحب"
                      })}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => console.log("Edit goal", goal.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      {t("goals.editGoal", {
                        en: "Edit Goal",
                        ar: "تعديل"
                      })}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => console.log("Delete goal", goal.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {t("goals.delete", {
                        en: "Delete",
                        ar: "حذف"
                      })}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
