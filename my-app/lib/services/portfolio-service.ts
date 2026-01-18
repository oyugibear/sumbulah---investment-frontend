import { apiClient, isApiSuccess } from "../api/client"

export interface Investment {
  amount: number
  date: string
  investment_type: string
  current_investment_value?: number
  target_value?: number
  _id?: string
}

export interface Activity {
  activity_title: string
  activity_type: string
  activity_date: string
  details?: string
  _id?: string
}

export interface Portfolio {
  _id: string
  user_id: string
  investments: Investment[]
  recent_user_activity: Activity[]
  createdAt: string
  updatedAt: string
}

export interface PortfolioStats {
  totalInvestments: number
  totalCurrentValue: number
  totalTargetValue: number
  profit: number
  profitPercentage: number
  investmentCount: number
  lastActivity: Activity | null
}

export interface CreatePortfolioRequest {
  investments?: Investment[]
  recent_user_activity?: Activity[]
}

export interface CreateInvestmentRequest {
  amount: number
  investment_type: string
  current_investment_value?: number
  target_value?: number
  date?: string
}

export interface CreateActivityRequest {
  activity_title: string
  activity_type: string
  details?: string
  activity_date?: string
}

/**
 * Portfolio Service - Handles portfolio-related API operations
 */

export async function createPortfolio(portfolioData: CreatePortfolioRequest): Promise<Portfolio> {
  const response = await apiClient.post<{data: Portfolio, message: string, status: string}>('/portfolios/create', portfolioData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to create portfolio')
  }
}

export async function getMyPortfolio(): Promise<Portfolio> {
  const response = await apiClient.get<{data: Portfolio, message: string, status: string}>('/portfolios/my')
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch your portfolio')
  }
}

export async function getPortfolio(portfolioId: string): Promise<Portfolio> {
  const response = await apiClient.get<{data: Portfolio, message: string, status: string}>(`/portfolios/${portfolioId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch portfolio')
  }
}

export async function getUserPortfolio(userId: string): Promise<Portfolio> {
  const response = await apiClient.get<{data: Portfolio, message: string, status: string}>(`/portfolios/user/${userId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch user portfolio')
  }
}

export async function updatePortfolio(portfolioId: string, portfolioData: Partial<Portfolio>): Promise<Portfolio> {
  const response = await apiClient.put<{data: Portfolio, message: string, status: string}>(`/portfolios/${portfolioId}`, portfolioData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to update portfolio')
  }
}

export async function deletePortfolio(portfolioId: string): Promise<Portfolio> {
  const response = await apiClient.delete<{data: Portfolio, message: string, status: string}>(`/portfolios/${portfolioId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to delete portfolio')
  }
}

export async function addInvestment(portfolioId: string, investmentData: CreateInvestmentRequest): Promise<Portfolio> {
  const response = await apiClient.post<{data: Portfolio, message: string, status: string}>(`/portfolios/${portfolioId}/investments`, investmentData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to add investment')
  }
}

export async function addActivity(portfolioId: string, activityData: CreateActivityRequest): Promise<Portfolio> {
  const response = await apiClient.post<{data: Portfolio, message: string, status: string}>(`/portfolios/${portfolioId}/activities`, activityData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to add activity')
  }
}

export async function getPortfolioStats(portfolioId: string): Promise<PortfolioStats> {
  const response = await apiClient.get<{data: PortfolioStats, message: string, status: string}>(`/portfolios/${portfolioId}/stats`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to get portfolio statistics')
  }
}