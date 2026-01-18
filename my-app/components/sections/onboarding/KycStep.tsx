import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslation } from '@/lib/hooks/use-translation'

interface KycData {
  fullName: string
  nationalId: string
  dateOfBirth: string
  occupation: string
  monthlyIncome: string
  password: string
}

interface KycStepProps {
  handleNext: () => void
  kycData: KycData
  setKycData: (data: KycData) => void
  phone: string
}

export default function KycStep({ handleNext, kycData, setKycData, phone }: KycStepProps) {
  const { t, language } = useTranslation()
  const [error, setError] = useState<string | null>(null)

  const isFormValid = kycData.fullName && 
                     kycData.nationalId && 
                     kycData.dateOfBirth && 
                     kycData.occupation && 
                     kycData.monthlyIncome

  const handleSubmit = () => {
    if (!isFormValid) return
    handleNext()
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">
          {t("onboarding.kyc.title", {
            en: "Introduce Yourself",
            ar: "عرفنا عليك"
          })}
        </h2>
        <p className="text-muted-foreground">
          {t("onboarding.kyc.subtitle", {
            en: "Help us get to know you better",
            ar: "ساعدنا في التعرف عليك بشكل أفضل"
          })}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            {t("onboarding.kyc.fullName", {
              en: "Full Name",
              ar: "الاسم الكامل"
            })}
          </Label>
          <Input
            id="fullName"
            type="text"
            value={kycData.fullName}
            onChange={(e) => setKycData({ ...kycData, fullName: e.target.value })}
            placeholder={t("onboarding.kyc.fullNamePlaceholder", {
              en: "Enter your full name",
              ar: "أدخل اسمك الكامل"
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nationalId">
            {t("onboarding.kyc.nationalId", {
              en: "National ID",
              ar: "رقم الهوية الوطنية"
            })}
          </Label>
          <Input
            id="nationalId"
            type="text"
            value={kycData.nationalId}
            onChange={(e) => setKycData({ ...kycData, nationalId: e.target.value })}
            placeholder="1XXXXXXXXX"
            maxLength={10}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">
            {t("onboarding.kyc.dateOfBirth", {
              en: "Date of Birth",
              ar: "تاريخ الميلاد"
            })}
          </Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={kycData.dateOfBirth}
            onChange={(e) => setKycData({ ...kycData, dateOfBirth: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">
            {t("onboarding.kyc.occupation", {
              en: "Occupation",
              ar: "المهنة"
            })}
          </Label>
          <Input
            id="occupation"
            type="text"
            value={kycData.occupation}
            onChange={(e) => setKycData({ ...kycData, occupation: e.target.value })}
            placeholder={t("onboarding.kyc.occupationPlaceholder", {
              en: "Enter your occupation",
              ar: "أدخل مهنتك"
            })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthlyIncome">
            {t("onboarding.kyc.monthlyIncome", {
              en: "Monthly Income",
              ar: "الدخل الشهري"
            })}
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
              SAR
            </span>
            <Input
              id="monthlyIncome"
              type="number"
              value={kycData.monthlyIncome}
              onChange={(e) => setKycData({ ...kycData, monthlyIncome: e.target.value })}
              placeholder="5000"
              className="pl-12"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">
            {t("onboarding.kyc.password", {
              en: "Password",
              ar: "كلمة المرور"
            })}
          </Label>
          <div className="relative">
            <Input
              id="password"
              type="password"
              value={kycData.password}
              onChange={(e) => setKycData({ ...kycData, password: e.target.value })}
              placeholder="••••••••"
              className=""
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <Button
        className="w-full mt-4"
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        {t("continue", {
          en: "Continue",
          ar: "متابعة"
        })}
      </Button>
    </div>
  )
}