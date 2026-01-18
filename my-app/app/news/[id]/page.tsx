"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { getNewsArticle } from "@/lib/services/news-service"
import type { NewsArticle } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BottomNav } from "@/components/bottom-nav"
import { ArrowLeft, ExternalLink, Clock, User, Globe, Share2 } from "lucide-react"

export default function NewsArticlePage() {
  const router = useRouter()
  const params = useParams()
  const { state } = useApp()
  const { language } = state.settings
  const [article, setArticle] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadArticle = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const articleId = params.id as string
        if (!articleId) {
          setError(language === "ar" ? "معرف المقال مفقود" : "Article ID is missing")
          return
        }

        console.log('📰 Loading article:', articleId)
        const articleData = await getNewsArticle(articleId)
        setArticle(articleData)
        
      } catch (err) {
        console.error('❌ Error loading article:', err)
        setError(language === "ar" 
          ? "فشل في تحميل المقال. يرجى المحاولة مرة أخرى."
          : "Failed to load article. Please try again."
        )
      } finally {
        setLoading(false)
      }
    }

    loadArticle()
  }, [params.id, language])

  const handleShare = async () => {
    if (article && navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.summary,
          url: window.location.href
        })
      } catch (err) {
        console.log('Share was cancelled or failed')
      }
    } else if (article) {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "markets":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
      case "crypto":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
      case "personal_finance":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
      case "regulations":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    }
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      markets: language === "ar" ? "الأسواق" : "Markets",
      crypto: language === "ar" ? "العملات المشفرة" : "Crypto",
      personal_finance: language === "ar" ? "الشؤون المالية" : "Personal Finance",
      regulations: language === "ar" ? "اللوائح" : "Regulations"
    }
    return labels[category as keyof typeof labels] || category
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "ar" ? "رجوع" : "Back"}
          </Button>
          
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-muted-foreground">
                {language === "ar" ? "جاري تحميل المقال..." : "Loading article..."}
              </p>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-background pb-24">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4 -ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "ar" ? "رجوع" : "Back"}
          </Button>
          
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {language === "ar" ? "خطأ في تحميل المقال" : "Error Loading Article"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {error || (language === "ar" ? "المقال غير موجود" : "Article not found")}
              </p>
              <Button onClick={() => router.back()}>
                {language === "ar" ? "العودة للأخبار" : "Back to News"}
              </Button>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => router.back()} className="-ml-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {language === "ar" ? "رجوع" : "Back"}
          </Button>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              {language === "ar" ? "مشاركة" : "Share"}
            </Button>
            
            <Button variant="ghost" size="sm" asChild>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                {language === "ar" ? "المصدر" : "Source"}
              </a>
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <Card>
          <CardContent className="p-8">
            {/* Article Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getCategoryColor(article.category)}>
                  {getCategoryLabel(article.category)}
                </Badge>
                
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime || 3} {language === "ar" ? "دقائق" : "min read"}</span>
                  </div>
                  
                  {article.author && (
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                  )}
                </div>
              </div>

              <h1 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                {language === "ar" && article.titleAr ? article.titleAr : article.title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === "ar" && article.summaryAr ? article.summaryAr : article.summary}
              </p>
            </div>

            {/* Featured Image */}
            {article.urlToImage && (
              <div className="mb-8">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            )}

            {/* Article Body */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-foreground leading-relaxed text-lg">
                {language === "ar" && article.descriptionAr 
                  ? article.descriptionAr 
                  : article.description
                }
              </p>
            </div>

            {/* Article Footer */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>
                    {language === "ar" ? "المصدر:" : "Source:"} {article.source}
                  </span>
                  <span>
                    {language === "ar" ? "نُشر في:" : "Published:"} {" "}
                    {new Date(article.date).toLocaleDateString(
                      language === "ar" ? "ar-SA" : "en-US",
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </span>
                </div>

                {article.relevanceScore > 0.7 && (
                  <Badge variant="secondary">
                    {language === "ar" ? "ذات صلة عالية" : "High Relevance"}
                  </Badge>
                )}
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 5).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Read Original Button */}
            <div className="mt-8 text-center">
              <Button asChild>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {language === "ar" ? "قراءة المقال الأصلي" : "Read Original Article"}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <BottomNav />
    </div>
  )
}