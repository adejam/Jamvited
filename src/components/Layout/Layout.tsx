import { ReactNode } from "react"
import Header from "../Header/Header"

interface ILayoutProps {
  children: ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    {/* <Footer /> */}
    </>
    
  )
}

export default Layout