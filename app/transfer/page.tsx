"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { ArrowDownToLine, ArrowUpFromLine, Info, ArrowLeft } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"

export default function TransferPage() {
  const router = useRouter()
  const { addDeposit, logAnalytics } = useApp()
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [type, setType] = useState<"deposit" | "withdraw">("deposit")

  const handleSubmit = () => {
    const value = Number.parseFloat(amount)
    if (isNaN(value) || value <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      })
      return
    }

    if (type === "deposit") {
      addDeposit(value)
      logAnalytics("deposit_added", { amount: value, type: "manual" })
      toast({
        title: "Deposit successful",
        description: `${value} SAR added to your account`,
      })
    } else {
      logAnalytics("withdrawal_simulated", { amount: value })
      toast({
        title: "Withdrawal simulated",
        description: `${value} SAR withdrawal processed (demo)`,
      })
    }

    setAmount("")
    setTimeout(() => router.push("/home"), 1500)
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="mx-auto max-w-lg px-4 py-8">
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">Transfer Money</h1>
          <p className="text-muted-foreground">Add or withdraw funds from your account</p>
        </div>

        {/* Demo Banner */}
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Demo Mode:</strong> No real money moves. All transactions are simulated for demonstration purposes.
          </AlertDescription>
        </Alert>

        {/* Type Selection */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <Card
            className={`cursor-pointer p-6 transition-all ${
              type === "deposit" ? "border-primary bg-primary/5" : "hover:border-primary/50"
            }`}
            onClick={() => setType("deposit")}
          >
            <div className="mb-3 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowDownToLine className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-center font-semibold text-card-foreground">Deposit</div>
          </Card>

          <Card
            className={`cursor-pointer p-6 transition-all ${
              type === "withdraw" ? "border-primary bg-primary/5" : "hover:border-primary/50"
            }`}
            onClick={() => setType("withdraw")}
          >
            <div className="mb-3 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowUpFromLine className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="text-center font-semibold text-card-foreground">Withdraw</div>
          </Card>
        </div>

        {/* Amount Input */}
        <Card className="mb-6 p-6">
          <label className="mb-2 block text-sm font-medium text-card-foreground">Amount (SAR)</label>
          <div className="flex items-center gap-3">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="flex-1 text-lg"
              min={0}
              step={0.01}
            />
          </div>

          {/* Quick Amount Buttons */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[25, 50, 100, 500].map((value) => (
              <Button key={value} variant="outline" size="sm" onClick={() => setAmount(value.toString())}>
                {value}
              </Button>
            ))}
          </div>
        </Card>

        {/* Submit Button */}
        <Button
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={!amount || Number.parseFloat(amount) <= 0}
        >
          {type === "deposit" ? "Deposit" : "Withdraw"} {amount && Number.parseFloat(amount) > 0 ? `${amount} SAR` : ""}
        </Button>

        {/* Info */}
        <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Processing Time:</strong> Instant in demo mode. Real transfers would take 1-3 business days.
          </p>
          <p>
            <strong>Fees:</strong> No fees in demo. Actual fees would be disclosed before confirmation.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
