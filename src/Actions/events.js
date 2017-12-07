import {EventApi} from '../Adapter'

export function createEvent(eventObj) {
  return dispatch => {
    dispatch(creatingEvent())
    EventApi.newEvent(eventObj)
    .then(eventData => {
      dispatch(newEvent(eventData))
    })
  }
}

export function fetchEvents() {
  return dispatch => {
    dispatch(fetchingEvents())
    EventApi.getEvents()
    .then(eventsData => {
      dispatch(fetchedEvents(eventsData))
    })
  }
}

export function updateEvent(params) {
  return dispatch => {
    dispatch(fetchingEvents())
    EventApi.editEvent(params)
    .then((eventData) => {
      dispatch(updateEvent(eventData))
    })
  }
}

export function removeEvent() {
  return dispatch => {
    dispatch(removingEvent())
    EventApi.deleteEvent()
    .then((event) => {
      dispatch(removedEvent(event))
    })
  }
}

export function creatingEvent() {
  return { type: 'CREATING_EVENT'}
}

export function newEvent(eventData) {
  return {
    type: 'NEW_EVENT',
    payload: eventData
  }
}

export function fetchingEvents() {
  return { type: 'FETCHING_EVENTS'}
}

export function fetchedEvents(events) {
  return {
    type: 'FETCHED_EVENTS',
    payload: events
  }
}

export function removingEvent() {
  return { type: 'REMOVING_EVENT'}
}

export function removedEvent(events) {
  return {
    type: 'REMOVED_EVENT',
    payload: events
  }
}
