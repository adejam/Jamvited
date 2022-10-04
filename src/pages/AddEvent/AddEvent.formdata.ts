import * as Yup from 'yup'
import { MAX_FILE_SIZE, SUPPORTED_PHOTO_FORMAT } from '../../constants/variables'

export const eventDataValidationSchema = Yup.object({
    endDate: Yup.date().required('Required').nullable(),
    eventCity: Yup.string().when(['eventCountry', 'eventState'], {
        is: true,
        then: Yup.string().required('Required'),
    }),
    eventCountry: Yup.string().required('Required'),
    eventName: Yup.string().required('Required'),
    eventPhoto: Yup.mixed().nullable().required('Event Photo Required').test(
        "fileSize",
        "Uploaded file is too big.",
        (value) => !value || (value && value?.size <= MAX_FILE_SIZE)
    ).test(
        "fileType",
        "Uploaded file is of unsupported format.",
        (value) => value && (value && SUPPORTED_PHOTO_FORMAT.includes(value?.type))
    ),
    eventState: Yup.string().when('eventCountry', {
        is: true,
        then: Yup.string().required('Required'),
    }),
    hostName: Yup.string().required('Required'),
    startDate: Yup.date().required('Required').nullable(),
})

export const eventDataInitialValues = {
    endDate: null,
    eventCity: "",
    eventCountry: "",
    eventName: "",
    eventPhoto: null,
    eventState: "",
    hostName: "",
    startDate: null,
}
