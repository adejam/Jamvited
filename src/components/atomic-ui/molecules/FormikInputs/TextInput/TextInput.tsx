import { ErrorMessage, Field } from 'formik'
import Text from '../../../atoms/Text/Text'

interface ITextInput {
  id?: string
  label?: string
  name: string
  control?: string
  [x:string]: any
}

const TextInput: React.FC<ITextInput> = ({ id, label, name, control="text", ...rest }) => {
  const restProps = {"aria-label": label ? `${name} field`: undefined, ...rest}
  return (
    <div className="form-control">
      {label && <label htmlFor={id}>{label}</label>}
      <Field
        aria-describedBy={id && `${id}Error`}
        as={control === "textarea" && control}
        className="text-input"
        id={id}
        name={name}
        {...restProps}
      />
      <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
    </div>
  )
}

export default TextInput
