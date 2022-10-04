import React, { ReactNode } from 'react'
import { IntlProvider } from 'react-intl'
import LOCALES from '../constants/locales'
import langs from './langs'

interface I18nProviderProps {
  children: ReactNode
  locale: string
}

const I18nProvider = ({ children, locale }: I18nProviderProps) => {
  const typedLocale = locale ? LOCALES[locale] : LOCALES['en']
  return (
    <IntlProvider
      locale={locale}
      messages={langs[typeof typedLocale === 'string' ? typedLocale : 'en']}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  )
}

export default I18nProvider
