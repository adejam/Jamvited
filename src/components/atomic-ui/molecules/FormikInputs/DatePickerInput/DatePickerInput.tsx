import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage, FieldProps } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { IbasicInputProps } from '../../../../../types'
import Text from '../../../atoms/Text'

const DatePickerInput: React.FC<IbasicInputProps> =  ({ id, label, name, ...rest }) => {
  const restProps = {"aria-label": !label ? `${name} field`: undefined, ...rest}
  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}</label>}
      <Field aria-describedby={id && `${id}Error`} id={id} name={name} {...restProps}>
        {({ form, field }: FieldProps) => {
          const {setFieldValue} = form
          const { value } = field
          return (
            <DateView
              className="date-input form-control"
              id={name}
              selected={value}
              {...field}
              onChange={(val: Date) => setFieldValue(name, val)}
              {...rest}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
    </div>
  )
}

export default DatePickerInput
