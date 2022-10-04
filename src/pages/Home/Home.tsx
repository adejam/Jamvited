import Text from "../../components/atomic-ui/atoms/Text"
import { FormattedMessage } from 'react-intl'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const routeToCreatePage = () => {
    navigate("/add-event")
  }
  return (
    <section>
      <div>
        <Text as={"h1"} id="app-text" style={{color: "red"}}>
          <FormattedMessage id="Home.pageHeaderText" />
        </Text>
      </div>
      <div>img</div>
      <button onClick={routeToCreatePage} type="button"><FormattedMessage id="Home.addEventButtonText" /></button>
    </section>
  )
}

export default Home
