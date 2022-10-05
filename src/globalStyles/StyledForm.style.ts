import styled from 'styled-components'
import rem from '../utils/rem'

export const StyledForm  = styled.div({
  ".legend": {
    textAlign: "center"
  },
  "form-group": {
    ".form-control": {
        backgroundClip: "padding-box",
        backgroundColor: "#fff",
        backgroundImage: "none",
        border: "1px solid #ced4da",
        color: "#495057",
        display: "block",
        fontSize: rem(14),
        marginBottom: rem(10),
    },
    marginBottom: rem(10),
  }
})
