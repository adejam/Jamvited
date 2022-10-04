export interface IDisableable {
  /**
   * Set the element as disabled.
   */
  disabled?: boolean
}

export interface IClassName {
  /**
   * The extra (added) class names for this component
   */
  className?: string
}

export interface IKeyValueStringObject {
  [x: string]: string
}

export interface IKeyStringValueBooleanObject {
  [x: string]: boolean
}

/**
  * Basic interface for form input
  */
export interface IbasicInputProps {
  id?: string
  name: string
  label?: string
  [x:string]: any
}

type TValues = string | number | boolean | IObject | TArray

export type TArray = Array<TValues>

export interface IObject {
  /**
   * use to style a basic object with properties and value
   */
  [x: string]: TValues
}

export interface ICanShowLoadingAnimation {
  /**
   * If set the component will show a loading animation.
   * This can be used for showing the user that a background process is running.
   * E.g. loading from an API.
   */
  loading?: boolean
}

export interface ICanWait {
  /**
   * Determines whether the component is currently waiting for a response.
   * Can be used, for example, when inputs are being saved and still waiting for a confirmation from an API.
   */
  waiting?: boolean
}

export interface IEnableable {
  /**
   * Determines whether the element should be displayed as activated or deactivated at the beginning.
   * If nothing is set the element will be on position "off"
   */
  enabled?: boolean
}

export interface IDataTestId {
  /**
   * Provides the necessary attribute "data-testId" for the React Testing library.
   */
  dataTestId?: string
}

export interface IScreenReadable {
  /**
   * A description of the element for a screen reader
   */
  screenReaderDescription: string
}

/*
 * Start Providing Error
 */

export interface IErrorWithDescription {
  /**
   * Determines whether the input to the field was incorrect.
   * If set to true, the field will be framed in red and the set error message will be displayed in red font.
   */
  error: true

  /**
   * The error message to be displayed in case of an error.
   * This field is not nullable to guarantee that a user will always get an error message in case of an error.
   */
  errorDescription: string
}

export interface INoErrorWithOptionalDescription {
  /**
   * Determines whether the input to the field was incorrect.
   * If set to true, the field will be framed in red and the set error message will be displayed in red font.
   */
  error?: boolean

  /**
   * The error message to be displayed in case of an error.
   * This field is not nullable to guarantee that a user will always get an error message in case of an error.
   */
  errorDescription?: string
}

export type Errorable = IErrorWithDescription | INoErrorWithOptionalDescription

/*
 * End Providing Error
 */

export interface IUrlString {
  /**
   * Determines a url string, we want to be able to use this as an extension in other types or interface.
   */
  url: string
}
