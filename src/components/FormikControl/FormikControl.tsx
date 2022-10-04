import React from 'react'
import CheckboxInput from '../atomic-ui/molecules/FormikInputs/CheckboxInput'
import DatePickerInput from '../atomic-ui/molecules/FormikInputs/DatePickerInput'
import FileInput from '../atomic-ui/molecules/FormikInputs/FileInput'
import RadioInput from '../atomic-ui/molecules/FormikInputs/RadioInput'
import SelectInput from '../atomic-ui/molecules/FormikInputs/SelectInput'
import TextInput from '../atomic-ui/molecules/FormikInputs/TextInput'

interface IFormikControl {
  control: string
  name: string
  [x:string]: any
}

const FormikControl: React.FC<IFormikControl> = ({
  control,
  ...rest
}) => {
  switch (control) {
    case 'input' || 'textarea':
      return <TextInput control={control} {...rest} />
    case 'select':
      return <SelectInput {...rest} />
    case 'radio':
      return <RadioInput {...rest} />
    case 'checkbox':
      return <CheckboxInput {...rest} />
    case 'date':
      return <DatePickerInput {...rest} />
    case 'file':
        return <FileInput {...rest} />
    default:
      return null
  }
}

export default FormikControl
