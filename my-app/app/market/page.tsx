"use client"

import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getMarketData, getAllSecurities, getSecuritiesByFilter, searchSecurities } from "@/lib/services/market-service"
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, RefreshCw, Search, Filter } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import type { MarketData, StockHolding } from "@/lib/types"

export default function MarketPage() {
  const router = useRouter()
  const { state } = useApp()
  const { language } = state.settings
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState<string>("all")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [shariahOnly, setShariahOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  
  // API data state
  const [marketData, setMarketData] = useState<MarketData | null>(null)
  const [securities, setSecurities] = useState<StockHolding[]>([])
  const [holdings, setHoldings] = useState<StockHolding[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Load data from API
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const [marketDataRes, securitiesRes] = await Promise.all([
          getMarketData(),
          getAllSecurities()
        ])
        setMarketData(marketDataRes)
        setSecurities(securitiesRes)
        // Filter holdings from securities that have shares > 0
        setHoldings(securitiesRes.filter((s) => s.shares && s.shares > 0))
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load market data')
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  const totalValue = holdings.reduce((sum, h) => sum + (h.shares || 0) * h.currentPrice, 0)
  const totalGain = holdings.reduce((sum, h) => sum + (h.shares || 0) * (h.currentPrice - (h.avgCost || 0)), 0)
  const totalGainPercent = holdings.length > 0 ? (totalGain / holdings.reduce((sum, h) => sum + (h.shares || 0) * (h.avgCost || 0), 0)) * 100 : 0

  // Get unique sectors from API data
  const sectors = useMemo(() => {
    const uniqueSectors = new Set(securities.map((s) => s.sector))
    return Array.from(uniqueSectors).sort()
  }, [securities])

  // Filter securities from API data
  const filteredSecurities = useMemo(() => {
    return securities.filter((security) => {
      const matchesSearch =
        searchQuery === "" ||
        security.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        security.nameAr.includes(searchQuery) ||
        security.symbol.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesSector = selectedSector === "all" || security.sector === selectedSector
      const matchesType = selectedType === "all" || security.type === selectedType
      const matchesShariah = !shariahOnly || security.shariahCompliant

      return matchesSearch && matchesSector && matchesType && matchesShariah
    })
  }, [securities, searchQuery, selectedSector, selectedType, shariahOnly])

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      const [marketDataRes, securitiesRes] = await Promise.all([
        getMarketData(),
        getAllSecurities()
      ])
      setMarketData(marketDataRes)
      setSecurities(securitiesRes)
      setHoldings(securitiesRes.filter((s) => s.shares && s.shares > 0))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh market data')
    } finally {
      setIsRefreshing(false)
    }
  }

  const getTypeLabel = (type: string) => {
    if (language === "ar") {
      return type === "stock" ? "سهم" : type === "etf" ? "صندوق متداول" : "صندوق"
    }
    return type === "ar" ? "Stock" : type === "etf" ? "ETF" : "Fund"
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="mb-1 text-3xl font-bold text-foreground">
              {language === "ar" ? "السوق السعودي" : "Saudi Market"}
            </h1>
            <p className="text-sm text-muted-foreground">
              {language === "ar" ? "تحديث مباشر من تداول" : "Live from Tadawul"}
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`h-5 w-5 ${isRefreshing ? "animate-spin" : ""}`} />
          </Button>
        </div>

        {/* Loading State */}
        {loading && (
          <Card className="mb-6 p-6">
            <div className="animate-pulse">
              <div className="mb-2 h-4 w-20 rounded bg-muted"></div>
              <div className="mb-2 h-8 w-32 rounded bg-muted"></div>
              <div className="h-3 w-24 rounded bg-muted"></div>
            </div>
          </Card>
        )}

        {/* Error State */}
        {error && (
          <Card className="mb-6 p-6">
            <div className="text-red-600">
              <p className="font-semibold">Error loading market data</p>
              <p className="text-sm">{error}</p>
            </div>
          </Card>
        )}

        {/* TASI Index */}
        {marketData && !loading && (
          <Card className="mb-6 p-6">
            <div className="mb-2 text-sm text-muted-foreground">{language === "ar" ? "مؤشر تاسي" : "TASI Index"}</div>
            <div className="mb-2 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">{marketData.tasi.value.toLocaleString()}</span>
              <div
                className={`flex items-center gap-1 text-sm font-semibold ${
                  marketData.tasi.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {marketData.tasi.change >= 0 ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                <span>
                  {marketData.tasi.change >= 0 ? "+" : ""}
                  {marketData.tasi.change.toFixed(2)} ({marketData.tasi.changePercent >= 0 ? "+" : ""}
                  {marketData.tasi.changePercent.toFixed(2)}%)
                </span>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {language === "ar" ? "آخر تحديث: " : "Last updated: "}
              {new Date(marketData.lastUpdated).toLocaleTimeString(language === "ar" ? "ar-SA" : "en-US")}
            </div>
          </Card>
        )}

        {/* Portfolio Summary */}
        {holdings.length > 0 && (
          <Card className="mb-6 p-6">
            <h2 className="mb-4 text-lg font-semibold text-card-foreground">
              {language === "ar" ? "ملخص المحفظة" : "Your Holdings"}
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{language === "ar" ? "القيمة الإجمالية" : "Total Value"}</span>
                <span className="text-xl font-bold text-foreground">
                  {totalValue.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">{language === "ar" ? "الربح/الخسارة" : "Total Gain/Loss"}</span>
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${totalGain >= 0 ? "text-green-600" : "text-red-600"}`}>
                    {totalGain >= 0 ? "+" : ""}
                    {totalGain.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                  </span>
                  <span className={`text-sm ${totalGain >= 0 ? "text-green-600" : "text-red-600"}`}>
                    ({totalGain >= 0 ? "+" : ""}
                    {totalGainPercent.toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Search and Filters */}
        <div className="mb-6 space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={language === "ar" ? "ابحث عن الأسهم أو الصناديق..." : "Search stocks or funds..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {showFilters && (
            <Card className="p-4">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {language === "ar" ? "القطاع" : "Sector"}
                  </label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">{language === "ar" ? "جميع القطاعات" : "All Sectors"}</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {language === "ar" ? "النوع" : "Type"}
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="all">{language === "ar" ? "جميع الأنواع" : "All Types"}</option>
                    <option value="stock">{language === "ar" ? "أسهم" : "Stocks"}</option>
                    <option value="etf">{language === "ar" ? "صناديق متداولة" : "ETFs"}</option>
                    <option value="fund">{language === "ar" ? "صناديق" : "Funds"}</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="shariah"
                    checked={shariahOnly}
                    onChange={(e) => setShariahOnly(e.target.checked)}
                    className="h-4 w-4 rounded border-input"
                  />
                  <label htmlFor="shariah" className="text-sm text-foreground">
                    {language === "ar" ? "متوافق مع الشريعة فقط" : "Shariah-compliant only"}
                  </label>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* All Securities */}
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">
              {language === "ar" ? "جميع الأوراق المالية" : "All Securities"}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredSecurities.length} {language === "ar" ? "نتيجة" : "results"}
            </span>
          </div>

          <div className="space-y-3">
            {filteredSecurities.map((security) => {
              const isHolding = holdings.some((h) => h.symbol === security.symbol)

              return (
                <Card key={security.symbol} className={`p-4 ${isHolding ? "border-primary" : ""}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="font-semibold text-card-foreground">
                          {language === "ar" ? security.nameAr : security.nameEn}
                        </span>
                        {isHolding && (
                          <span className="rounded bg-primary/10 px-2 py-0.5 text-xs text-primary">
                            {language === "ar" ? "مملوك" : "Owned"}
                          </span>
                        )}
                      </div>
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded bg-muted px-2 py-0.5">{security.symbol}</span>
                        <span>{language === "ar" ? security.sectorAr : security.sector}</span>
                        <span>{getTypeLabel(security.type)}</span>
                        {security.shariahCompliant && (
                          <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-600">
                            {language === "ar" ? "شرعي" : "Shariah"}
                          </span>
                        )}
                      </div>
                      {security.marketCap && (
                        <div className="text-xs text-muted-foreground">
                          {language === "ar" ? "القيمة السوقية: " : "Market Cap: "}
                          {(security.marketCap / 1000).toFixed(1)}B SAR
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="mb-1 font-semibold text-card-foreground">
                        {security.currentPrice.toFixed(2)} {language === "ar" ? "ريال" : "SAR"}
                      </div>
                      <div
                        className={`flex items-center justify-end gap-1 text-xs font-semibold ${
                          security.change24h >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {security.change24h >= 0 ? (
                          <TrendingUp className="h-3 w-3" />
                        ) : (
                          <TrendingDown className="h-3 w-3" />
                        )}
                        <span>
                          {security.change24h >= 0 ? "+" : ""}
                          {security.changePercent.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-xl border border-border bg-muted/50 p-4 text-center text-sm text-muted-foreground">
          <p>
            {language === "ar"
              ? "البيانات للأغراض التوضيحية فقط. في الإنتاج، سيتم دمج بيانات السوق في الوقت الفعلي من تداول."
              : "Data is for demonstration purposes. In production, real-time market data from Tadawul would be integrated."}
          </p>
        </div>
      </div>
      <BottomNav />
    </div>
  )
}
