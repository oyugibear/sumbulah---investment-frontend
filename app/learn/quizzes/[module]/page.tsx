"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MOCK_QUIZZES } from "@/lib/mock-data"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from "lucide-react"

export default function QuizPage() {
  const router = useRouter()
  const params = useParams()
  const { state } = useApp()
  const t = useTranslation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  const moduleId = params.module as string
  const quiz = MOCK_QUIZZES.find((q) => q.module === moduleId)

  if (!quiz) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p>{state.settings.language === "ar" ? "لم يتم العثور على الاختبار" : "Quiz not found"}</p>
            <Button className="mt-4" onClick={() => router.push("/learn/quizzes")}>
              {state.settings.language === "ar" ? "العودة" : "Go Back"}
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const progressPercent = ((currentQuestion + 1) / quiz.questions.length) * 100

  const handleSelectAnswer = (optionId: string) => {
    if (!answered) {
      setSelectedAnswer(optionId)
      const isCorrect = quiz.questions[currentQuestion].options.find((o) => o.id === optionId)?.isCorrect || false
      if (isCorrect) {
        setScore(score + 1)
      }
      setAnswered(true)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    const percentage = (score / quiz.questions.length) * 100
    const passed = percentage >= 70

    return (
      <div className="min-h-screen bg-background pb-24">
        <main className="container max-w-4xl py-6 px-4">
          <Card
            className={`text-center py-12 ${passed ? "border-emerald-200 bg-emerald-50 dark:bg-emerald-950" : "border-orange-200 bg-orange-50 dark:bg-orange-950"}`}
          >
            <CardContent className="space-y-6">
              {passed ? (
                <>
                  <div className="text-6xl">🎉</div>
                  <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">
                    {state.settings.language === "ar" ? "ممتاز!" : "Excellent!"}
                  </h1>
                </>
              ) : (
                <>
                  <div className="text-6xl">📚</div>
                  <h1 className="text-3xl font-bold text-orange-900 dark:text-orange-100">
                    {state.settings.language === "ar" ? "جيد محاولة!" : "Good Try!"}
                  </h1>
                </>
              )}

              <div className="text-5xl font-bold text-foreground">
                {score}/{quiz.questions.length}
              </div>

              <p className="text-lg text-muted-foreground">
                {percentage >= 90
                  ? state.settings.language === "ar"
                    ? "أداء استثنائي!"
                    : "Outstanding performance!"
                  : percentage >= 70
                    ? state.settings.language === "ar"
                      ? "أنت على الطريق الصحيح!"
                      : "You're on the right track!"
                    : state.settings.language === "ar"
                      ? "مراجعة المواد وحاول مرة أخرى"
                      : "Review the material and try again"}
              </p>

              <div className="flex gap-3 justify-center">
                <Button onClick={() => router.push("/learn/quizzes")}>
                  {state.settings.language === "ar" ? "العودة إلى الاختبارات" : "Back to Quizzes"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setCurrentQuestion(0)
                    setScore(0)
                    setCompleted(false)
                    setSelectedAnswer(null)
                    setAnswered(false)
                  }}
                >
                  {state.settings.language === "ar" ? "إعادة المحاولة" : "Retake"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="container max-w-2xl py-6 px-4">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              {state.settings.language === "ar" ? "السؤال" : "Question"} {currentQuestion + 1} / {quiz.questions.length}
            </span>
            <span className="text-sm font-medium">{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardContent className="pt-8">
            <h2 className="text-xl font-semibold mb-6">
              {state.settings.language === "ar" ? question.questionAr : question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option) => {
                const isSelected = selectedAnswer === option.id
                const isCorrect = option.isCorrect
                const showResult = answered && isSelected

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={answered}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      answered
                        ? isCorrect
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950"
                          : isSelected
                            ? "border-red-500 bg-red-50 dark:bg-red-950"
                            : "border-border bg-muted"
                        : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                    } ${answered ? "cursor-default" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          answered
                            ? isCorrect
                              ? "border-emerald-500 bg-emerald-500"
                              : isSelected
                                ? "border-red-500 bg-red-500"
                                : "border-border"
                            : isSelected
                              ? "border-primary bg-primary"
                              : "border-border"
                        }`}
                      >
                        {answered && isCorrect && <CheckCircle className="h-4 w-4 text-white" />}
                        {answered && isSelected && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                      </div>
                      <span className="font-medium">
                        {state.settings.language === "ar" ? option.textAr : option.text}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Next Button */}
        <Button onClick={handleNext} disabled={!answered} className="w-full" size="lg">
          {currentQuestion === quiz.questions.length - 1
            ? state.settings.language === "ar"
              ? "إنهاء"
              : "Finish"
            : state.settings.language === "ar"
              ? "التالي"
              : "Next"}
        </Button>
      </main>
    </div>
  )
}
