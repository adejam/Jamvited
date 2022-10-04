import Text from "../../components/atomic-ui/atoms/Text"
import { FormattedMessage } from 'react-intl'

const Home = () => {
  return (
    <Text as={"h1"} id="app-text" style={{color: "red"}}>
          <FormattedMessage id="Global.hello" />
        </Text>
  )
}

export default Home
