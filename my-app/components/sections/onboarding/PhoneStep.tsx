import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useTranslation } from '@/lib/hooks/use-translation'
import { createUser, verifyOtp, type CreateUserRequest, type CreateUserResponse } from '@/lib/services/user-service'
import { debugAuthStatus } from '@/lib/utils/auth'
import { Loader2 } from 'lucide-react'

interface KycData {
  fullName: string
  nationalId: string
  dateOfBirth: string
  occupation: string
  monthlyIncome: string
  password: string
}

interface PhoneStepProps {
  handleNext: () => void
  phone: string
  setPhone: (phone: string) => void
  otp: string
  setOtp: (otp: string) => void
  isOtpSent: boolean
  setIsOtpSent: (sent: boolean) => void
  kycData: KycData
}

export default function PhoneStep({
  handleNext,
  phone,
  setPhone,
  otp,
  setOtp,
  isOtpSent,
  setIsOtpSent,
  kycData
}: PhoneStepProps) {
  const { t, language } = useTranslation()
  const [isCreating, setIsCreating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [otp_code, set_otp_code] = useState<string>("") // for demo purposes

  const handleCreateUser = async () => {
    setIsCreating(true)
    setError(null)

    try {
      const userData: CreateUserRequest = {
        fullName: kycData.fullName,
        nationalId: kycData.nationalId,
        dateOfBirth: kycData.dateOfBirth,
        occupation: kycData.occupation,
        monthlyIncome: kycData.monthlyIncome,
        password: kycData.password,
        phone: `+966${phone}`
      }

      // Create user via API
      const response = await createUser(userData)
      console.log("Created user response: ", response)

      
      // Store user ID in state and localStorage for future use
      // Use _id as that's what MongoDB returns
      setUserId(response.user._id)
      // Store the OTP code for demo purposes
      set_otp_code(response.otp_code ?? '')
      console.log("extracted user id: ", response.user._id)
      localStorage.setItem('userId', response.user._id)
      
      // Store authentication token for API calls
      if (response.token) {
        localStorage.setItem('authToken', response.token)
        console.log("✅ Auth token stored successfully in localStorage")
        console.log("Token preview:", response.token.substring(0, 20) + "...")
        
        // Verify token was stored correctly
        const storedToken = localStorage.getItem('authToken')
        if (storedToken === response.token) {
          console.log("✅ Token verification successful - localStorage working correctly")
        } else {
          console.error("❌ Token verification failed - localStorage issue")
        }
      } else {
        console.warn("⚠️ No token received in response - authentication may not work")
        console.log("Full response:", response)
      }
      
      // If user creation successful, proceed to send OTP
      setIsOtpSent(true)
      
      // Debug authentication status after user creation
      setTimeout(() => {
        console.log("🔍 Auth status after user creation:")
        debugAuthStatus()
      }, 100)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user account')
    } finally {
      setIsCreating(false)
    }
  }

  console.log("user id at render: ", userId)
  const handleVerifyOtp = async () => {
    if (!userId) {
      setError('User ID is required for OTP verification')
      return
    }
    console.log("user id: ", userId)

    setIsCreating(true)
    setError(null)

    try {
      // Verify OTP with the backend using user ID
      const result = await verifyOtp(userId, otp)
      console.log(result);

      if (result.success) {
        // OTP verified successfully, proceed to next step
        handleNext()
      } else {
        setError(result.message || 'OTP verification failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP')
    } finally {
      setIsCreating(false)
    }
  }

  return (
    <>
      {error && (
        <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
          {error}
        </div>
      )}
      
      {!isOtpSent ? (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">
              {t("onboarding.phone.title", {
                en: "Verify Your Number",
                ar: "تحقق من رقمك"
              })}
            </h2>
            <p className="text-muted-foreground">
              {t("onboarding.phone.subtitle", {
                en: "We'll send a code to verify your account",
                ar: "سوف يتم إرسال رمز التحقق للتحقّق من حسابك على الرقم التالي"
              })}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-left block">
                {t("onboarding.phone.label", {
                  en: "Phone Number",
                  ar: "رقم الهاتف"
                })}
              </Label>
              <div className="flex gap-2" dir="ltr">
                <div className="flex items-center justify-center px-3 border rounded-md bg-muted text-muted-foreground text-sm font-medium">
                  +966
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="5X XXX XXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-lg tracking-wide"
                />
              </div>
            </div>
            <Button 
              className="w-full h-12" 
              onClick={handleCreateUser} 
              disabled={phone.length < 9 || isCreating}
            >
              {isCreating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {t("onboarding.phone.sendOtp", {
                en: "Send Verification Code",
                ar: "إرسال رمز التحقق"
              })}
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">
              {t("onboarding.phone.verifyTitle", {
                en: "Enter the code sent to your phone",
                ar: "الرجاء التحقق من الرمز المرسَل إلى هاتفك"
              })}
            </h2>
            <p className="text-muted-foreground">
              {t("onboarding.phone.verifySubtitle", {
                en: "Check your messages for the 4-digit code",
                ar: "الرجاء إدخال رمز التحقق"
              })}
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-left block">
                {t("onboarding.phone.otpLabel", {
                  en: "Verification Code",
                  ar: "رمز التحقق"
                })}
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="XXXX"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="text-center text-2xl tracking-[1em] font-mono h-14"
                maxLength={6}
              />
            </div>
            {/* add a demo section here that shows the otp */}
            <div className="text-center text-sm text-muted-foreground">
              Demo OTP: {otp_code}
            </div>
            <Button 
              className="w-full h-12" 
              onClick={handleVerifyOtp} 
              disabled={otp.length < 4 || isCreating}
            >
              {isCreating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {t("onboarding.phone.verify", {
                en: "Verify Code",
                ar: "تحقق من الرمز"
              })}
            </Button>
            <div className="text-center space-y-2">
              <button
                onClick={() => setIsOtpSent(false)}
                className="text-sm text-emerald-600 hover:underline font-medium"
              >
                {t("onboarding.phone.changeNumber", {
                  en: "Change Phone Number",
                  ar: "تغيير رقم الهاتف"
                })}
              </button>
              <div className="text-xs text-muted-foreground">
                {t("onboarding.phone.noCode", {
                  en: "Didn't receive code? ",
                  ar: "لم يصلك الرمز؟ "
                })}
                <button className="underline hover:text-emerald-600">
                  {t("onboarding.phone.resend", {
                    en: "Resend",
                    ar: "إعادة إرسال"
                  })}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}