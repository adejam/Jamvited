import React from 'react'
import CheckboxInput from '../atomic-ui/molecules/FormikInputs/CheckboxInput'
import RadioInput from '../atomic-ui/molecules/FormikInputs/RadioInput'
// import { IKeyValueStringObject } from '../../types'
import SelectInput from '../atomic-ui/molecules/FormikInputs/SelectInput'
import TextInput from '../atomic-ui/molecules/FormikInputs/TextInput'
// import ChakraInput from './ChakraInput'
// import CheckboxGroup from './CheckboxGroup'
// import DatePicker from './DatePicker'
// import RadioButtons from './RadioButtons'
// import Select from './Select'
// import Textarea from './Textarea'

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
    // case 'date':
    //   return <DatePicker {...rest} />
    default:
      return null
  }
}

export default FormikControl
