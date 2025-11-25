// This allows easy swapping between mock and real APIs
import type { StockHolding, MarketData } from "../types"
import { MOCK_MARKET_DATA, ALL_SAUDI_SECURITIES } from "../mock-data"

/**
 * Market Service - Data layer abstraction
 * Replace these functions with real API calls when ready
 * Example: const response = await fetch('https://api.example.com/market')
 */

export async function getMarketData(): Promise<MarketData> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
  return MOCK_MARKET_DATA
}

export async function getAllSecurities(): Promise<StockHolding[]> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 800))
  return ALL_SAUDI_SECURITIES
}

export async function getSecuritiesByFilter(filters: {
  sector?: string
  type?: "stock" | "etf" | "fund"
  shariahCompliant?: boolean
}): Promise<StockHolding[]> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 600))
  let results = ALL_SAUDI_SECURITIES

  if (filters.sector) {
    results = results.filter((s) => s.sector === filters.sector)
  }
  if (filters.type) {
    results = results.filter((s) => s.type === filters.type)
  }
  if (filters.shariahCompliant !== undefined) {
    results = results.filter((s) => s.shariahCompliant === filters.shariahCompliant)
  }

  return results
}

export async function searchSecurities(query: string): Promise<StockHolding[]> {
  // Mock implementation - replace with real API
  await new Promise((resolve) => setTimeout(resolve, 400))
  const lowerQuery = query.toLowerCase()

  return ALL_SAUDI_SECURITIES.filter(
    (s) => s.nameEn.toLowerCase().includes(lowerQuery) || s.nameAr.includes(query) || s.symbol.includes(query),
  )
}
