type EventName =
  | "app_open"
  | "onboarding_start"
  | "onboarding_complete"
  | "bank_link_success"
  | "slider_interaction"
  | "deposit_success"
  | "education_tooltip_tap"
  | "goal_created"

interface EventProperties {
  [key: string]: string | number | boolean | undefined
}

export const trackEvent = (name: EventName, properties?: EventProperties) => {
  // In a real app, this would send data to Mixpanel/Amplitude
  console.log(`[Analytics] ${name}`, properties)
}
