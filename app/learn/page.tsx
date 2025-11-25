"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BottomNav } from "@/components/bottom-nav"
import { EmptyState } from "@/components/empty-state"
import { ARTICLES } from "@/lib/mock-data"
import { useApp } from "@/lib/context/app-context"
import { ChevronRight, BookOpen, Search, ArrowLeft } from "lucide-react"

export default function LearnPage() {
  const router = useRouter()
  const { state } = useApp()
  const { language } = state.settings
  const [searchQuery, setSearchQuery] = useState("")

  const filteredArticles = ARTICLES.filter((article) => {
    if (!searchQuery) return true
    const title = language === "ar" ? article.titleAr : article.title
    const content = language === "ar" ? article.contentAr : article.content
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {language === "ar" ? "رجوع" : "Back"}
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-foreground">Learn</h1>
          <p className="text-muted-foreground">Build your investing knowledge with short, practical articles</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder={language === "ar" ? "ابحث عن المقالات..." : "Search articles..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredArticles.length === 0 ? (
          <EmptyState
            icon={BookOpen}
            title="No articles found"
            description="Try adjusting your search query to find what you're looking for."
            actionLabel="Clear Search"
            onAction={() => setSearchQuery("")}
          />
        ) : (
          <>
            {/* Articles Grid */}
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="cursor-pointer p-6 transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-md"
                  onClick={() => router.push(`/learn/${article.id}`)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold text-card-foreground">
                        {language === "ar" ? article.titleAr : article.title}
                      </h3>
                      <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
                        {language === "ar"
                          ? article.contentAr.substring(0, 100) + "..."
                          : article.content.substring(0, 100) + "..."}
                      </p>
                      {article.readProgress > 0 && (
                        <div className="flex items-center gap-2">
                          <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full bg-primary transition-all duration-300"
                              style={{ width: `${article.readProgress}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">{article.readProgress}%</span>
                        </div>
                      )}
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>

            {/* Info Card */}
            <Card className="mt-6 border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-2 font-semibold text-card-foreground">Why Learn?</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Understanding the basics of investing helps you make informed decisions and stay confident during market
                changes. Each article takes just 2-3 minutes to read.
              </p>
            </Card>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
