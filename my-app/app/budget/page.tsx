"use client"
import { useApp } from "@/lib/context/app-context"
import { useTranslation } from "@/lib/hooks/use-translation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { BottomNav } from "@/components/bottom-nav"
import { useState, useEffect } from "react"
import { PlusCircle, Wallet, TrendingUp, TrendingDown, AlertTriangle, Target, Calendar } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { getAuthState, getCurrentUserId, debugAuthStatus } from "@/lib/utils/auth"

// Import portfolio service to get user investment data
import { 
  getMyPortfolio, 
  getPortfolioStats,
  type Portfolio,
  type PortfolioStats,
  type Investment
} from "@/lib/services/portfolio-service"

const COLORS = ["#059669", "#10b981", "#34d399", "#6ee7b7", "#d1fae5", "#ecfdf5"]

// Budget categories for Saudi market
const BUDGET_CATEGORIES = [
  { id: "housing", nameEn: "Housing & Rent", nameAr: "الإسكان والإيجار", defaultPercent: 30 },
  { id: "food", nameEn: "Food & Groceries", nameAr: "الطعام والبقالة", defaultPercent: 15 },
  { id: "transportation", nameEn: "Transportation", nameAr: "المواصلات", defaultPercent: 15 },
  { id: "utilities", nameEn: "Utilities", nameAr: "الخدمات العامة", defaultPercent: 10 },
  { id: "healthcare", nameEn: "Healthcare", nameAr: "الرعاية الصحية", defaultPercent: 5 },
  { id: "entertainment", nameEn: "Entertainment", nameAr: "الترفيه", defaultPercent: 5 },
  { id: "education", nameEn: "Education", nameAr: "التعليم", defaultPercent: 5 },
  { id: "savings", nameEn: "Savings & Investment", nameAr: "الادخار والاستثمار", defaultPercent: 10 },
  { id: "other", nameEn: "Other Expenses", nameAr: "مصروفات أخرى", defaultPercent: 5 }
]

// Helper function to format currency
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: 'SAR',
    minimumFractionDigits: 2,
  }).format(amount);
}

// Interfaces for budget data
interface BudgetCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  allocated: number;
  spent: number;
  remaining: number;
  percentage: number;
}

interface BudgetOverview {
  totalIncome: number;
  totalAllocated: number;
  totalSpent: number;
  totalRemaining: number;
  categories: BudgetCategory[];
  investmentAllocation: number;
  monthlyInvestmentTarget: number;
}



