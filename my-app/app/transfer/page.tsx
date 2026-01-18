"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import { ArrowDownToLine, ArrowUpFromLine, Info, ArrowLeft, Loader2 } from "lucide-react"
import { BottomNav } from "@/components/bottom-nav"
import { PaymentHistory } from "@/components/payment-history"
import { createPayment, type CreatePaymentRequest } from "@/lib/services/payment-service"
import { getCurrentUserId, getAuthState } from "@/lib/utils/auth"

export default function TransferPage() {
  const router = useRouter()
  const { addDeposit, logAnalytics } = useApp()
  const { toast } = useToast()
  const [amount, setAmount] = useState("")
  const [type, setType] = useState<"deposit" | "withdraw">("deposit")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer")

  const handleSubmit = async () => {
    const value = Number.parseFloat(amount)
    if (isNaN(value) || value <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount",
        variant: "destructive",
      })
      return
    }

    // Check if user is authenticated
    const authState = getAuthState()
    if (!authState.isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please complete onboarding to make transfers",
        variant: "destructive",
      })
      router.push("/onboarding")
      return
    }

    setIsSubmitting(true)

    try {
      const userId = getCurrentUserId()
      if (!userId) {
        throw new Error("User ID not found")
      }

      // Create payment request
      const paymentData: CreatePaymentRequest = {
        amount_requested: value,
        payment_method: paymentMethod,
        paymentType: type === "deposit" ? "Deposit" : "Withdrawal",
        currency: "SAR",
        notes: `${type === "deposit" ? "Deposit" : "Withdrawal"} request from transfer page`
      }

      console.log("Creating payment:", paymentData)
      console.log("User ID:", userId)
      console.log("Auth state:", authState)

      // Create payment via API
      const payment = await createPayment(paymentData)
      
      console.log("Payment created:", payment)

      // Update local state for immediate UI feedback (for deposits)
      if (type === "deposit") {
        addDeposit(value)
      }

      logAnalytics(`${type}_requested`, { 
        amount: value, 
        paymentId: payment._id,
        method: paymentMethod 
      })

      toast({
        title: `${type === "deposit" ? "Deposit" : "Withdrawal"} request submitted`,
        description: `Your ${type} request for ${value} SAR has been submitted for processing`,
      })

      setAmount("")
      setTimeout(() => router.push("/home"), 2000)

    } catch (err) {
      console.error("Payment error:", err)
      toast({
        title: "Transfer failed",
        description: err instanceof Error ? err.message : "Failed to process transfer",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
            <strong>Real Payments:</strong> Transfer requests are now processed through the payment system. 
            Deposits and withdrawals will be handled by administrators.
          </AlertDescription>
        </Alert>

        {/* Type Selection */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <Card
            className={`cursor-pointer p-6 transition-all ${
              type === "deposit" ? "border-primary bg-primary/5" : "hover:border-primary/50"
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => !isSubmitting && setType("deposit")}
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
            } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={() => !isSubmitting && setType("withdraw")}
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
              disabled={isSubmitting}
            />
          </div>

          {/* Quick Amount Buttons */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[25, 50, 100, 500].map((value) => (
              <Button 
                key={value} 
                variant="outline" 
                size="sm" 
                onClick={() => setAmount(value.toString())}
                disabled={isSubmitting}
              >
                {value}
              </Button>
            ))}
          </div>
        </Card>

        {/* Payment Method Selection */}
        <Card className="mb-6 p-6">
          <label className="mb-3 block text-sm font-medium text-card-foreground">Payment Method</label>
          <div className="space-y-2">
            {["Bank Transfer", "Credit Card", "Mobile Payment", "Cash"].map((method) => (
              <label key={method} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  disabled={isSubmitting}
                  className="text-primary"
                />
                <span className="text-sm">{method}</span>
              </label>
            ))}
          </div>
        </Card>

        {/* Submit Button */}
        <Button
          className="w-full"
          size="lg"
          onClick={handleSubmit}
          disabled={!amount || Number.parseFloat(amount) <= 0 || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            `${type === "deposit" ? "Request Deposit" : "Request Withdrawal"} ${amount && Number.parseFloat(amount) > 0 ? `${amount} SAR` : ""}`
          )}
        </Button>

        {/* Info */}
        <div className="mt-6 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Processing Time:</strong> {type === "deposit" ? "Deposits" : "Withdrawals"} are reviewed by administrators and typically processed within 1-3 business days.
          </p>
          <p className="mb-2">
            <strong>Payment Method:</strong> {paymentMethod}
          </p>
          <p>
            <strong>Status:</strong> You can track your transfer request status in the payments section.
          </p>
        </div>

        {/* Payment History */}
        <PaymentHistory className="mt-8" />
      </div>

      <BottomNav />
    </div>
  )
}
