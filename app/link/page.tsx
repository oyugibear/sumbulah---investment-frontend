"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Wallet, ChevronRight, Info, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useTranslation } from "@/lib/hooks/use-translation"

export default function LinkPage() {
  const router = useRouter()
  const { state, updateSettings, logAnalytics } = useApp()
  const { t } = useTranslation()
  const [selectedSource, setSelectedSource] = useState<"MockBank" | "MockWallet" | null>(null)
  const [roundUpRule, setRoundUpRule] = useState<1 | 5 | 10>(1)
  const [discretionaryOnly, setDiscretionaryOnly] = useState(false)

  // New state for funding
  const [initialDeposit, setInitialDeposit] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleConnect = () => {
    if (!selectedSource) return

    updateSettings({
      linkedSource: selectedSource,
      roundUpTo: roundUpRule,
      discretionaryOnly,
    })

    logAnalytics("roundups_enabled", {
      source: selectedSource,
      roundUpTo: roundUpRule,
      discretionaryOnly,
      initialDeposit,
      isRecurring,
    })

    setShowSuccess(true)
  }

  const handleSuccessContinue = () => {
    setShowSuccess(false)
    router.push("/home")
  }

  const recentTransactions = state.transactions.slice(0, 10)

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="mx-auto max-w-lg px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-bold text-foreground">{t("link.title")}</h1>
          <p className="text-muted-foreground">{t("link.subtitle")}</p>
        </div>

        {/* Demo Banner */}
        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>{t("link.demoMode")}</strong> {t("link.demoDesc")}
          </AlertDescription>
        </Alert>

        {/* Source Selection */}
        <div className="mb-8 space-y-3">
          <h2 className="mb-3 text-lg font-semibold text-foreground">{t("link.selectSource")}</h2>

          <Card
            className={cn(
              "cursor-pointer p-6 transition-all",
              selectedSource === "MockBank" ? "border-primary bg-primary/5" : "hover:border-primary/50",
            )}
            onClick={() => setSelectedSource("MockBank")}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">{t("link.mockBank")}</h3>
                <p className="text-sm text-muted-foreground">{t("link.mockBankDesc")}</p>
              </div>
              <div
                className={cn(
                  "h-5 w-5 rounded-full border-2",
                  selectedSource === "MockBank" ? "border-primary bg-primary" : "border-muted-foreground",
                )}
              />
            </div>
          </Card>

          <Card
            className={cn(
              "cursor-pointer p-6 transition-all",
              selectedSource === "MockWallet" ? "border-primary bg-primary/5" : "hover:border-primary/50",
            )}
            onClick={() => setSelectedSource("MockWallet")}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground">{t("link.mockWallet")}</h3>
                <p className="text-sm text-muted-foreground">{t("link.mockWalletDesc")}</p>
              </div>
              <div
                className={cn(
                  "h-5 w-5 rounded-full border-2",
                  selectedSource === "MockWallet" ? "border-primary bg-primary" : "border-muted-foreground",
                )}
              />
            </div>
          </Card>
        </div>

        {/* Funding & Round-Up Settings */}
        {selectedSource && (
          <>
            {/* Initial Funding Section */}
            <div className="mb-8 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="mb-3 text-lg font-semibold text-foreground">{t("link.addFunds")}</h2>
              <Card className="p-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="deposit">{t("link.depositLabel")}</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      SAR
                    </span>
                    <Input
                      id="deposit"
                      type="number"
                      placeholder="500"
                      className="pl-12"
                      value={initialDeposit}
                      onChange={(e) => setInitialDeposit(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="space-y-0.5">
                    <Label className="text-base">{t("link.recurringLabel")}</Label>
                    <p className="text-xs text-muted-foreground">{t("link.recurringDesc")}</p>
                  </div>
                  <Switch checked={isRecurring} onCheckedChange={setIsRecurring} />
                </div>
              </Card>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-lg font-semibold text-foreground">{t("link.roundUpSettings")}</h2>

              <Card className="p-6">
                <div className="mb-4">
                  <label className="mb-2 block text-sm font-medium text-card-foreground">{t("link.roundUpTo")}</label>
                  <div className="flex gap-2">
                    {[1, 5, 10].map((value) => (
                      <Button
                        key={value}
                        variant={roundUpRule === value ? "default" : "outline"}
                        onClick={() => setRoundUpRule(value as 1 | 5 | 10)}
                        className="flex-1"
                      >
                        {value} {t("sar")}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-card-foreground">{t("link.discretionaryOnly")}</div>
                    <div className="text-sm text-muted-foreground">{t("link.discretionaryDesc")}</div>
                  </div>
                  <Switch checked={discretionaryOnly} onCheckedChange={setDiscretionaryOnly} />
                </div>
              </Card>
            </div>

            <Button className="w-full h-12 text-lg" onClick={handleConnect}>
              {t("link.connect")}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </>
        )}

        {/* Success Modal */}
        <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
          <DialogContent className="sm:max-w-md text-center">
            <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 animate-in zoom-in duration-300">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogHeader>
              <DialogTitle className="text-center text-xl">{t("link.successTitle")}</DialogTitle>
              <DialogDescription className="text-center space-y-2">
                <span className="block">{t("link.successDesc")}</span>
                {initialDeposit && (
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <div className="text-sm text-muted-foreground">{t("link.depositAdded")}</div>
                    <div className="text-2xl font-bold text-emerald-600">{initialDeposit} SAR</div>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-center mt-4">
              <Button onClick={handleSuccessContinue} className="w-full sm:w-auto min-w-[150px]">
                {t("link.goToDashboard")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
