import styled from 'styled-components'
import rem from '../../../../utils/rem'

const LocaleSwitcherStyle = styled.div({
    '.labelStyle': {
        marginRight: rem(5)
     },
   '.select': {
      appearance: "none",
      border: "none",
   },
   display: 'flex',
   justifyContent: "end",
   padding: rem(10)
})

export default LocaleSwitcherStyle
