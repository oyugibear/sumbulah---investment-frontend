import type { NewsArticle } from "../types"
import { apiClient, isApiSuccess } from "../api/client"

/**
 * News Service - Data layer abstraction
 * Connects to the MarketAux API via backend server
 */

interface NewsApiResponse {
  success: boolean
  data: any[]
  pagination?: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
  category?: string
  minRelevance?: number
}

/**
 * Transform API news data to match frontend NewsArticle type
 */
function transformNewsArticle(apiNews: any): NewsArticle {
  const description = apiNews.description || apiNews.content?.substring(0, 200) + "..." || ""
  
  // Map backend categories to frontend constrained categories
  const mapCategory = (backendCategory: string): "markets" | "crypto" | "personal_finance" | "regulations" => {
    switch (backendCategory) {
      case 'finance':
      case 'markets':
      case 'business':
      case 'economy':
        return 'markets'
      case 'crypto':
        return 'crypto'
      case 'personal_finance':
        return 'personal_finance'
      case 'regulations':
        return 'regulations'
      default:
        return 'markets' // Default fallback
    }
  }
  
  return {
    id: apiNews._id || apiNews.id,
    title: apiNews.title,
    titleAr: apiNews.titleAr || apiNews.title, // Fallback to English title if Arabic not available
    summary: description.length > 150 ? description.substring(0, 150) + "..." : description,
    description: description,
    descriptionAr: apiNews.descriptionAr,
    summaryAr: apiNews.summaryAr || (apiNews.titleAr ? apiNews.titleAr.substring(0, 100) + "..." : description.substring(0, 100) + "..."),
    url: apiNews.url,
    urlToImage: apiNews.urlToImage || null,
    date: apiNews.publishedAt || apiNews.createdAt,
    source: apiNews.source,
    category: mapCategory(apiNews.category || 'markets'),
    relevanceScore: apiNews.relevanceScore || 0.5,
    sentiment: apiNews.sentiment || 'neutral',
    readTime: apiNews.readTime || 3,
    tags: apiNews.tags || [],
    author: apiNews.author || null
  }
}

/**
 * Get latest Saudi Arabia financial news
 */
export async function getFinanceNews(page = 1, limit = 20): Promise<NewsArticle[]> {
  try {
    console.log('📰 Fetching finance news from API...')
    
    const response = await apiClient.get<NewsApiResponse>(`/news/finance?page=${page}&limit=${limit}`)
    
    if (isApiSuccess(response)) {
      console.log(`✅ Fetched ${response.data.data.length} finance news articles`)
      return response.data.data.map(transformNewsArticle)
    } else {
      throw new Error(response.error || 'Failed to fetch finance news')
    }
  } catch (error) {
    console.error('❌ Error fetching finance news:', error)
    throw error
  }
}

/**
 * Get news by specific category
 */
export async function getNewsByCategory(category: string, page = 1, limit = 20): Promise<NewsArticle[]> {
  try {
    console.log(`📰 Fetching ${category} news from API...`)
    
    const response = await apiClient.get<NewsApiResponse>(`/news/category/${category}?page=${page}&limit=${limit}`)
    
    if (isApiSuccess(response)) {
      console.log(`✅ Fetched ${response.data.data.length} ${category} news articles`)
      return response.data.data.map(transformNewsArticle)
    } else {
      throw new Error(response.error || `Failed to fetch ${category} news`)
    }
  } catch (error) {
    console.error(`❌ Error fetching ${category} news:`, error)
    throw error
  }
}

/**
 * Get personalized/relevant news with high relevance score
 */
export async function getRelevantNews(minRelevance = 0.7, page = 1, limit = 20): Promise<NewsArticle[]> {
  try {
    console.log('📰 Fetching relevant news from API...')
    
    const response = await apiClient.get<NewsApiResponse>(
      `/news/relevant?minRelevance=${minRelevance}&page=${page}&limit=${limit}`
    )
    
    if (isApiSuccess(response)) {
      console.log(`✅ Fetched ${response.data.data.length} relevant news articles`)
      return response.data.data.map(transformNewsArticle)
    } else {
      throw new Error(response.error || 'Failed to fetch relevant news')
    }
  } catch (error) {
    console.error('❌ Error fetching relevant news:', error)
    throw error
  }
}

/**
 * Get single news article with full content
 */
export async function getNewsArticle(id: string): Promise<NewsArticle> {
  try {
    console.log(`📰 Fetching news article ${id}...`)
    
    const response = await apiClient.get<{ success: boolean; data: any }>(`/news/${id}`)
    
    if (isApiSuccess(response)) {
      console.log('✅ Fetched news article')
      return transformNewsArticle(response.data.data)
    } else {
      throw new Error(response.error || 'Failed to fetch news article')
    }
  } catch (error) {
    console.error('❌ Error fetching news article:', error)
    throw error
  }
}

/**
 * Search news articles
 */
export async function searchNews(
  query: string, 
  category?: string, 
  page = 1, 
  limit = 20
): Promise<{
  articles: NewsArticle[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
  }
}> {
  try {
    console.log(`🔍 Searching news for "${query}"...`)
    
    const params = new URLSearchParams({
      q: query,
      page: page.toString(),
      limit: limit.toString()
    })
    
    if (category) {
      params.append('category', category)
    }
    
    const response = await apiClient.get<NewsApiResponse>(`/news/search?${params}`)
    
    if (isApiSuccess(response)) {
      console.log(`✅ Found ${response.data.data.length} articles`)
      return {
        articles: response.data.data.map(transformNewsArticle),
        pagination: {
          currentPage: response.data.pagination?.currentPage || 1,
          totalPages: response.data.pagination?.totalPages || 1,
          totalItems: response.data.pagination?.totalItems || 0
        }
      }
    } else {
      throw new Error(response.error || 'Failed to search news')
    }
  } catch (error) {
    console.error('❌ Error searching news:', error)
    throw error
  }
}

/**
 * Manually refresh news from MarketAux API
 */
export async function refreshNews(): Promise<{
  saved: number
  skipped: number
  errors: number
  total: number
}> {
  try {
    console.log('🔄 Triggering manual news refresh...')
    
    const response = await apiClient.post<{
      success: boolean
      results: {
        saved: number
        skipped: number
        errors: number
        total: number
      }
    }>('/news/refresh')
    
    if (isApiSuccess(response)) {
      console.log('✅ News refresh completed:', response.data.results)
      return response.data.results
    } else {
      throw new Error(response.error || 'Failed to refresh news')
    }
  } catch (error) {
    console.error('❌ Error refreshing news:', error)
    throw error
  }
}

/**
 * Get news statistics and summary
 */
export async function getNewsStats(): Promise<{
  totalNews: number
  todayNews: number
  categoryBreakdown: { _id: string; count: number }[]
  lastUpdated: string | null
}> {
  try {
    const response = await apiClient.get<{
      success: boolean
      data: {
        totalNews: number
        todayNews: number
        categoryBreakdown: { _id: string; count: number }[]
        lastUpdated: string | null
      }
    }>('/news/stats/summary')
    
    if (isApiSuccess(response)) {
      return response.data.data
    } else {
      throw new Error(response.error || 'Failed to fetch news statistics')
    }
  } catch (error) {
    console.error('❌ Error fetching news stats:', error)
    throw error
  }
}
