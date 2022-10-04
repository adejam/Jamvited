import { useState } from "react"
import { FormattedMessage } from "react-intl"
import { MAX_FILE_SIZE, SUPPORTED_PHOTO_FORMAT } from "../../../../constants/variables"
import Text from "../Text"

interface IPreviewImageProps {
    file: Blob
}

const PreviewImage: React.FC<IPreviewImageProps> = ({ file }) => {
    const [preview, setPreview] = useState<string | undefined>()
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
        const photo: string | undefined = fileReader.result as string | undefined
        setPreview(photo)
    }

    const formatErrorMessage = !SUPPORTED_PHOTO_FORMAT.includes(file?.type) &&
      <FormattedMessage id="PreviewImage.formatErrorMessage" />
    const sizeErrorMessage = !SUPPORTED_PHOTO_FORMAT.includes(file?.type) &&
      <FormattedMessage id="PreviewImage.sizeErrorMessage" />
  return (
    <>
      {file && SUPPORTED_PHOTO_FORMAT.includes(file?.type) || file?.size <= MAX_FILE_SIZE ? (
        <div>{preview ? (<img alt="event photo" height="200" src={preview} width="200" />) : "Loading..."}</div>
      ) : (
        <>
          <Text isErrorText>{formatErrorMessage}</Text>
          <Text isErrorText>{sizeErrorMessage}</Text>
        </>
      )}
    </>
  )
}

export default PreviewImage
