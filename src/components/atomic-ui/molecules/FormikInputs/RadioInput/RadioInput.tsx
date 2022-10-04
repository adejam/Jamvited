import React from 'react'
import { Field, ErrorMessage, FieldProps } from 'formik'
import Text from '../../../atoms/Text'
import { ICheckboxInput } from '../CheckboxInput/CheckboxInput'

const RadioInput: React.FC<ICheckboxInput> = ({
  id,
  label,
  name,
  options=[],
  ...rest
}) => {
  const restProps = {"aria-label": label ? `${name} field`: undefined, ...rest}
  return (
    <div className="form-group">
      {label && <label className="radioLabelInputDescritpion">{label}</label>}
      <Field aria-describedby={id && `${id}Error`} id={id} name={name} {...restProps}>
        {({ field }: FieldProps) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  checked={field?.value === option.value}
                  className="radio-input form-control"
                  id={option.value}
                  type="radio"
                  {...field}
                  {...rest}
                  value={option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
    </div>
  )
}

export default RadioInput
