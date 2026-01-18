import type { StockHolding, MarketData } from "../types"
import { apiClient, isApiSuccess, handleApiError } from "../api/client"

/**
 * Market Service - Data layer abstraction
 * Connects directly to the API server
 */

export async function getMarketData(): Promise<MarketData> {
  const response = await apiClient.get<MarketData>('/market/data')
  
  if (isApiSuccess(response)) {
    return response.data
  } else {
    throw new Error(response.error || 'Failed to fetch market data')
  }
}

export async function getAllSecurities(): Promise<StockHolding[]> {
  const response = await apiClient.get<StockHolding[]>('/market/securities')
  
  if (isApiSuccess(response)) {
    return response.data
  } else {
    throw new Error(response.error || 'Failed to fetch securities')
  }
}

export async function getSecuritiesByFilter(filters: {
  sector?: string
  type?: "stock" | "etf" | "fund"
  shariahCompliant?: boolean
}): Promise<StockHolding[]> {
  const response = await apiClient.get<StockHolding[]>('/market/securities/filter', filters)
  
  if (isApiSuccess(response)) {
    return response.data
  } else {
    throw new Error(response.error || 'Failed to fetch filtered securities')
  }
}

export async function searchSecurities(query: string): Promise<StockHolding[]> {
  const response = await apiClient.get<StockHolding[]>('/market/securities/search', { query })
  
  if (isApiSuccess(response)) {
    return response.data
  } else {
    throw new Error(response.error || 'Failed to search securities')
  }
}
