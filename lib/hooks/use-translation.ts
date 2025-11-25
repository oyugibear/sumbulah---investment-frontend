"use client"

import { useApp } from "../context/app-context"
import { t as translate } from "../i18n/translations"

export function useTranslation() {
  const { state } = useApp()
  const { language } = state.settings

  const t = (key: string) => translate(key, language)

  return { t, language }
}
