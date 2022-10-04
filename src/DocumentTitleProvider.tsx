import useDocumentTitle from "./customHooks/useDocumentTitle"

interface IDocumentTitleProvider {
    children: React.ReactNode
}

const DocumentTitleProvider = ({ children }: IDocumentTitleProvider) => {
  useDocumentTitle()
  return <>{children}</>
}

export default DocumentTitleProvider
