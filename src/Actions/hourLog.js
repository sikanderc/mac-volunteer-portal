import HourLogApi from '../Services/postApi'

export function fetchHourLogs() {
    return function(dispatch) {
      dispatch(fetchingHourLogs())
      HourLogApi.fetchHourLogs()
      .then((posts) => {
        dispatch(fetchedHourLogs(posts))
      })
    }
  }

  function fetchedHourLogs(posts) {
    return {
      type: 'FETCHED_POSTS',
      payload: posts
    }
  }

  function fetchingHourLogs() {
    return { type: 'FETCHING_POSTS'}
  }

  export function createHourLog(params) {
    return function(dispatch) {
      HourLogApi.createHourLog(params)
      .then((post) => {
        dispatch({})
      })
    }
  }
