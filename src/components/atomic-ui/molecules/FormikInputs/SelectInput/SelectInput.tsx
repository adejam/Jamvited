import { ErrorMessage, Field } from 'formik'
import { IKeyValueStringObject } from '../../../../../types'
import Text from '../../../atoms/Text'

interface ISelectInput {
    id?: string
    label?: string
    name: string
    options?: IKeyValueStringObject[]
    [x:string]: any
}

const SelectInput: React.FC<ISelectInput> = ({
    id,
    label,
    name,
    options=[],
    ...rest
}) => {
  const restProps = {"aria-label": label ? `${name} field`: undefined, ...rest}
  return (
    <div className="form-control">
      {label && <label htmlFor={id}>{label}</label>}
      <label htmlFor={'id'}>{label}</label>
      <Field
        aria-describedBy={id && `${id}Error`}
        as="select"
        className="select-input"
        id={'id'}
        name={'name'}
        {...restProps}
      >
        {options?.map((option) =>  (
            <option key={option?.value} value={option?.value}>
              {option?.key}
            </option>
          )
        )}
      </Field>
      <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
    </div>
  )
}

export default SelectInput
