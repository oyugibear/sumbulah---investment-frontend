import type { NewsArticle } from "../types"

// Mock news data
const MOCK_NEWS: NewsArticle[] = [
  {
    id: "news1",
    title: "Saudi Aramco Reports Record Q3 Profits",
    titleAr: "أرامكو السعودية تحقق أرباح قياسية",
    summary:
      "Saudi Aramco announced strong Q3 earnings driven by stable oil prices and increased production. The company declared a 15% dividend to shareholders.",
    summaryAr:
      "أعلنت أرامكو السعودية عن أرباح قوية في الربع الثالث بفضل أسعار النفط المستقرة وزيادة الإنتاج. أعلنت الشركة عن توزيع أرباح بنسبة 15٪ على المساهمين.",
    source: "Saudi Arabia Ministry of Energy",
    category: "markets",
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 9,
    url: "https://example.com/news/1",
  },
  {
    id: "news2",
    title: "TASI Index Reaches New 12-Month High",
    titleAr: "مؤشر تاسي يصل إلى أعلى مستوى في 12 شهراً",
    summary:
      "The Tadawul All Share Index (TASI) has reached its highest level in 12 months, driven by gains in banking and energy stocks.",
    summaryAr: "وصل مؤشر تاسي إلى أعلى مستوى له في 12 شهراً، مدفوعاً بمكاسب الأسهم المصرفية والطاقة.",
    source: "Tadawul Saudi Stock Exchange",
    category: "markets",
    date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 8,
    url: "https://example.com/news/2",
  },
  {
    id: "news3",
    title: "Al Rajhi Bank Launches Islamic Digital Banking",
    titleAr: "البنك الراجحي يطلق خدمات البنوك الرقمية الإسلامية",
    summary:
      "Al Rajhi Bank has launched a new digital banking platform with enhanced Shariah-compliant features and improved user experience.",
    summaryAr: "أطلق البنك الراجحي منصة بنكية رقمية جديدة بميزات متوافقة مع الشريعة محسّنة وتجربة مستخدم محسّنة.",
    source: "Al Rajhi Bank",
    category: "personal_finance",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 7,
    url: "https://example.com/news/3",
  },
  {
    id: "news4",
    title: "Saudi Arabia Issues New Sukuk Worth 5 Billion SAR",
    titleAr: "السعودية تصدر صكوكاً جديدة بقيمة 5 مليار ريال",
    summary:
      "The Saudi government has announced the issuance of government Sukuk to fund infrastructure projects under Vision 2030.",
    summaryAr: "أعلنت الحكومة السعودية عن إصدار صكوك حكومية لتمويل مشاريع البنية التحتية في إطار رؤية 2030.",
    source: "Saudi Ministry of Finance",
    category: "regulations",
    date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 8,
    url: "https://example.com/news/4",
  },
  {
    id: "news5",
    title: "SABIC Stock Rises on Petrochemical Demand",
    titleAr: "أسهم سابك ترتفع بسبب الطلب على البتروكيماويات",
    summary: "SABIC shares surged following strong demand for petrochemical products from Asian markets.",
    summaryAr: "ارتفعت أسهم سابك بعد الطلب القوي على منتجات البتروكيماويات من الأسواق الآسيوية.",
    source: "SABIC",
    category: "markets",
    date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 6,
    url: "https://example.com/news/5",
  },
  {
    id: "news6",
    title: "Saudi Tourism Authority Reports 30% Growth",
    titleAr: "هيئة السياحة السعودية تعلن نمو 30٪",
    summary: "Domestic tourism in Saudi Arabia has grown 30% year-over-year, boosting hospitality and retail sectors.",
    summaryAr: "نما السياحة المحلية في السعودية بنسبة 30٪ على أساس سنوي، مما عزز قطاعات الضيافة والتجزئة.",
    source: "Saudi Tourism Authority",
    category: "regulations",
    date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    relevanceScore: 5,
    url: "https://example.com/news/6",
  },
]

/**
 * News Service - Data layer abstraction
 * Replace these functions with real API calls when ready
 * Example: const response = await fetch('https://newsapi.com/v2/everything?q=saudi')
 */

export async function getFinanceNews(): Promise<NewsArticle[]> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 800))
  return MOCK_NEWS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getNewsByCategory(category: string): Promise<NewsArticle[]> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 600))
  return MOCK_NEWS.filter((article) => article.category === category).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export async function getRelevantNews(): Promise<NewsArticle[]> {
  // Mock implementation - in real version, this would filter based on user's portfolio
  await new Promise((resolve) => setTimeout(resolve, 800))
  return MOCK_NEWS.filter((article) => article.relevanceScore >= 7).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}