export default function BudgetPage() {
  const { state } = useApp()
  const t = useTranslation()

  // State management
  const [budgetData, setBudgetData] = useState<BudgetOverview | null>(null)
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null)
  const [portfolioStats, setPortfolioStats] = useState<PortfolioStats | null>(null)
  const [categories, setCategories] = useState<BudgetCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Budget setup state
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [isSettingUpBudget, setIsSettingUpBudget] = useState(false)
  const [showBudgetSetup, setShowBudgetSetup] = useState(false)

  // Form state
  const [newExpense, setNewExpense] = useState({
    amount: "",
    category: "",
    description: "",
    notes: ""
  })

  // Fetch data on component mount
  useEffect(() => {
    // Debug authentication status
    debugAuthStatus()
    
    const authState = getAuthState()
    if (!authState.isAuthenticated) {
      const errorMsg = state.settings.language === "ar" ? 'يرجى تسجيل الدخول لعرض ميزانيتك' : 'Please log in to view your budget'
      setError(errorMsg)
      setLoading(false)
      toast({
        title: state.settings.language === "ar" ? "تسجيل الدخول مطلوب" : "Authentication Required",
        description: state.settings.language === "ar" ? "يرجى تسجيل الدخول للوصول إلى ميزانيتك." : "Please log in to access your budget.",
        variant: "destructive",
      })
      return
    }

    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Fetch portfolio data to understand user's financial profile
      const [portfolio, stats] = await Promise.all([
        getMyPortfolio(),
        getMyPortfolio().then(p => p?._id ? getPortfolioStats(p._id) : null)
      ])
      
      setPortfolioData(portfolio)
      setPortfolioStats(stats)

      // Create budget based on portfolio data
      if (portfolio && stats) {
        const estimatedMonthlyIncome = calculateEstimatedIncome(portfolio, stats)
        const generatedBudget = createBudgetFromPortfolio(estimatedMonthlyIncome, stats)
        setBudgetData(generatedBudget)
        setCategories(generatedBudget.categories)
      } else {
        // Show budget setup if no portfolio data
        setShowBudgetSetup(true)
      }

    } catch (error) {
      console.error('Error fetching data:', error)
      const errorMsg = state.settings.language === "ar" ? 'فشل في تحميل البيانات. يرجى المحاولة مرة أخرى.' : 'Failed to fetch data. Please try again.'
      setError(errorMsg)
      toast({
        title: state.settings.language === "ar" ? "خطأ" : "Error",
        description: state.settings.language === "ar" ? "فشل في تحميل البيانات. يرجى المحاولة مرة أخرى." : "Failed to fetch data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  // Calculate estimated monthly income based on investment patterns
  const calculateEstimatedIncome = (portfolio: Portfolio, stats: PortfolioStats): number => {
    // If user has investments, estimate income based on investment capacity
    if (stats.totalInvestments > 0) {
      // Assume investments are 10-20% of income (conservative estimate)
      return Math.max(stats.totalInvestments * 5, 5000) // Minimum 5000 SAR
    }
    return 8000 // Default reasonable income for Saudi market
  }

  // Create budget allocation based on portfolio data and best practices
  const createBudgetFromPortfolio = (income: number, stats: PortfolioStats): BudgetOverview => {
    const categories: BudgetCategory[] = BUDGET_CATEGORIES.map(cat => {
      const allocated = Math.round(income * (cat.defaultPercent / 100))
      return {
        id: cat.id,
        nameEn: cat.nameEn,
        nameAr: cat.nameAr,
        allocated,
        spent: 0, // Initialize with no spending
        remaining: allocated,
        percentage: cat.defaultPercent
      }
    })

    // Adjust savings/investment category based on actual portfolio
    const savingsCategory = categories.find(c => c.id === 'savings')
    if (savingsCategory && stats.totalInvestments > 0) {
      // Increase savings allocation if user is already investing
      const currentMonthlyInvestment = stats.totalInvestments / 12 // Rough estimate
      savingsCategory.allocated = Math.max(savingsCategory.allocated, currentMonthlyInvestment)
      savingsCategory.percentage = (savingsCategory.allocated / income) * 100
    }

    const totalAllocated = categories.reduce((sum, cat) => sum + cat.allocated, 0)

    return {
      totalIncome: income,
      totalAllocated,
      totalSpent: 0,
      totalRemaining: totalAllocated,
      categories,
      investmentAllocation: stats.totalInvestments || 0,
      monthlyInvestmentTarget: categories.find(c => c.id === 'savings')?.allocated || income * 0.1
    }
  }

  // Create budget from user input
  const createCustomBudget = () => {
    const income = parseFloat(monthlyIncome)
    if (!income || income <= 0) {
      toast({
        title: state.settings.language === "ar" ? "دخل غير صحيح" : "Invalid Income",
        description: state.settings.language === "ar" ? "يرجى إدخال مبلغ دخل شهري صحيح" : "Please enter a valid monthly income amount",
        variant: "destructive",
      })
      return
    }

    setIsSettingUpBudget(true)
    
    const customBudget = createBudgetFromPortfolio(income, portfolioStats || {
      totalInvestments: 0,
      totalCurrentValue: 0,
      totalTargetValue: 0,
      profit: 0,
      profitPercentage: 0,
      investmentCount: 0,
      lastActivity: null
    })

    setBudgetData(customBudget)
    setCategories(customBudget.categories)
    setShowBudgetSetup(false)
    setIsSettingUpBudget(false)

    toast({
      title: state.settings.language === "ar" ? "تم إنشاء الميزانية" : "Budget Created",
      description: state.settings.language === "ar" ? "تم إنشاء ميزانيتك الشخصية بنجاح!" : "Your personalized budget has been created successfully!",
    })
  }

  // Calculate spending data for charts
  const categoryData = (budgetData?.categories || []).map((cat) => ({
    id: cat.id,
    name: state.settings.language === "ar" ? cat.nameAr : cat.nameEn,
    spent: cat.spent,
    allocated: cat.allocated,
    remaining: cat.remaining,
    percentage: cat.percentage || 0,
  }))

  const pieData = categoryData.filter(cat => cat.allocated > 0).map((cat) => ({
    name: cat.name,
    value: cat.allocated,
    spent: cat.spent,
  }))

  const totalBudget = budgetData?.totalAllocated || 0
  const totalSpent = budgetData?.totalSpent || 0
  const budgetUtilization = totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0

  // Handle form submission
  const handleSubmitExpense = async () => {
    try {
      setIsSubmitting(true)
      
      if (!newExpense.amount || !newExpense.category || !newExpense.description) {
        toast({
          title: state.settings.language === "ar" ? "خطأ في التحقق" : "Validation Error",
          description: state.settings.language === "ar" ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill in all required fields.",
          variant: "destructive",
        })
        return
      }

      const expenseAmount = parseFloat(newExpense.amount)
      
      // Update budget data locally
      if (budgetData) {
        const updatedCategories = budgetData.categories.map(cat => {
          if (cat.id === newExpense.category) {
            return {
              ...cat,
              spent: cat.spent + expenseAmount,
              remaining: cat.allocated - (cat.spent + expenseAmount)
            }
          }
          return cat
        })

        const updatedBudget: BudgetOverview = {
          ...budgetData,
          categories: updatedCategories,
          totalSpent: budgetData.totalSpent + expenseAmount,
          totalRemaining: budgetData.totalRemaining - expenseAmount
        }

        setBudgetData(updatedBudget)
        setCategories(updatedCategories)
      }

      // Reset form
      setNewExpense({ amount: "", category: "", description: "", notes: "" })
      setIsDialogOpen(false)

      toast({
        title: state.settings.language === "ar" ? "نجح" : "Success",
        description: state.settings.language === "ar" ? "تم تسجيل المصروف بنجاح!" : "Expense recorded successfully!",
        variant: "default",
      })

    } catch (error) {
      console.error('Error creating expense:', error)
      toast({
        title: state.settings.language === "ar" ? "خطأ" : "Error",
        description: state.settings.language === "ar" ? "فشل في تسجيل المصروف. يرجى المحاولة مرة أخرى." : "Failed to record expense. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  console.log("state: ", state)
  if (loading) {
    return (
      <div className="min-h-screen bg-background pb-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">{state.settings.language === "ar" ? "جاري تحميل بيانات الميزانية..." : "Loading budget data..."}</p>
        </div>
      </div>
    )
  }

  if (error && !budgetData) {
    return (
      <div className="min-h-screen bg-background pb-24 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">{state.settings.language === "ar" ? "خطأ في تحميل الميزانية" : "Error Loading Budget"}</h2>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button onClick={fetchData} className="bg-emerald-600 hover:bg-emerald-700">
            {state.settings.language === "ar" ? "حاول مرة أخرى" : "Try Again"}
          </Button>
        </div>
      </div>
    )
  }

  // Show budget setup dialog if no budget exists
  if (showBudgetSetup) {
    return (
      <div className="min-h-screen bg-background pb-24 flex items-center justify-center">
        <div className="max-w-md mx-auto p-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                {state.settings.language === "ar" ? "إعداد الميزانية" : "Budget Setup"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-center text-muted-foreground">
                  {state.settings.language === "ar"
                    ? "لم نتمكن من العثور على بيانات المحفظة. يرجى إدخال دخلك الشهري لإنشاء ميزانية مخصصة."
                    : "We couldn't find portfolio data. Please enter your monthly income to create a personalized budget."}
                </p>
                <div className="space-y-2">
                  <Label>
                    {state.settings.language === "ar" ? "الدخل الشهري (ريال سعودي)" : "Monthly Income (SAR)"}
                  </Label>
                  <Input
                    type="number"
                    placeholder="8000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                  />
                </div>
                <div className="flex space-x-2">
                  <Button
                    onClick={createCustomBudget}
                    disabled={isSettingUpBudget}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                  >
                    {isSettingUpBudget 
                      ? (state.settings.language === "ar" ? "جاري الإنشاء..." : "Creating...") 
                      : (state.settings.language === "ar" ? "إنشاء الميزانية" : "Create Budget")
                    }
                  </Button>
                  {portfolioData && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowBudgetSetup(false)
                        fetchData()
                      }}
                    >
                      {state.settings.language === "ar" ? "تخطي" : "Skip"}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pb-24 flex justify-center">
      <main className="container max-w-4xl py-6 px-4">
        {/* Header */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {state.settings.language === "ar" ? "متتبع الميزانية" : "Budget Tracker"}
            </h1>
            <p className="text-muted-foreground mt-2">
              {state.settings.language === "ar"
                ? "تابع نفقاتك الشهرية وتحقق من أهدافك المالية"
                : "Track your monthly spending and reach your financial goals"}
            </p>
          </div>

          {/* Add Expense Button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <PlusCircle className="h-4 w-4 mr-2" />
                {state.settings.language === "ar" ? "إضافة مصروف" : "Add Expense"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {state.settings.language === "ar" ? "إضافة مصروف جديد" : "Add New Expense"}
                </DialogTitle>
                <DialogDescription>
                  {state.settings.language === "ar" 
                    ? "أدخل تفاصيل المصروف لتتبعه في ميزانيتك"
                    : "Enter expense details to track it in your budget"}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="amount" className="text-right">
                    {state.settings.language === "ar" ? "المبلغ" : "Amount"}
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="100.00"
                    className="col-span-3"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, amount: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    {state.settings.language === "ar" ? "الفئة" : "Category"}
                  </Label>
                  <Select value={newExpense.category} onValueChange={(value) => setNewExpense(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder={state.settings.language === "ar" ? "اختر الفئة" : "Select category"} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {state.settings.language === "ar" ? cat.nameAr : cat.nameEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    {state.settings.language === "ar" ? "الوصف" : "Description"}
                  </Label>
                  <Input
                    id="description"
                    placeholder={state.settings.language === "ar" ? "مثل: غداء في المطعم" : "e.g., Lunch at restaurant"}
                    className="col-span-3"
                    value={newExpense.description}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="notes" className="text-right">
                    {state.settings.language === "ar" ? "ملاحظات" : "Notes"}
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder={state.settings.language === "ar" ? "ملاحظات إضافية (اختياري)" : "Additional notes (optional)"}
                    className="col-span-3"
                    rows={3}
                    value={newExpense.notes}
                    onChange={(e) => setNewExpense(prev => ({ ...prev, notes: e.target.value }))}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button 
                  type="submit" 
                  onClick={handleSubmitExpense}
                  disabled={isSubmitting}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {isSubmitting 
                    ? (state.settings.language === "ar" ? "جاري التسجيل..." : "Recording...") 
                    : (state.settings.language === "ar" ? "حفظ المصروف" : "Record Expense")
                  }
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Error Alert */}
        {error && budgetData && (
          <Alert className="mb-6 border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Overall Budget Summary */}
        <Card className="mb-6 border-emerald-200 bg-linear-to-br from-emerald-50 to-white dark:from-emerald-950 dark:to-background">
          <CardHeader>
            <CardTitle className="text-emerald-900 dark:text-emerald-100 flex items-center">
              <Wallet className="h-5 w-5 mr-2" />
              {state.settings.language === "ar" ? "ملخص الميزانية الشهرية" : "Monthly Budget Summary"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {state.settings.language === "ar" ? "الميزانية الكلية" : "Total Budget"}
                </p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  {formatCurrency(totalBudget)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  {state.settings.language === "ar" ? "المبلغ المنفق" : "Spent"}
                </p>
                <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {formatCurrency(totalSpent)}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  {state.settings.language === "ar" ? "المتبقي" : "Remaining"}
                </p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(totalBudget - totalSpent)}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">
                  {state.settings.language === "ar" ? "استخدام الميزانية" : "Budget Utilization"}
                </span>
                <span className="font-semibold">{budgetUtilization.toFixed(1)}%</span>
              </div>
              <Progress value={budgetUtilization} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {state.settings.language === "ar" ? "الإنفاق حسب الفئة" : "Spending by Category"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {categoryData.some(cat => cat.spent > 0) ? (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} SAR`} />
                    <Bar dataKey="spent" fill="#059669" name="Spent" />
                    <Bar dataKey="limit" fill="#d1fae5" name="Limit" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p>No expenses recorded yet</p>
                    <p className="text-sm mt-1">Add your first expense to see the chart</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                {state.settings.language === "ar" ? "توزيع النفقات" : "Expense Distribution"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {pieData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} SAR`} />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <p>No expenses to display</p>
                    <p className="text-sm mt-1">Record expenses to see distribution</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Category Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {state.settings.language === "ar" ? "تفاصيل الفئات" : "Category Details"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryData.map((category) => {
                const progressPercentage = category.allocated > 0 ? (category.spent / category.allocated) * 100 : 0
                const isOverBudget = progressPercentage > 100
                return (
                  <div key={category.id} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatCurrency(category.spent)} / {formatCurrency(category.allocated)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${isOverBudget ? "text-red-600" : "text-emerald-600"}`}>
                          {progressPercentage.toFixed(0)}%
                        </p>
                        {isOverBudget && (
                        <Badge variant="destructive" className="ml-2">
                          {state.settings.language === "ar" ? "تجاوز الميزانية" : "Over Budget"}
                        </Badge>
                        )}
                      </div>
                    </div>
                    <Progress value={Math.min(progressPercentage, 100)} className="h-2" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Overview */}
        {portfolioData && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                {state.settings.language === "ar" ? "نظرة عامة على المحفظة" : "Portfolio Overview"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {state.settings.language === "ar" ? "إجمالي الاستثمارات" : "Total Investments"}
                  </p>
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(portfolioStats?.totalInvestments || 0)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {state.settings.language === "ar" ? "القيمة الحالية" : "Current Value"}
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(portfolioStats?.totalCurrentValue || 0)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {state.settings.language === "ar" ? "الربح/الخسارة" : "Profit/Loss"}
                  </p>
                  <p className={`text-2xl font-bold ${(portfolioStats?.profit || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {formatCurrency(portfolioStats?.profit || 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Budget Recommendations */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              {state.settings.language === "ar" ? "توصيات الميزانية" : "Budget Recommendations"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {budgetUtilization > 90 && (
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                    {state.settings.language === "ar"
                      ? "أنت قريب من استنفاد ميزانيتك الشهرية. فكر في تقليل النفقات غير الضرورية."
                      : "You're close to exhausting your monthly budget. Consider reducing non-essential expenses."}
                  </p>
                </div>
              )}
              
              {portfolioStats && portfolioStats.totalInvestments > 0 && (
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    {state.settings.language === "ar"
                      ? `محفظتك الاستثمارية تحتوي على ${formatCurrency(portfolioStats.totalInvestments)}. استمر في الادخار لتنمية استثماراتك!`
                      : `Your investment portfolio contains ${formatCurrency(portfolioStats.totalInvestments)}. Keep saving to grow your investments!`}
                  </p>
                </div>
              )}
              
              {budgetData && budgetData.totalRemaining > 0 && (
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    {state.settings.language === "ar"
                      ? `لديك ${formatCurrency(budgetData.totalRemaining)} متبقية في ميزانيتك. فكر في توجيه جزء منها للاستثمار.`
                      : `You have ${formatCurrency(budgetData.totalRemaining)} remaining in your budget. Consider directing some of it to investments.`}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}
