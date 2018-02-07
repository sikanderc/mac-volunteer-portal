import { userNormalizr, postNormalizr, commentNormalizr, eventNormalizr, hourLogNormalizr, userEventNormalizr } from '../normalizr'

const initialState = {
  id: null,
  email: null,
  loggedIn: false,
  loading: false,
  superAdmin: false,
  users: {},
  posts: {},
  events: {},
  hour_log: {},
  connected: {},
  data: {
    users: null,
    comments: null,
    posts: null,
    events: null,
    hour_log: null,
    connected: null
  },
  hourLogError: false,
  hourLogSuccess: null
}

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
      console.log("jwt test", action.payload);
      localStorage.setItem("jwt", action.payload.jwt);
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        superAdmin: action.payload.super_admin,
        loggedIn: true,
        loading: false,
        loginError: null
      };
      case "LOGIN_ERROR":
        return {...state, loginError: action.payload}
      case "GET_USER":
        localStorage.getItem("jwt", action.payload.jwt);
        return {
          ...state,
          id: action.payload.id,
          email: action.payload.email,
          superAdmin: action.payload.super_admin,
          loggedIn: true,
          loading: false
        };
    case "LOG_OUT_USER":
      localStorage.removeItem("jwt");
      return { ...state, email: null, loggedIn: false };

    case "SET_USER_DATA":
      let normalizedUsers = userNormalizr(action.payload)
      return { ...state, users: {...state.users, ...normalizedUsers.entities.users}, data: normalizedUsers.entities, posts: normalizedUsers.entities.posts, comments: normalizedUsers.entities.comments, events: normalizedUsers.entities.events, hourLog: normalizedUsers.entities.hourLog, userEvents: normalizedUsers.entities.userEvents, results: normalizedUsers.result }
    case "FETCHED_POSTS":
      let normalizedPosts = postNormalizr(action.payload)
      return { ...state, posts: {...state.posts, ...normalizedPosts.entities.posts}, data: normalizedPosts.entities, comments: normalizedPosts.entities.comments,  results: normalizedPosts.result, loading: false }
    case "SET_COMMENT_DATA":
      let normalizedComments = commentNormalizr(action.payload)
      return { ...state, comments: {...state.comments, ...normalizedComments.entities.comments}, data: normalizedComments.entities, results: normalizedComments.result }
    case "FETCHED_EVENTS":
      let normalizedEvents = eventNormalizr(action.payload)
      return { ...state, events: {...state.events, ...normalizedEvents.entities.events}, data: normalizedEvents.entities, posts: normalizedEvents.entities.posts, users: normalizedEvents.entities.users, hourLog: normalizedEvents.entities.hourLog, userEvents: normalizedEvents.entities.userEvents, results: normalizedEvents.result, loading: false }
    case "FETCHED_HOUR_LOG":
      let normalizedhourLog = hourLogNormalizr(action.payload)
      return { ...state, hourLog: {...state.hourLog, ...normalizedhourLog.entities.hourLog}, data: normalizedhourLog.entities, results: normalizedhourLog.result, loading: false }
    case "HOUR_LOG_ERROR":
      return {
        ...state,
        hourLogError: true
      }
    case "HOUR_LOG_SUCCESS":
      return {
        ...state,
        hourLogSuccess: true
      }
    case "CLEAR_HOUR_LOG_MESSAGES":
      return {
        ...state,
        hourLogError: false,
        hourLogSuccess: false
      }
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

    case 'FETCHING_HOUR_LOG':
      return {...state, loading: true }



    default:
      return state;
  }
}
