import styled from 'styled-components'
// import { IObject } from '../../../../types'

export const getText = (as: string) => {
    switch (as) {
        case 'h1':
          return H1Text
        case 'h2':
          return H2Text
        case 'h3':
          return H3Text
        case 'h4':
          return H4Text
        default:
          return Ptext
      }
}

// const H1Text = styled.h1(props => ({...props.style}))
const H1Text = styled.h1``
const H2Text = styled.h2``
const H3Text = styled.h3``
const H4Text = styled.h4``
const Ptext = styled.p``
