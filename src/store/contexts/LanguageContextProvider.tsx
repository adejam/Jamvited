import React, { useEffect, useState } from "react"

const defaultLanguage = "en"

interface ILanguageContextProviderProps {
    children: React.ReactNode
}

type LanguageContextValue = {
  lang: string | null
  setLang: React.Dispatch<React.SetStateAction<string | null>>
}

export const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const LanguageContextProvider = ({ children }: ILanguageContextProviderProps) => {

      const [lang, setLang] = useState<string | null>(null)

      useEffect(() => {
        const getCurrentLang = localStorage.getItem('current_language')
        if (getCurrentLang) {
          setLang(JSON.parse(getCurrentLang))
        } else {
          setLang(defaultLanguage)
        }
      }, [])
  
      useEffect(() => {
        if (lang) {
          localStorage.setItem('current_language', JSON.stringify(lang))
        }
      }, [lang])
    return (
    <LanguageContext.Provider value={{lang, setLang}}>{children}</LanguageContext.Provider>
)
    }

export default LanguageContextProvider
