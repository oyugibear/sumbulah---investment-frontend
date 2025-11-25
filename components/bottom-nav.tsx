"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PieChart, BookOpen, User, Wallet, Newspaper, Activity } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "/home", icon: Home, label: "Home", labelAr: "الرئيسية" },
  { href: "/budget", icon: Wallet, label: "Budget", labelAr: "الميزانية" },
  { href: "/news", icon: Newspaper, label: "News", labelAr: "الأخبار" },
  { href: "/market", icon: PieChart, label: "Market", labelAr: "السوق" },
  { href: "/health", icon: Activity, label: "Health", labelAr: "الصحة" },
  { href: "/learn", icon: BookOpen, label: "Learn", labelAr: "تعلم" },
  { href: "/profile", icon: User, label: "Profile", labelAr: "الملف" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card">
      <div className="mx-auto flex max-w-lg items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-3 text-xs transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
