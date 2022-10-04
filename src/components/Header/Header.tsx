import LocaleSwitcher from "../atomic-ui/molecules/LocaleSwitcher"

const Header = () => {
  return (
    <header className="Header">
        <nav className="navBar">
          <div>
            <LocaleSwitcher />
          </div>
        </nav>
    </header>
  )
}

export default Header