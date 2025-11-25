"use client"

import { useState } from "react"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getFinanceNews, getNewsByCategory, getRelevantNews } from "@/lib/services/news-service"
import { useEffect } from "react"
import type { NewsArticle } from "@/lib/types"
import { TrendingUp, Globe, AlertCircle } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

export default function NewsPage() {
  const { state } = useApp()
  const t = useTranslation()
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "relevant" | "markets" | "crypto" | "personal_finance" | "regulations">(
    "all",
  )

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true)
      let data: NewsArticle[] = []

      if (filter === "all") {
        data = await getFinanceNews()
      } else if (filter === "relevant") {
        data = await getRelevantNews()
      } else {
        data = await getNewsByCategory(filter)
      }

      setNews(data)
      setLoading(false)
    }

    loadNews()
  }, [filter])

  const filterTabs = [
    { id: "all", label: "All", labelAr: "الكل" },
    { id: "relevant", label: "For You", labelAr: "لك" },
    { id: "markets", label: "Markets", labelAr: "الأسواق" },
    { id: "personal_finance", label: "Personal", labelAr: "شخصي" },
    { id: "regulations", label: "Regulations", labelAr: "اللوائح" },
  ]

  return (
    <div className="min-h-screen bg-background pb-24">
      <main className="container max-w-4xl py-6 px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {state.settings.language === "ar" ? "أخبار مالية" : "Financial News"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {state.settings.language === "ar"
              ? "احصل على آخر الأخبار المالية والسعودية ذات الصلة"
              : "Stay updated with latest financial and Saudi market news"}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-min">
            {filterTabs.map((tab) => (
              <Button
                key={tab.id}
                variant={filter === tab.id ? "default" : "outline"}
                onClick={() => setFilter(tab.id as any)}
                className="whitespace-nowrap"
              >
                {state.settings.language === "ar" ? tab.labelAr : tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* News List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {state.settings.language === "ar" ? "جاري التحميل..." : "Loading..."}
            </p>
          </div>
        ) : news.length === 0 ? (
          <Card className="text-center py-12">
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              {state.settings.language === "ar" ? "لا توجد أخبار متاحة" : "No news available"}
            </p>
          </Card>
        ) : (
          <div className="space-y-4">
            {news.map((article) => (
              <Card key={article.id} className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 pt-1">
                      {article.category === "markets" && (
                        <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      )}
                      {article.category === "crypto" && <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />}
                      {article.category === "personal_finance" && (
                        <AlertCircle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                      )}
                      {article.category === "regulations" && (
                        <AlertCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg leading-tight">
                          {state.settings.language === "ar" ? article.titleAr : article.title}
                        </h3>
                        {article.relevanceScore >= 8 && (
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 text-xs rounded-full flex-shrink-0">
                            {state.settings.language === "ar" ? "مهم" : "Important"}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {state.settings.language === "ar" ? article.summaryAr : article.summary}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.source}</span>
                        <span>
                          {new Date(article.date).toLocaleDateString(
                            state.settings.language === "ar" ? "ar-SA" : "en-US",
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>

      {/* BottomNav component */}
      <BottomNav />
    </div>
  )
}
