import { Field, ErrorMessage, FieldProps } from 'formik'
import React from 'react'
import { IbasicInputProps, IKeyValueStringObject } from '../../../../../types'
import Text from '../../../atoms/Text'

export interface ICheckboxInput extends IbasicInputProps {
  options?: IKeyValueStringObject[]
}

const CheckboxInput: React.FC<ICheckboxInput> = ({
  id,
  label,
  name,
  options=[],
  ...rest
}) => {
  const restProps = {"aria-label": label ? `${name} field`: undefined, ...rest}
  return (
    <div className='form-group'>
      {label && <label className="checkboxLabelInputDescritpion" htmlFor={id}>{label}</label>}
      <Field aria-describedby={id && `${id}Error`} id={id} name={name} {...restProps}>
        {({ field }: FieldProps) => {
          return options?.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  checked={field?.value.includes(option.value)}
                  className={'form-control'}
                  id={option.value}
                  type='checkbox'
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

export default CheckboxInput
