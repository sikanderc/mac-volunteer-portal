function rootReducer(
  state = {posts: [], events: [], isLoading: false },
  action
) {
  switch (action.type) {
    case 'FETCHED_POSTS':
      return {...state, posts: action.payload, isLoading: false }
    case 'FETCHED_EVENTS':
      return {...state, events: action.payload, isLoading: false }
    case 'FETCHING_POSTS':
      return {...state, isLoading: true }
    case 'FETCHING_EVENTS':
      return {...state, isLoading: true }
    default:
      return state
  }
}
