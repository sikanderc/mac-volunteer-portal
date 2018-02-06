import {HourLogApi} from '../Adapter'

export function fetchHourLogs() {
    return function(dispatch) {
      dispatch(fetchingHourLogs())
      HourLogApi.fetchHourLogs()
      .then((hourLogs) => {
        dispatch(fetchedHourLogs(hourLogs))
      })
    }
  }

  function fetchedHourLogs(hourLogs) {
    return {
      type: 'FETCHED_HOUR_LOGS',
      payload: hourLogs
    }
  }

  function fetchingHourLogs() {
    return { type: 'FETCHING_HOUR_LOGS'}
  }

  export function createHourLog(params) {
    return function(dispatch) {
      HourLogApi.createHourLog(params)
      .then((post) => {
        dispatch({})
      })
    }
  }
