"use client"

import { useState } from "react"
import { Info } from "lucide-react"
import { cn } from "@/lib/utils"

interface InfoTooltipProps {
  content: string
  className?: string
}

export function InfoTooltip({ content, className }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={cn("text-muted-foreground transition-colors hover:text-foreground", className)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        <Info className="h-4 w-4" />
      </button>

      {isVisible && (
        <div className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg border border-border bg-popover p-3 text-sm text-popover-foreground shadow-lg">
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-popover" />
          {content}
        </div>
      )}
    </div>
  )
}
