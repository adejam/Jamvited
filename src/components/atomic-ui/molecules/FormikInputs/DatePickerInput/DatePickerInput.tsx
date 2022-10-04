import React from 'react'
import DateView from 'react-datepicker'
import { Field, ErrorMessage, FieldProps } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { IbasicInputProps } from '../../../../../types'
import Text from '../../../atoms/Text'

const DatePicker: React.FC<IbasicInputProps> =  ({ id, label, name, ...rest }) => {
  const restProps = {"aria-label": !label ? `${name} field`: undefined, ...rest}
  return (
    <div className='form-control'>
      {label && <label htmlFor={id}>{label}</label>}
      <Field aria-describedby={id && `${id}Error`} id={id} name={name} {...restProps}>
        {({ form, field }: FieldProps) => {
          const {setFieldValue} = form
          const { value } = field
          return (
            <DateView
              className="date-input"
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

export default DatePicker
