import { useContext, useEffect, useState } from "react"
import { FormattedMessage } from "react-intl"
import { useParams } from "react-router-dom"
import PreviewImage from "../../components/atomic-ui/atoms/PreviewImage"
import Text from "../../components/atomic-ui/atoms/Text"
import { EventContext, IEvent } from "../../store/contexts/EventContextProvided"

const EventPage = () => {
  const [event, setEvent] = useState<IEvent | undefined>()
  const { id } = useParams()
  const { events } = useContext(EventContext)
  if (!id) {
    return null
  }

  useEffect(() => {
    const currentEvent = events?.filter(event => event.id === id)[0]
  console.log(currentEvent)
    setEvent(currentEvent)
  }, [id])

  return (
    <div>
      {event ? (
        <>
          <div>
            <h1>{event.eventName}</h1>
          </div>
          <div>
            <PreviewImage file={event.eventPhoto} />
          </div>
          <div>
            <p>{event.hostName}</p>
            {/* <p>{event.startDate}</p> */}
            {/* <p>{event.endDate}</p> */}
            <p>{event.eventCountry}</p>
            <p>{event.eventState}</p>
            <p>{event.eventCity}</p>
          </div>
        </>
      ) : <Text><FormattedMessage id="EventPage.loadingEvent" /></Text>}
    </div>
  )
}

export default EventPage
