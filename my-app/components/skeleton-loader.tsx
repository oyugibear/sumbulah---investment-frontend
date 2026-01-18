import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} />
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <Skeleton className="mb-4 h-6 w-3/4" />
      <Skeleton className="mb-2 h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}

export function StatCardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <Skeleton className="mb-2 h-4 w-24" />
      <Skeleton className="mb-4 h-10 w-32" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Skeleton className="mb-2 h-3 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
        <div>
          <Skeleton className="mb-2 h-3 w-16" />
          <Skeleton className="h-6 w-20" />
        </div>
      </div>
    </div>
  )
}
