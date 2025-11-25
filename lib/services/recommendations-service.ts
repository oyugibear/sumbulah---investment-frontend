import type { FinancialHealthScore, FinancialRecommendation, AppState } from "../types"

/**
 * Financial Recommendations Service
 * Generates AI-ready analysis and recommendations based on user's financial data
 * This can be enhanced with real AI API calls (e.g., Claude, GPT-4)
 */

export function calculateFinancialHealthScore(state: AppState): FinancialHealthScore {
  const totalInvested = state.totalInvested
  const monthlySpending = calculateMonthlySpending(state)
  const monthlyIncome = 10000 // Mock salary
  const savingsRate = Math.min(((monthlyIncome - monthlySpending) / monthlyIncome) * 100, 100)

  // Calculate diversification (0-100)
  const portfolioAssetCount = state.selectedGoals.length || 3
  const diversification = Math.min((portfolioAssetCount / 4) * 100, 100)

  // Calculate emergency fund (0-100)
  const emergencyFundTarget = monthlySpending * 3
  const emergencyFund = Math.min((totalInvested / emergencyFundTarget) * 100, 100)

  // Calculate investment performance (0-100)
  const investmentPerformance = Math.random() * 30 + 60 // Baseline 60-90% (mock)

  // Calculate zakat compliance (0-100)
  const zakatCompliance = 85 // Mock score

  // Calculate budget adherence (0-100)
  const budgetAdherence = 87 // Mock score

  const overall = Math.round(
    (savingsRate * 0.2 +
      diversification * 0.15 +
      emergencyFund * 0.2 +
      investmentPerformance * 0.2 +
      zakatCompliance * 0.15 +
      budgetAdherence * 0.1) /
      100,
  )

  return {
    overall: Math.min(overall, 100),
    savingsRate: Math.round(savingsRate),
    diversification: Math.round(diversification),
    emergencyFund: Math.round(emergencyFund),
    investmentPerformance: Math.round(investmentPerformance),
    zakatCompliance: Math.round(zakatCompliance),
    budgetAdherence: Math.round(budgetAdherence),
  }
}

export function generateRecommendations(state: AppState, healthScore: FinancialHealthScore): FinancialRecommendation[] {
  const recommendations: FinancialRecommendation[] = []
  const monthlySpending = calculateMonthlySpending(state)
  const monthlyIncome = 10000

  // Savings rate recommendation
  if (healthScore.savingsRate < 20) {
    recommendations.push({
      id: "rec-savings",
      priority: "high",
      category: "savings",
      title: "Increase Your Savings Rate",
      titleAr: "زيادة معدل الادخار الخاص بك",
      description: `Your current savings rate is ${healthScore.savingsRate}%. Consider adjusting your budget or increasing payday savings to reach at least 20%.`,
      descriptionAr: `معدل ادخارك الحالي هو ${healthScore.savingsRate}٪. حاول تعديل ميزانيتك أو زيادة ادخار راتبك لتحقيق 20٪ على الأقل.`,
      actionLabel: "Adjust Budget",
    })
  }

  // Emergency fund recommendation
  if (healthScore.emergencyFund < 50) {
    recommendations.push({
      id: "rec-emergency",
      priority: "high",
      category: "emergency",
      title: "Build Your Emergency Fund",
      titleAr: "بناء صندوق الطوارئ الخاص بك",
      description: `You should have 3 months of expenses saved. Currently at ${Math.round(healthScore.emergencyFund)}% of target. Prioritize this goal.`,
      descriptionAr: `يجب أن يكون لديك 3 أشهر من النفقات المدخرة. حالياً عند ${Math.round(healthScore.emergencyFund)}٪ من الهدف. اجعل هذا الهدف أولويتك.`,
      actionLabel: "View Emergency Fund Goal",
    })
  }

  // Diversification recommendation
  if (healthScore.diversification < 60) {
    recommendations.push({
      id: "rec-diversify",
      priority: "medium",
      category: "diversification",
      title: "Diversify Your Portfolio",
      titleAr: "تنويع محفظتك",
      description: `Consider adding more asset classes. ETFs and mutual funds can provide instant diversification with lower investment.`,
      descriptionAr: `فكر في إضافة فئات أصول أخرى. يمكن للصناديق المتداولة والصناديق المشتركة توفير تنويع فوري برأس مال أقل.`,
      actionLabel: "Explore Funds",
    })
  }

  // Performance recommendation
  if (healthScore.investmentPerformance < 65) {
    recommendations.push({
      id: "rec-performance",
      priority: "medium",
      category: "performance",
      title: "Review Your Investment Strategy",
      titleAr: "مراجعة استراتيجية الاستثمار الخاصة بك",
      description: `Your portfolio's recent performance is below expectations. Consider reviewing your asset allocation and time horizon.`,
      descriptionAr: `أداء محفظتك الحديثة أقل من التوقعات. تأكد من مراجعة توزيع أصولك والأفق الزمني.`,
    })
  }

  // Zakat reminder
  if (healthScore.zakatCompliance < 100) {
    recommendations.push({
      id: "rec-zakat",
      priority: "high",
      category: "zakat",
      title: "Zakat Calculation Reminder",
      titleAr: "تذكير بحساب الزكاة",
      description: `Review your zakat obligations. Your current portfolio value requires zakat calculation for the Hijri year.`,
      descriptionAr: `راجع التزاماتك تجاه الزكاة. تتطلب قيمة محفظتك الحالية حساب الزكاة للسنة الهجرية.`,
      actionLabel: "View Zakat Calculator",
    })
  }

  return recommendations
}

function calculateMonthlySpending(state: AppState): number {
  const recentTransactions = state.transactions.slice(0, 30) // Last 30 days
  const total = recentTransactions.reduce((sum, t) => sum + t.amount, 0)
  return Math.round((total / 30) * 30) // Annualize to monthly
}
