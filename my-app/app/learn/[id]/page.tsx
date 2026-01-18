"use client"

import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { ARTICLES } from "@/lib/mock-data"
import { useApp } from "@/lib/context/app-context"
import { ChevronLeft } from "lucide-react"

export default function ArticlePage() {
  const router = useRouter()
  const params = useParams()
  const { state, logAnalytics } = useApp()

  const article = ARTICLES.find((a) => a.id === params.id)
  const { language } = state.settings

  if (!article) {
    return null
  }

  // Log article read
  if (article.readProgress === 0) {
    logAnalytics("article_read", { articleId: article.id })
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <Button variant="ghost" size="sm" onClick={() => router.push("/learn")} className="mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Learn
        </Button>

        <Card className="p-8">
          <h1 className="mb-6 text-balance text-3xl font-bold leading-tight text-card-foreground">
            {language === "ar" ? article.titleAr : article.title}
          </h1>

          <div className="prose prose-sm max-w-none">
            <p className="text-pretty leading-relaxed text-card-foreground">
              {language === "ar" ? article.contentAr : article.content}
            </p>
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Reading time: 2-3 minutes</span>
              <span>Shariah-aligned content</span>
            </div>
          </div>
        </Card>

        {/* Related Articles */}
        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-foreground">Continue Learning</h2>
          <div className="space-y-2">
            {ARTICLES.filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Card
                  key={relatedArticle.id}
                  className="cursor-pointer p-4 transition-all hover:border-primary/50"
                  onClick={() => router.push(`/learn/${relatedArticle.id}`)}
                >
                  <div className="font-medium text-card-foreground">
                    {language === "ar" ? relatedArticle.titleAr : relatedArticle.title}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>

      {/* BottomNav component */}
      <BottomNav />
    </div>
  )
}
