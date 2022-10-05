import { IEvent } from "../contexts/EventContextProvided"

export interface IEventAction {
    type: string
    event: IEvent
}

const eventReducer = (state: IEvent[], action: IEventAction) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, {
        ...action.event}
      ]
    default:
      return state
  }
}

export default eventReducer
