"use client"

import { useApp } from "../context/app-context"
import { t as translate } from "../i18n/translations"

export function useTranslation() {
  const { state } = useApp()
  const { language } = state.settings

  const t = (key: string, customText?: { en?: string; ar?: string }) => translate(key, language, customText)

  return { t, language }
}
