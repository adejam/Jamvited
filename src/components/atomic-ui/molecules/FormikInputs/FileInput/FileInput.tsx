import { ErrorMessage, Field, FieldProps } from "formik"
import React from "react"
import { IbasicInputProps } from "../../../../../types"
import Text from "../../../atoms/Text"

const FileInput: React.FC<IbasicInputProps> =  ({ id, label, name, ...rest }) => {
    const restProps = {"aria-label": !label ? `${name} field`: undefined, ...rest}
    return (
      <div className='form-control'>
        {label && <label htmlFor={id}>{label}</label>}
        <Field aria-describedby={id && `${id}Error`} id={id} name={name} {...restProps}>
          {({ form, field }: FieldProps) => {
            const {setFieldValue} = form
            // const { value } = field
            return (
              <input
                className="date-input"
                id={name}
                type="file"
                {...field}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.files instanceof FileList && setFieldValue(name, e.target.files[0])
                }}
                {...rest}
              />
            )
          }}
        </Field>
        <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
        </div>
    )
}

export default FileInput