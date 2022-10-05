import { Form, Formik } from "formik"
import { useContext, useState } from "react"
import { FormattedMessage } from "react-intl"
import PreviewImage from "../../components/atomic-ui/atoms/PreviewImage"
import Text from "../../components/atomic-ui/atoms/Text"
import FormikControl from "../../components/FormikControl"
import { deriveCountriesDropdownKeyAndValue, getStatesDropdownDataFromCountry } from "../../constants/countriesAndStatesData"
import { StyledForm } from "../../globalStyles/StyledForm.style"
import { TCountry } from "../../types"
import { eventDataInitialValues, eventDataValidationSchema } from "./AddEvent.formdata"
import { v4 as uuidv4 } from 'uuid'
import { EventContext, IEvent } from "../../store/contexts/EventContextProvided"
import { useNavigate } from "react-router-dom"

interface IEventDataInitialValues {
    endDate: string | null
    eventCity: string
    eventCountry: string
    eventName: string
    eventState: string
    hostName: string
    eventPhoto: Blob | null
    startDate: string | null
}

const AddEvent = () => {
    const [statesDropdown, setStatesDropdown] = useState<{key: string, value: string}[] | []>([])
    const { dispatch } = useContext(EventContext)

    const countriesDropdownData = deriveCountriesDropdownKeyAndValue()
    const navigate = useNavigate()

    const submitHandler = (values: IEventDataInitialValues) => {
        const id = uuidv4()
        console.log(values.eventPhoto)
        const vals: IEvent = {id, ...values} as IEvent
        dispatch({ event: vals, type: 'ADD_EVENT' })
        navigate(`/event/${id}`)
    }
    
  return (
    <div>
    <Formik
      initialValues={eventDataInitialValues}
      validationSchema={eventDataValidationSchema}
      // eslint-disable-next-line react/jsx-sort-props
      onSubmit={submitHandler}
    >
      {(formik) => {
        return (
          <StyledForm>
            <Form>
            <fieldset className="AddEvent-formFieldSet">
                <legend className="AddEvent-formLegend legend">
                <Text as={"h2"}>
                    <FormattedMessage id="AddEvent.formTitle" />
                </Text>
                </legend>
            
              <FormikControl
                control="input"
                label="Event Name"
                name="eventName"
                type="text"
              />
              <FormikControl
                control="input"
                label="Host Name"
                name="hostName"
                type="text"
              />

              <FormikControl
                control="date"
                label="Start Date"
                name="startDate"
              />

              <FormikControl
                control="date"
                label="End Date"
                name="endDate"
              />

              <FormikControl
                control="select"
                label="Select Country"
                name="eventCountry"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const val = `${e.target.value}`
                    if (val) {
                        const country: TCountry = val as TCountry
                        setStatesDropdown(getStatesDropdownDataFromCountry(country))
                    } else {
                        setStatesDropdown([])
                    }
                    formik.setFieldValue("eventCountry", e.target.value)
                }}
                options={countriesDropdownData}
              />

              <FormikControl
                control="select"
                label="Select State"
                name="eventState"
                options={statesDropdown}
              />

              <FormikControl
                control="input"
                label="Select City"
                name="eventCity"
                type={"text"}
              />

              {formik.values.eventPhoto && <PreviewImage file={formik.values.eventPhoto} />}

              <FormikControl
                control="file"
                id={"file"}
                label="Upload Event Photo"
                name="eventPhoto"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  e.target.files instanceof FileList && formik.setFieldValue("eventPhoto", e.target.files[0])
                }}
              />

              <button disabled={!formik.isValid} type="submit">
                <FormattedMessage id="Global.next" />
              </button>
            </fieldset>
            </Form>
          </StyledForm>
          )
        }}
      </Formik>
    </div>
  )
}

export default AddEvent
