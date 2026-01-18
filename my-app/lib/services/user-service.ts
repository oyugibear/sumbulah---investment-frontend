import { apiClient, isApiSuccess } from "../api/client"

export interface CreateUserResponse {
  user: User
  token: string
  otp_code: string
}

export interface CreateUserRequest {
  fullName: string
  nationalId: string
  dateOfBirth: string
  occupation: string
  monthlyIncome: string
  phone: string
  password?: string
}

export interface UpdateUserRequest {
  fullName?: string
  nationalId?: string
  dateOfBirth?: string
  occupation?: string
  monthlyIncome?: string
  phone?: string
  password?: string
  fiancial_goals?: string
  target_amount?: number
  risk_appetite?: string
  payment_source?: string
  round_up_by?: number
  discretionn_only?: boolean
  initial_deposit?: number
  monthly_deposit?: boolean
  [key: string]: any // Allow additional fields
}

export interface User {
  _id: string
  first_name: string
  second_name: string
  full_name?: string
  email?: string
  phone_number?: string
  national_id?: string
  occupation: string
  monthly_income: number
  date_of_birth: string
  password?: string
  role?: string
  otp_code?: string
  fiancial_goals?: string
  target_amount?: number
  risk_appetite?: string
  payment_source?: string
  initial_deposit?: number
  round_up_by?: number
  weekly_cap_sar?: number
  payday_save_percent?: number
  category_boosts?: Array<{
    category: 'Coffee' | 'Restaurant' | 'Entertainment'
    add_sar: number
  }>
  monthly_deposit?: boolean
  discretionn_only?: boolean
  verified?: boolean
  investment_balance?: number
  createdAt: string
  updatedAt: string
  __v?: number
}

/**
 * User Service - Handles user-related API operations
 */

export async function createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
  const response = await apiClient.post<{data: CreateUserResponse, message: string, status: string}>('/auth/createUser', userData)
  
  if (isApiSuccess(response)) {
    // The API response has the user data nested in a 'data' property
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to create user')
  }
}

export async function getUserById(userId: string): Promise<User> {
  const response = await apiClient.get<{data: User, message: string, status: string}>(`/users/${userId}`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch user')
  }
}

export async function updateUser(userId: string, userData: UpdateUserRequest): Promise<User> {
  const response = await apiClient.put<User>(`/users/${userId}`, userData)
  
  if (isApiSuccess(response)) {
    return response.data
  } else {
    throw new Error(response.error || 'Failed to update user')
  }
}

export async function updateUserDuringOnboarding(userId: string, userData: UpdateUserRequest): Promise<User> {
  const response = await apiClient.put<{data: User, message: string, status: string}>(`/auth/updateUser/${userId}`, userData)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to update user during onboarding')
  }
}

export async function verifyOtp(userId: string, otp: string): Promise<{ success: boolean; message: string }> {
  const response = await apiClient.post<{data: { success: boolean; message: string }, message: string, status: string}>(`/auth/verify-otp/${userId}`, { otp })
  
  if (isApiSuccess(response)) {
    // The API response has the verification result nested in a 'data' property
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to verify OTP')
  }
}

export interface RoundupSettings {
  round_up_by: number
  weekly_cap_sar: number
  discretionary_only: boolean
  payday_save_percent: number
  category_boosts: Array<{
    category: 'Coffee' | 'Restaurant' | 'Entertainment'
    add_sar: number
  }>
}

export async function getRoundupSettings(userId: string): Promise<RoundupSettings> {
  const response = await apiClient.get<{data: RoundupSettings, message: string, status: string}>(`/users/${userId}/roundup`)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to fetch roundup settings')
  }
}

export async function updateRoundupSettings(userId: string, settings: Partial<RoundupSettings>): Promise<RoundupSettings> {
  const response = await apiClient.put<{data: RoundupSettings, message: string, status: string}>(`/users/${userId}/roundup`, settings)
  
  if (isApiSuccess(response)) {
    return response.data.data
  } else {
    throw new Error(response.error || 'Failed to update roundup settings')
  }
}