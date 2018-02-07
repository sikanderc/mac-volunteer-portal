import {HourLogApi} from '../Adapter'

export function fetchHourLog(id) {
    return function(dispatch) {
      dispatch(fetchingHourLog())
      console.log("hourLogAPI", id, typeof(id));
      HourLogApi.getHourLog(id)
      .then((hourLog) => {
        dispatch(fetchedHourLog(hourLog))
      })
    }
  }

  function fetchedHourLog(hourLog) {
    return {
      type: 'FETCHED_HOUR_LOG',
      payload: hourLog
    }
  }

  function fetchingHourLog() {
    return { type: 'FETCHING_HOUR_LOG'}
  }

  export function createHourLog(params) {
    return function(dispatch) {
      HourLogApi.createHourLog(params)
      .then((post) => {
        dispatch({})
      })
    }
  }
