/**
 * API Client - Centralized API connection handler
 * 
 * This module provides a unified interface for making API calls.
 * It handles configuration, error handling, and can switch between
 * mock data and real API endpoints based on environment variables.
 */

// Types for API responses
export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface ApiError {
  message: string
  status?: number
  code?: string
}

// API Configuration
const API_CONFIG = {
  // Use environment variable for base URL, throw error if not provided
  baseUrl: process.env.NEXT_PUBLIC_API_URL || (() => {
    throw new Error('NEXT_PUBLIC_API_URL environment variable is required')
  })(),
  
  // Default timeout for API requests
  timeout: 10000,
  
  // Default headers
  defaultHeaders: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
}

/**
 * Generic API client class
 */
class ApiClient {
  private baseUrl: string
  private defaultHeaders: Record<string, string>
  private timeout: number

  constructor() {
    this.baseUrl = API_CONFIG.baseUrl
    this.defaultHeaders = API_CONFIG.defaultHeaders
    this.timeout = API_CONFIG.timeout
  }

  /**
   * Set authorization token for authenticated requests
   */
  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`
  }

  /**
   * Remove authorization token
   */
  clearAuthToken() {
    delete this.defaultHeaders['Authorization']
  }

  /**
   * Generic request method
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`
    
    // Automatically include auth token from localStorage if available
    // Check both possible token keys
    const authToken = typeof window !== 'undefined' ? 
      (localStorage.getItem('authToken') || localStorage.getItem('token')) : null
    const headers = {
      ...this.defaultHeaders,
      ...(options.headers as Record<string, string>),
    } as Record<string, string>
    
    if (authToken && !headers['Authorization']) {
      headers['Authorization'] = `Bearer ${authToken}`
    }
    
    console.log('🔍 API Request:', { url, authToken: authToken ? `${authToken.substring(0, 20)}...` : 'none' })
    
    const config: RequestInit = {
      ...options,
      headers,
      signal: AbortSignal.timeout(this.timeout),
    }

    try {
      const response = await fetch(url, config)
      
      console.log('🔍 API Response Status:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('🔍 API Error Response:', errorText)
        throw new Error(`HTTP ${response.status}: ${response.statusText} - ${errorText}`)
      }

      const data = await response.json()
      console.log('🔍 API Response Data:', data)
      
      return {
        data,
        success: true,
        message: 'Request successful'
      }
    } catch (error) {
      console.error('API Request Error:', error)
      
      const apiError: ApiResponse<T> = {
        data: null as T,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }
      
      throw apiError
    }
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const url = new URL(endpoint, this.baseUrl)
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined && params[key] !== null) {
          url.searchParams.append(key, String(params[key]))
        }
      })
    }

    return this.request<T>(url.pathname + url.search)
  }

  /**
   * POST request
   */
  async post<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  /**
   * PUT request
   */
  async put<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  /**
   * PATCH request
   */
  async patch<T>(endpoint: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    })
  }

  /**
   * Upload file
   */
  async upload<T>(endpoint: string, file: File, additionalData?: Record<string, any>): Promise<ApiResponse<T>> {
    const formData = new FormData()
    formData.append('file', file)

    if (additionalData) {
      Object.keys(additionalData).forEach(key => {
        formData.append(key, String(additionalData[key]))
      })
    }

    return this.request<T>(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        // Don't set Content-Type for FormData, let browser set it with boundary
        ...Object.fromEntries(
          Object.entries(this.defaultHeaders).filter(([key]) => 
            key.toLowerCase() !== 'content-type'
          )
        )
      },
    })
  }

  /**
   * Health check endpoint
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.get('/health')
      return response.success
    } catch {
      return false
    }
  }

  /**
   * Get API configuration
   */
  getConfig() {
    return {
      baseUrl: this.baseUrl,
      timeout: this.timeout
    }
  }
}

// Create and export singleton instance
export const apiClient = new ApiClient()

// Export the class for testing or custom instances
export { ApiClient }

// Utility function for handling API errors in components
export function handleApiError(error: any): string {
  if (error?.error) {
    return error.error
  }
  if (error?.message) {
    return error.message
  }
  return 'An unexpected error occurred'
}

// Type guards for API responses
export function isApiSuccess<T>(response: ApiResponse<T>): response is ApiResponse<T> & { success: true } {
  return response.success === true
}

export function isApiError<T>(response: ApiResponse<T>): response is ApiResponse<T> & { success: false } {
  return response.success === false
}