import { apiClient, isApiSuccess } from "../api/client"

export interface CreatePaymentRequest {
  amount_requested: number
  payment_method?: string
  paymentType: 'Deposit' | 'Withdrawal'
  currency?: string
  notes?: string
}

export interface Payment {
  _id: string
  amount_requested: number
  payment_method?: string
  payment_reference?: string
  payment_date?: string
  payment_status: 'Pending' | 'Completed' | 'Failed'
  notes?: string
  paymentType: 'Deposit' | 'Withdrawal'
  currency?: string
  paymentLink?: string
  receipt_pdf?: string
  postedBy: string
  createdAt: string
  updatedAt: string
}

/**
 * Payment Service - Handles payment-related API operations
 */

export async function createPayment(paymentData: CreatePaymentRequest): Promise<Payment> {
  const response = await apiClient.post<{data: Payment, message: string, status: string}>('/payments/add', paymentData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to create payment')
  }
}

export async function getPayment(paymentId: string): Promise<Payment> {
  const response = await apiClient.get<{data: Payment, message: string, status: string}>(`/payments/${paymentId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch payment')
  }
}

export async function getUserPayments(userId: string): Promise<Payment[]> {
  const response = await apiClient.get<{data: Payment[], message: string, status: string}>(`/payments/user/${userId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch user payments')
  }
}