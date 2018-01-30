import { userNormalizr, postNormalizr, commentNormalizr, eventNormalizr, hourLogNormalizr, userEventNormalizr } from '../normalizr'

const initialState = { id: null, email: null, loggedIn: false, loading: false, users: {}, posts: {}, events: {}, hour_logs: {}, connected: {}, data: {users: [], comments: [], posts: [], events: [], hour_logs: [], connected: [] }}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    //add in loading case and additional state
    case "SINGING_UP_USER":
      return { ...state, loading: true };
    case "SIGNED_UP_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        loggedIn: true,
        loading: false
      };
    case "LOADING_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        loggedIn: true,
        loading: false
      };
      case "GET_USER":
        localStorage.getItem("jwt", action.payload.jwt);
        return {
          ...state,
          id: action.payload.id,
          email: action.payload.email,
          loggedIn: true,
          loading: false
        };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, email: null, loggedIn: false };

    case "SET_USER_DATA":
      let normalizedUsers = userNormalizr(action.payload)
      return { ...state, users: {...state.users, ...normalizedUsers.entities.users}, data: normalizedUsers.entities, posts: normalizedUsers.entities.posts, comments: normalizedUsers.entities.comments, events: normalizedUsers.entities.events, hourLogs: normalizedUsers.entities.hourLogs, userEvents: normalizedUsers.entities.userEvents, results: normalizedUsers.result }
    case "FETCHED_POSTS":
      let normalizedPosts = postNormalizr(action.payload)
      return { ...state, posts: {...state.posts, ...normalizedPosts.entities.posts}, data: normalizedPosts.entities, comments: normalizedPosts.entities.comments,  results: normalizedPosts.result, loading: false }
    case "SET_COMMENT_DATA":
      let normalizedComments = commentNormalizr(action.payload)
      return { ...state, comments: {...state.comments, ...normalizedComments.entities.comments}, data: normalizedComments.entities, results: normalizedComments.result }
    case "FETCHED_EVENTS":
      let normalizedEvents = eventNormalizr(action.payload)
      return { ...state, events: {...state.events, ...normalizedEvents.entities.events}, data: normalizedEvents.entities, posts: normalizedEvents.entities.posts, users: normalizedEvents.entities.users, hourLogs: normalizedEvents.entities.hourLogs, userEvents: normalizedEvents.entities.userEvents, results: normalizedEvents.result, loading: false }
    case "SET_HOUR_LOG_DATA":
      let normalizedHourLogs = hourLogNormalizr(action.payload)
      return { ...state, hourLogs: {...state.hourLogs, ...normalizedHourLogs.entities.hourLogs}, data: normalizedHourLogs.entities, results: normalizedHourLogs.result }
    case "SET_USER_EVENT_DATA":
      let normalizedUserEvents = userEventNormalizr(action.payload)
      return { ...state, userEvents: {...state.userEvents, ...normalizedUserEvents.entities.userEvents}, data: normalizedUserEvents.entities, results: normalizedUserEvents.result }
    case "UPDATE_USER":
      let newUsers = Object.keys(state.data.users).map(u => {
        if (state.data.users[u].id === action.payload.id) {
          state.data.users[u] = action.payload
          return state.data.users[u]
        }
        return state.data.users[u]
      })
      return { ...state, data: { ...state.data, users: newUsers } }
    case 'CREATING_EVENT':
      return {...state, loading: true }
    case 'NEW_EVENT':
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        loading: false
      };
    case 'FETCHING_POSTS':
      return {...state, loading: true }
    case 'FETCHING_EVENTS':
      return {...state, loading: true }

    case 'FETCHED_USER_EVENTS':
      return {...state, userEvents: normalizedPosts.entities.userEvents, loading: false }
    case 'FETCHING_USER_EVENTS':
      return {...state, loading: true }

    case 'FETCHED_HOUR_LOGS':
      return {...state, hourLogs: normalizedEvents.entities.hourLogs, loading: false }
    case 'FETCHING_HOUR_LOGS':
      return {...state, loading: true }



    default:
      return state;
  }
}
