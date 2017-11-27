import EventApi from '../Services/eventApi'

export function fetchEvents() {
  return function(dispatch) {
    dispatch(fetchingEvents())
    EventApi.fetchEvents()
    .then((events) => {
      dispatch(fetchedEvents(events))
    })
  }
}

function fetchedEvents(events) {
  return {
    type: 'FETCHED_EVENTS',
    payload: events
  }
}

function fetchingEvents() {
  return { type: 'FETCHING_EVENTS'}
}


export function createEvent(params) {
  return function(dispatch) {
    EventApi.createEvent(params)
    .then((event) => {
      dispatch({})
    })
  }
}
