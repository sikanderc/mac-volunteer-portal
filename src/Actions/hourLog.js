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

  function hourLogError(err) {
    return {
      type: 'HOUR_LOG_ERROR',
      payload: err
    }
  }

  function hourLogSuccess() {
    return {
      type: 'HOUR_LOG_SUCCESS',
      payload: {
        message: "Thank you for submitting your hour log. Your hours will be reviewed for approval."
      }
    }
  }

  export function clearHourLogMessages() {
    return {type: "CLEAR_HOUR_LOG_MESSAGES"}
  }

  export function createHourLog(hourLog) {
    return function(dispatch) {
      HourLogApi.createHourLog(hourLog)
      .then(res => {
        if (res.error) {
          dispatch(hourLogError())
        } else {
          dispatch(hourLogSuccess())
        }
      })
    }
  }
