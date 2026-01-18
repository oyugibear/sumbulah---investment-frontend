"use client"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MOCK_QUIZZES } from "@/lib/mock-data"
import { BookOpen, Clock, CheckCircle } from "lucide-react"

export default function QuizzesPage() {
  const router = useRouter()
  const { state } = useApp()
  const t = useTranslation()

  const modules = [
    { id: "shariah", title: "Shariah Investing", titleAr: "الاستثمار الشرعي", icon: "📖" },
    { id: "budgeting", title: "Smart Budgeting", titleAr: "الميزانية الذكية", icon: "📊" },
    { id: "investing", title: "Investment Basics", titleAr: "أساسيات الاستثمار", icon: "📈" },
    { id: "zakat", title: "Zakat Essentials", titleAr: "أساسيات الزكاة", icon: "🕌" },
  ]

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="container max-w-4xl py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {state.settings.language === "ar" ? "الاختبارات" : "Quizzes"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {state.settings.language === "ar"
              ? "اختبر معرفتك وتعلم مهارات جديدة"
              : "Test your knowledge and learn new skills"}
          </p>
        </div>

        {/* Quiz Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((module) => {
            const quiz = MOCK_QUIZZES.find((q) => q.module === module.id)
            const isCompleted = quiz && quiz.completedBy.includes("user-1")

            return (
              <Card
                key={module.id}
                className={`cursor-pointer hover:shadow-lg transition-all ${isCompleted ? "border-emerald-200 bg-emerald-50 dark:bg-emerald-950" : ""}`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{module.icon}</div>
                    {isCompleted && <CheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />}
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {state.settings.language === "ar" ? module.titleAr : module.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {quiz?.questions.length || 10} {state.settings.language === "ar" ? "أسئلة" : "Questions"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      5-10 {state.settings.language === "ar" ? "دقائق" : "min"}
                    </span>
                  </div>

                  <Button className="w-full" onClick={() => router.push(`/learn/quizzes/${module.id}`)}>
                    {isCompleted
                      ? state.settings.language === "ar"
                        ? "إعادة محاولة"
                        : "Retake"
                      : state.settings.language === "ar"
                        ? "ابدأ"
                        : "Start"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Info Card */}
        <Card className="mt-6 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-base">
              {state.settings.language === "ar" ? "تعلم بواسطة الاختبارات" : "Learn by Quizzes"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {state.settings.language === "ar"
                ? "أكمل الاختبارات لتحسين معرفتك المالية. كل اختبار مصمم لتعليمك مهارات عملية وقابلة للتطبيق."
                : "Complete quizzes to enhance your financial knowledge. Each quiz is designed to teach you practical, applicable skills."}
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
