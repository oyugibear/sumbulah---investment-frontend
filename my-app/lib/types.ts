// Core types for Sunbullah app

export type Language = "en" | "ar"

export type InvestmentOption = "savings" | "investment"

export type TransactionCategory =
  | "Coffee"
  | "Restaurant"
  | "Entertainment"
  | "Groceries"
  | "Fuel"
  | "Ride"
  | "Pharmacy"
  | "Other"

export type LinkedSource = "MockBank" | "MockWallet" | null

export type RoundUpRule = 1 | 5 | 10

export type PaydaySavePercent = 0 | 1 | 2 | 5

export interface Transaction {
  id: string
  date: string
  merchant: string
  category: TransactionCategory
  amount: number // in SAR
  roundUp?: number
}

export interface CategoryBoost {
  category: "Coffee" | "Restaurant" | "Entertainment"
  addSar: number
}

export interface Goal {
  id: string
  name: string
  target: number
  progress: number
}

export interface Portfolio {
  id: string // Changed from PortfolioId to string
  name: string
  nameAr: string
  risk: 1 | 2 | 3
  description: string
  descriptionAr: string
  allocations: Array<{
    asset: string
    assetAr: string
    percentage: number
  }>
  timeHorizon: string
  timeHorizonAr: string
}

// Portfolio types - Re-export from portfolio service for consistency
export type {
  Investment,
  Activity as UserActivity,
  Portfolio as DatabasePortfolio,
  PortfolioStats,
  CreatePortfolioRequest,
  CreateInvestmentRequest,
  CreateActivityRequest
} from './services/portfolio-service'

// Additional portfolio-related types for UI components
export interface PortfolioSummary {
  totalValue: number
  totalInvested: number
  totalGain: number
  gainPercentage: number
  lastUpdated: string
}

export interface InvestmentType {
  id: string
  name: string
  nameAr: string
  description: string
  descriptionAr: string
  riskLevel: 1 | 2 | 3 | 4 | 5
  expectedReturn: number
  minimumAmount: number
  shariahCompliant: boolean
}

export interface PortfolioAllocation {
  asset_type: string
  asset_name: string
  percentage: number
  amount: number
  current_value: number
  gain_loss: number
  gain_loss_percentage: number
}

export interface Settings {
  language: Language
  rtl: boolean
  darkMode: boolean
  roundUpTo: RoundUpRule
  weeklyCapSar: number
  discretionaryOnly: boolean
  paydaySavePercent: PaydaySavePercent
  boosts: CategoryBoost[]
  linkedSource: LinkedSource
  investmentOption: InvestmentOption
}

export interface AppState {
  settings: Settings
  transactions: Transaction[]
  goals: Goal[]
  totalInvested: number
  thisWeekRoundUps: number
  nextAutoDeposit: {
    date: string
    amount: number
  }
  onboardingComplete: boolean
  selectedGoals: string[]
  savingsBalance: number
  investmentBalance: number
  lastPayoutDate: string | null
}

export interface Article {
  id: string
  title: string
  titleAr: string
  content: string
  contentAr: string
  readProgress: number
}

export interface StockHolding {
  symbol: string
  nameEn: string
  nameAr: string
  sector: string
  sectorAr: string
  type: "stock" | "etf" | "fund"
  shares?: number
  avgCost?: number
  currentPrice: number
  change24h: number
  changePercent: number
  marketCap?: number
  volume: number
  shariahCompliant: boolean
}

export interface MarketData {
  tasi: {
    value: number
    change: number
    changePercent: number
  }
  lastUpdated: string
}

export interface ZakatData {
  totalAssets: number // Total zakatable assets in SAR
  nisabThreshold: number // Current nisab threshold in SAR (based on gold/silver)
  zakatDue: number // 2.5% of assets above nisab
  lastCalculated: string
  hijriYear: string
  paymentHistory: ZakatPayment[]
}

export interface ZakatPayment {
  id: string
  amount: number
  date: string
  hijriDate: string
  method: "auto" | "manual"
  status: "paid" | "pending"
}

export interface BudgetCategory {
  id: string
  name: string
  nameAr: string
  limit: number
  spent: number
  period: "monthly" | "weekly"
}

export interface BudgetData {
  categories: BudgetCategory[]
  totalBudget: number
  totalSpent: number
  month: string
}

export interface NewsArticle {
  id: string
  title: string
  titleAr: string
  summary: string
  description: string
  descriptionAr?: string
  urlToImage?: string | null
  summaryAr: string
  source: string
  sentiment?: string
  readTime?: number
  tags?: string[]
  author?: string | null
  category: "markets" | "crypto" | "personal_finance" | "regulations"
  date: string
  relevanceScore: number // 1-10, how relevant to user's portfolio
  url: string
}

export interface FinancialHealthScore {
  overall: number // 0-100
  savingsRate: number
  diversification: number
  emergencyFund: number
  investmentPerformance: number
  zakatCompliance: number
  budgetAdherence: number
}

export interface FinancialRecommendation {
  id: string
  priority: "high" | "medium" | "low"
  category: "savings" | "diversification" | "emergency" | "performance" | "zakat"
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  action?: string
  actionLabel?: string
}

export interface Quiz {
  id: string
  title: string
  titleAr: string
  module: "shariah" | "budgeting" | "investing" | "zakat"
  questions: QuizQuestion[]
  completedBy: string[] // User IDs
}

export interface QuizQuestion {
  id: string
  question: string
  questionAr: string
  options: Array<{
    id: string
    text: string
    textAr: string
    isCorrect: boolean
  }>
}

export interface QuizResult {
  quizId: string
  score: number
  completedAt: string
  timeSpent: number // in seconds
}
