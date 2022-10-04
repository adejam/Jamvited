import { ErrorMessage } from "formik"
import React from "react"
import { IbasicInputProps } from "../../../../../types"
import Text from "../../../atoms/Text"

const FileInput: React.FC<IbasicInputProps> =  ({ id, label, name, ...rest }) => {
    const restProps = {"aria-label": !label ? `${name} field`: undefined, ...rest}
    return (
      <div className='form-group'>
        {label && <label htmlFor={id}>{label}</label>}
              <input
                aria-describedby={id && `${id}Error`}
                className="date-input form-control"
                id={id}
                name={name}
                type="file"
                {...restProps}
              />
        <ErrorMessage name={name} render={msg => <Text id={id && `${id}-error`} isErrorText>{msg}</Text>} />
        </div>
    )
}

export default FileInput
