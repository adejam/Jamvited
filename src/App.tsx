import I18nProvider from './locale/I18nProvider'
import { useContext, useEffect, useState } from 'react'
import Layout from './components/Layout'
import { LanguageContext } from './store/contexts/LanguageContextProvider'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import DocumentTitleProvider from './DocumentTitleProvider'

const App = () => {
  const langContext = useContext(LanguageContext)
  const [locale, setLocale] = useState(langContext?.lang)
 
  useEffect(() => {
    if (langContext?.lang) {
      setLocale(langContext?.lang)
    }
  }, [langContext])
  return (
    <I18nProvider locale={locale ?? "en"}>
      <DocumentTitleProvider>
        <Layout>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/event/:id" />
        </Routes>
        </Layout>
      </DocumentTitleProvider>
    </I18nProvider>
  )
}

export default App
