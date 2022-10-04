import { ReactNode } from "react"
import { errorStyle } from "../../../../constants/variables"
import { IObject } from "../../../../types"
import { getText } from "./Text.style"

interface ITextProps {
  as?: string
  children?: ReactNode
  id?: string
  isErrorText?: boolean
  style?: IObject
}

const Text: React.FC<ITextProps> = ({as="p", children, id, isErrorText= false, style, ...rest}) => {
  const Texter = getText(as)
  const errorStyleProp = isErrorText ? errorStyle : {}
  return (
    <><Texter id={id} style={{...errorStyleProp, ...style}} {...rest}>{children}</Texter></>
  )
}

export default Text
