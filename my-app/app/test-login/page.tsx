'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestLogin() {
  const setTestCredentials = () => {
    localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NmMyMjlhYjQ0M2NkODc5ZmZkY2M5ZiIsImlhdCI6MTc2ODY5NDQ1N30.ISsJ0YojbXSCao8ySiI89PghpWVbGsqHUoOg3EbgIUo');
    localStorage.setItem('userId', '696c229ab443cd879ffdcc9f');
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Test Login</CardTitle>
          <CardDescription>Set test credentials for budget testing</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={setTestCredentials} className="w-full">
            Login as Test User
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}