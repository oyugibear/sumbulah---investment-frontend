/**
 * Authentication utilities for managing user authentication state
 */

export interface AuthState {
  isAuthenticated: boolean
  userId: string | null
  hasValidToken: boolean
}

/**
 * Check if user is authenticated by verifying localStorage tokens
 */
export function getAuthState(): AuthState {
  if (typeof window === 'undefined') {
    return {
      isAuthenticated: false,
      userId: null,
      hasValidToken: false
    }
  }

  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('authToken') || localStorage.getItem('token') // Check both possible token keys
  
  const hasValidToken = !!(token && token.length > 0)
  const isAuthenticated = !!(userId && hasValidToken)
  
  return {
    isAuthenticated,
    userId,
    hasValidToken
  }
}

/**
 * Clear all authentication data from localStorage
 */
export function clearAuthData(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('userId')
    localStorage.removeItem('authToken')
    console.log('🔓 Authentication data cleared')
  }
}

/**
 * Get the current auth token
 */
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('authToken') || localStorage.getItem('token')
}

/**
 * Get the current user ID
 */
export function getCurrentUserId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('userId')
}

/**
 * Log current authentication status for debugging
 */
export function debugAuthStatus(): void {
  const authState = getAuthState()
  console.log('🔍 Authentication Status:', {
    isAuthenticated: authState.isAuthenticated,
    userId: authState.userId,
    hasValidToken: authState.hasValidToken,
    tokenPreview: authState.hasValidToken ? 
      getAuthToken()?.substring(0, 20) + '...' : 'No token'
  })
}