"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface MilestoneCelebrationProps {
  milestone: {
    amount: number
    message: string
  }
  onDismiss: () => void
}

export function MilestoneCelebration({ milestone, onDismiss }: MilestoneCelebrationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
      )}
      onClick={onDismiss}
    >
      <Card
        className={cn(
          "relative mx-4 max-w-sm transform border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center shadow-2xl transition-all duration-500",
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={onDismiss}>
          <X className="h-4 w-4" />
        </Button>

        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
              <Trophy className="h-10 w-10 text-primary" />
            </div>
            <Sparkles className="absolute -right-2 -top-2 h-6 w-6 animate-pulse text-primary" />
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-bold text-card-foreground">Milestone Reached!</h2>
        <p className="mb-4 text-lg font-semibold text-primary">{milestone.amount} SAR Invested</p>
        <p className="mb-6 text-sm text-muted-foreground">{milestone.message}</p>

        <Button onClick={onDismiss} className="w-full">
          Continue Investing
        </Button>
      </Card>
    </div>
  )
}
