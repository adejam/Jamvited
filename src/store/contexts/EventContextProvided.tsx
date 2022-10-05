import React, { useEffect, useReducer } from "react"
import eventReducer, { IEventAction } from "../reducers/eventReducer"

interface IEventContextProviderProps {
    children: React.ReactNode
}

export interface IEvent {
    endDate: string,
    eventCity: string,
    eventCountry: string,
    eventName: string,
    eventPhoto: Blob,
    eventState: string,
    hostName: string,
    id: string,
    startDate: string,
}

type EventContextValue = {
  events: IEvent[] | null
  dispatch: (action: IEventAction) => void;
}

export const EventContext = React.createContext<EventContextValue>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    dispatch: () => {},
    events: [],
  })

const EventContextProvider = ({ children }: IEventContextProviderProps) => {
    const [events, dispatch] = useReducer(eventReducer, [], () => {
        const localData = localStorage.getItem('events')
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events))
    }, [events])

    return (
    <EventContext.Provider value={{dispatch, events}}>{children}</EventContext.Provider>
)
    }

export default EventContextProvider
