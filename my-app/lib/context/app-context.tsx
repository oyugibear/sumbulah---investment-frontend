"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { AppState, Goal, Settings, Transaction } from "../types"

const DEFAULT_SETTINGS: Settings = {
  language: "en",
  rtl: false,
  darkMode: false,
  roundUpTo: 1,
  weeklyCapSar: 50,
  discretionaryOnly: false,
  paydaySavePercent: 0,
  boosts: [],
  linkedSource: null,
  investmentOption: "investment",
}

const getNextAutoDepositDate = (): string => {
  const date = new Date()
  const currentDay = date.getDate()
  // Set to next 1st of month if already past the 1st, otherwise this month's 1st
  if (currentDay > 1) {
    date.setMonth(date.getMonth() + 1)
  }
  date.setDate(1)
  return date.toISOString()
}

const INITIAL_STATE: AppState = {
  settings: DEFAULT_SETTINGS,
  transactions: [], // Empty array - data will come from API
  goals: [], // Empty array - data will come from API
  totalInvested: 0,
  thisWeekRoundUps: 0,
  nextAutoDeposit: {
    date: getNextAutoDepositDate(),
    amount: 0, // Will be calculated dynamically based on paydaySavePercent
  },
  onboardingComplete: false,
  selectedGoals: [],
  savingsBalance: 0,
  investmentBalance: 0,
  lastPayoutDate: new Date().toISOString(),
}

interface AppContextType {
  state: AppState
  updateSettings: (settings: Partial<Settings>) => void
  addTransaction: (transaction: Omit<Transaction, "id">) => void
  addDeposit: (amount: number) => void
  addGoal: (goal: Omit<Goal, "id">) => void
  simulatePayday: () => void
  completeOnboarding: (goals: string[], investmentOption: string) => void
  resetDemo: () => void
  logAnalytics: (event: string, data?: Record<string, unknown>) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(INITIAL_STATE)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("sunbullah-state")
    if (saved) {
      try {
        const parsedState = JSON.parse(saved)
        setState((prev) => ({
          ...prev,
          ...parsedState,
          // Ensure nested objects are also merged if needed, but for now top-level defaults are key
          savingsBalance: parsedState.savingsBalance ?? prev.savingsBalance,
          investmentBalance: parsedState.investmentBalance ?? prev.investmentBalance,
          settings: {
            ...prev.settings,
            ...parsedState.settings,
          },
        }))
      } catch (e) {
        console.error("Failed to load saved state:", e)
      }
    }
  }, [])

  // Save to localStorage on state change
  useEffect(() => {
    localStorage.setItem("sunbullah-state", JSON.stringify(state))
  }, [state])

  // Apply dark mode
  useEffect(() => {
    if (state.settings.darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [state.settings.darkMode])

  // Apply RTL
  useEffect(() => {
    if (state.settings.rtl) {
      document.documentElement.setAttribute("dir", "rtl")
    } else {
      document.documentElement.setAttribute("dir", "ltr")
    }
  }, [state.settings.rtl])

  const updateSettings = (newSettings: Partial<Settings>) => {
    setState((prev) => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings },
    }))
    updateNextAutoDeposit(newSettings)
  }

  const addTransaction = (transaction: Omit<Transaction, "id">) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    }

    setState((prev) => ({
      ...prev,
      transactions: [newTransaction, ...prev.transactions],
    }))
  }

  const addDeposit = (amount: number) => {
    setState((prev) => {
      const investmentOption = prev.settings.investmentOption
      const savingsAmount = investmentOption === "savings" ? amount : amount * 0.3
      const investmentAmount = investmentOption === "investment" ? amount : amount * 0.7

      return {
        ...prev,
        totalInvested: prev.totalInvested + amount,
        savingsBalance: prev.savingsBalance + savingsAmount,
        investmentBalance: prev.investmentBalance + investmentAmount,
        goals: prev.goals.map((goal) => ({
          ...goal,
          progress: goal.progress + amount / prev.goals.length,
        })),
      }
    })
  }

  const addGoal = (goal: Omit<Goal, "id">) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
    }

    setState((prev) => ({
      ...prev,
      goals: [...prev.goals, newGoal],
    }))
  }

  const simulatePayday = () => {
    const { paydaySavePercent } = state.settings
    if (paydaySavePercent === 0) return

    const mockSalary = 10000 // Mock monthly salary
    const saveAmount = (mockSalary * paydaySavePercent) / 100

    addDeposit(saveAmount)
    logAnalytics("payday_save_triggered", { amount: saveAmount, percent: paydaySavePercent })
  }

  const completeOnboarding = (goals: string[], investmentOption: string) => {
    setState((prev) => ({
      ...prev,
      onboardingComplete: true,
      selectedGoals: goals,
      settings: { ...prev.settings, investmentOption: investmentOption as any },
    }))
    logAnalytics("onboarding_completed", { goals, investmentOption })
  }

  const resetDemo = () => {
    setState(INITIAL_STATE)
    localStorage.removeItem("sunbullah-state")
  }

  const logAnalytics = (event: string, data?: Record<string, unknown>) => {
    console.log(`[v0] Analytics: ${event}`, data)
  }

  const updateNextAutoDeposit = (newSettings: Partial<Settings>) => {
    if (newSettings.paydaySavePercent !== undefined) {
      const mockSalary = 10000
      const saveAmount = (mockSalary * newSettings.paydaySavePercent) / 100
      setState((prev) => ({
        ...prev,
        nextAutoDeposit: {
          date: getNextAutoDepositDate(),
          amount: saveAmount,
        },
      }))
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        updateSettings,
        addTransaction,
        addDeposit,
        addGoal,
        simulatePayday,
        completeOnboarding,
        resetDemo,
        logAnalytics,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
