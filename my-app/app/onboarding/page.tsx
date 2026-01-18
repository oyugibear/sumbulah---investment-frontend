"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "@/lib/context/app-context"
import { Progress } from "@/components/ui/progress"
import { useTranslation } from "@/lib/hooks/use-translation"
import { trackEvent } from "@/lib/utils/track-event"
import { updateUserDuringOnboarding } from "@/lib/services/user-service"
import Welcome from "@/components/sections/onboarding/Welcome"
import PhoneStep from "@/components/sections/onboarding/PhoneStep"
import KycStep from "@/components/sections/onboarding/KycStep"
import GoalStep from "@/components/sections/onboarding/GoalStep"
import OptionStep from "@/components/sections/onboarding/OptionStep"

const steps = [
  { id: "welcome", title: "welcome" },
  { id: "kyc", title: "kyc" },
  { id: "phone", title: "phone" },
  { id: "goal", title: "goal" },
  { id: "option", title: "option" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const { updateSettings, completeOnboarding } = useApp()
  const { t, language } = useTranslation()
  const [currentStep, setCurrentStep] = useState(0)
  const [goal, setGoal] = useState<string | null>(null)
  const [targetAmount, setTargetAmount] = useState("")
  const [showGoalSuccess, setShowGoalSuccess] = useState(false)
  const [selectedOption, setSelectedOption] = useState<"savings" | "investment">("investment")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [kycData, setKycData] = useState({
    fullName: "",
    nationalId: "",
    dateOfBirth: "",
    occupation: "",
    monthlyIncome: "",
    password: "",
  })
  const [userId, setUserId] = useState<string | null>(null)
  const [riskProfile, setRiskProfile] = useState<"conservative" | "moderate" | "growth" | null>(null)

  useEffect(() => {
    trackEvent("onboarding_start", { language })
  }, [language])

  useEffect(() => {
    // Check if user ID is stored in localStorage (from KYC step)
    const storedUserId = localStorage.getItem('userId')
    if (storedUserId) {
      setUserId(storedUserId)
    }
  }, [currentStep])

  useEffect(() => {
    if (steps[currentStep].id === "option") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [currentStep])

  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      trackEvent("onboarding_complete", { goal, investmentOption: selectedOption, riskProfile })
      completeOnboarding([goal || "wealth"], selectedOption)
      router.push("/link")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      router.push("/")
    }
  }

  const handleGoalSubmit = async () => {
    if (goal && targetAmount) {
      try {
        const userId = localStorage.getItem('userId')
        if (userId) {
          // Update user with goal data
          await updateUserDuringOnboarding(userId, {
            fiancial_goals: goal,
            target_amount: parseInt(targetAmount)
          })
        }
        setShowGoalSuccess(true)
      } catch (error) {
        console.error('Error updating user goals:', error)
        // Still show success dialog even if API call fails
        setShowGoalSuccess(true)
      }
    }
  }

  const handleGoalSuccessContinue = () => {
    setShowGoalSuccess(false)
    handleNext()
  }

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case "welcome":
        return <Welcome handleNext={handleNext} />

        
      case "kyc":
        return (
          <KycStep
            handleNext={handleNext}
            kycData={kycData}
            setKycData={setKycData}
            phone={phone}
          />
        )
          
      case "phone":
        return (
          <PhoneStep
            handleNext={handleNext}
            phone={phone}
            setPhone={setPhone}
            otp={otp}
            setOtp={setOtp}
            isOtpSent={isOtpSent}
            setIsOtpSent={setIsOtpSent}
            kycData={kycData}
          />
        )

      case "goal":
        return (
          <GoalStep
            handleNext={handleNext}
            goal={goal}
            setGoal={setGoal}
            targetAmount={targetAmount}
            setTargetAmount={setTargetAmount}
            showGoalSuccess={showGoalSuccess}
            setShowGoalSuccess={setShowGoalSuccess}
            handleGoalSubmit={handleGoalSubmit}
            handleGoalSuccessContinue={handleGoalSuccessContinue}
          />
        )

      case "option":
        return (
          <OptionStep
            handleNext={handleNext}
            riskProfile={riskProfile}
            setRiskProfile={setRiskProfile}
            currentStep={currentStep}
            stepsLength={steps.length}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="fixed top-0 left-0 right-0 z-10 bg-background pt-12 pb-4 px-4">
        <div className="max-w-md mx-auto">
          <Progress value={progress} className="w-full" />
        </div>
        <div className="absolute top-4 right-8">
          <p className="text-sm text-muted-foreground">
            {t("step")} {currentStep + 1} {t("of")} {steps.length}
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center pt-24 pb-8 px-4">
        <div className="w-full max-w-md">{renderStep()}</div>
      </div>
    </div>
  )
}
