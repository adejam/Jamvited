import { useEffect } from 'react'
import { appName } from '../constants/variables'
import { useLocation } from "react-router-dom"
import getStringFromLongText from '../utils/getStringFromLongText'

function useDocumentTitle() {
  const location = useLocation()
  const currentPage = getStringFromLongText(location.pathname, "/", "Home")

  useEffect(() => {
    document.title = `${appName} - ${currentPage}`
  }, [currentPage])
}

export default useDocumentTitle
