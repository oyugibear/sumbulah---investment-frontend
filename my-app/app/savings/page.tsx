"use client"

import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { ChevronLeft, Lock, TrendingUp, Zap } from "lucide-react"

export default function SavingsPage() {
  const router = useRouter()
  const { state } = useApp()

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => router.push("/home")}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Savings Account</h1>
          <div className="w-10" />
        </div>

        {/* Balance Card */}
        <Card className="mb-6 border-primary/20 bg-primary/5 p-6">
          <div className="mb-1 text-sm text-muted-foreground">Current Balance</div>
          <div className="mb-6 text-4xl font-bold text-card-foreground">{state.savingsBalance.toFixed(2)} SAR</div>
          <Button className="w-full">Withdraw Funds</Button>
        </Card>

        {/* Account Details */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Account Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Partner Bank</span>
              <span className="font-medium text-card-foreground">Al Rajhi Bank</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Account Type</span>
              <span className="font-medium text-card-foreground">Profit-Sharing Savings</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="text-muted-foreground">Current Profit Rate</span>
              <span className="font-medium text-card-foreground">0.5% annually</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Account Status</span>
              <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                <div className="h-2 w-2 rounded-full bg-green-700" />
                Active
              </span>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-foreground">Key Features</h2>
          <div className="grid gap-3">
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">Secure & Accessible</div>
                <div className="text-sm text-muted-foreground">Withdraw anytime without penalties</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">Profit Sharing</div>
                <div className="text-sm text-muted-foreground">Earn profits based on bank performance</div>
              </div>
            </Card>
            <Card className="flex items-start gap-4 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-medium text-card-foreground">Automatic Round-ups</div>
                <div className="text-sm text-muted-foreground">Funds accumulate from your daily spending</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Recent Activity</h2>
          <div className="space-y-3">
            {state.transactions.slice(0, 5).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between pb-3 border-b border-border last:border-0">
                <div>
                  <div className="font-medium text-card-foreground">{tx.merchant}</div>
                  <div className="text-xs text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-card-foreground">+{tx.roundUp} SAR</div>
                  <div className="text-xs text-muted-foreground">Round-up</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* FAQs */}
        <Card className="mb-6 p-6">
          <h2 className="mb-4 text-lg font-semibold text-card-foreground">Common Questions</h2>
          <div className="space-y-4">
            <div>
              <div className="mb-2 font-medium text-card-foreground">Is my money safe?</div>
              <div className="text-sm text-muted-foreground">
                Yes. Your funds are held by Al Rajhi Bank, a licensed Saudi financial institution regulated by SAMA.
              </div>
            </div>
            <div>
              <div className="mb-2 font-medium text-card-foreground">When do I earn profits?</div>
              <div className="text-sm text-muted-foreground">
                Profit-sharing is calculated monthly and credited to your account quarterly.
              </div>
            </div>
            <div>
              <div className="mb-2 font-medium text-card-foreground">Can I withdraw anytime?</div>
              <div className="text-sm text-muted-foreground">
                Yes, you can withdraw your funds at any time without penalties or lock-in periods.
              </div>
            </div>
          </div>
        </Card>
      </div>
      <BottomNav />
    </div>
  )
}
