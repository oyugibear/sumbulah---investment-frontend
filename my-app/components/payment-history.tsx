"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, ArrowUpFromLine, ArrowDownToLine } from "lucide-react"
import { getUserPayments, type Payment } from "@/lib/services/payment-service"
import { getCurrentUserId, getAuthState } from "@/lib/utils/auth"

interface PaymentHistoryProps {
  className?: string
}

export function PaymentHistory({ className }: PaymentHistoryProps) {
  const [payments, setPayments] = useState<Payment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true)
        
        const authState = getAuthState()
        if (!authState.isAuthenticated) {
          setError("Please log in to view payment history")
          return
        }

        const userId = getCurrentUserId()
        if (!userId) {
          setError("User ID not found")
          return
        }

        const userPayments = await getUserPayments(userId)
        setPayments(userPayments)
      } catch (err) {
        console.error("Error fetching payments:", err)
        setError(err instanceof Error ? err.message : "Failed to load payment history")
      } finally {
        setLoading(false)
      }
    }

    fetchPayments()
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "Failed":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "SAR",
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  if (loading) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center py-8">
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading payment history...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <p>{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        {payments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No payment history found</p>
            <p className="text-sm">Your transfers will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {payments.slice(0, 5).map((payment) => (
              <div
                key={payment._id}
                className="flex items-center justify-between p-3 rounded-lg border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    payment.paymentType === "Deposit" 
                      ? "bg-green-100 dark:bg-green-900/20" 
                      : "bg-red-100 dark:bg-red-900/20"
                  }`}>
                    {payment.paymentType === "Deposit" ? (
                      <ArrowDownToLine className="h-4 w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowUpFromLine className="h-4 w-4 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  
                  <div>
                    <div className="font-medium">
                      {payment.paymentType} • {formatCurrency(payment.amount_requested)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {payment.payment_method} • {formatDate(payment.createdAt)}
                    </div>
                  </div>
                </div>
                
                <Badge className={getStatusColor(payment.payment_status)}>
                  {payment.payment_status}
                </Badge>
              </div>
            ))}
            
            {payments.length > 5 && (
              <p className="text-sm text-center text-muted-foreground pt-2">
                And {payments.length - 5} more transactions...
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}