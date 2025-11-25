"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
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

interface GoalJarProps {
  id: string
  type: "emergency" | "hajj" | "car" | "home" | "marriage" | "wealth"
  name: string
  current: number
  target: number
  color: string
}

export function GoalJars() {
  const { t, language } = useTranslation()

  // Mock data - in real app would come from context/API
  const jars: GoalJarProps[] = [
    {
      id: "1",
      type: "emergency",
      name: t("onboarding.goals.emergency"),
      current: 2500,
      target: 10000,
      color: "bg-red-500",
    },
    { id: "2", type: "hajj", name: t("onboarding.goals.hajj"), current: 1200, target: 15000, color: "bg-emerald-500" },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "emergency":
        return <ShieldCheck className="h-5 w-5 text-red-600" />
      case "hajj":
        return <Plane className="h-5 w-5 text-emerald-600" />
      case "car":
        return <Car className="h-5 w-5 text-blue-600" />
      case "home":
        return <Home className="h-5 w-5 text-indigo-600" />
      case "marriage":
        return <Heart className="h-5 w-5 text-pink-600" />
      default:
        return <Wallet className="h-5 w-5 text-amber-600" />
    }
  }

  const getBgColor = (type: string) => {
    switch (type) {
      case "emergency":
        return "bg-red-100 dark:bg-red-900/20"
      case "hajj":
        return "bg-emerald-100 dark:bg-emerald-900/20"
      case "car":
        return "bg-blue-100 dark:bg-blue-900/20"
      case "home":
        return "bg-indigo-100 dark:bg-indigo-900/20"
      case "marriage":
        return "bg-pink-100 dark:bg-pink-900/20"
      default:
        return "bg-amber-100 dark:bg-amber-900/20"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === "ar" ? "ar-SA" : "en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 0,
    }).format(amount)
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
        {jars.map((jar) => (
          <Card key={jar.id} className="border-none shadow-sm bg-white dark:bg-slate-900 overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getBgColor(jar.type)}`}>
                  {getIcon(jar.type)}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm">{jar.name}</h3>
                    <span className="text-xs font-medium text-muted-foreground">
                      {Math.round((jar.current / jar.target) * 100)}%
                    </span>
                  </div>
                  <Progress value={(jar.current / jar.target) * 100} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{formatCurrency(jar.current)}</span>
                    <span>
                      {t("target")}: {formatCurrency(jar.target)}
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
                    <DropdownMenuLabel>{language === "ar" ? "خيارات" : "Options"}</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => console.log("Add funds", jar.id)}>
                      <ArrowDownLeft className="mr-2 h-4 w-4" />
                      {language === "ar" ? "إيداع" : "Add Funds"}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log("Withdraw", jar.id)}>
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      {language === "ar" ? "سحب" : "Withdraw"}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => console.log("Edit goal", jar.id)}>
                      <Pencil className="mr-2 h-4 w-4" />
                      {language === "ar" ? "تعديل" : "Edit Goal"}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600 focus:text-red-600"
                      onClick={() => console.log("Delete goal", jar.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      {language === "ar" ? "حذف" : "Delete"}
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
