"use client"

import { ShieldCheck, Check } from "lucide-react"
import { useTranslation } from "@/lib/hooks/use-translation"

export function TrustBadge({ type = "regulated" }: { type?: "regulated" | "shariah" }) {
  const { t } = useTranslation()

  if (type === "shariah") {
    return (
      <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-900/50">
        <Check className="h-3 w-3 text-emerald-600" />
        <span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
          {t("onboarding.trust.shariah")}
        </span>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
      <ShieldCheck className="h-3 w-3 text-slate-500" />
      <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">
        {t("onboarding.trust.regulated")}
      </span>
    </div>
  )
}
