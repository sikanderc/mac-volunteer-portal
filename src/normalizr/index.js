import { schema, normalize } from 'normalizr'

const user = new schema.Entity('users', {
  events: [newEvent],
  hourLogs: [hourLog],
  posts: [post],
  comments: [comment]
})

const post = new schema.Entity('posts', {
  comments: [comment],
  author: user
})

const comment = new schema.Entity("comments", {
  commenter: user,
  post: post
})

const newEvent = new schema.Entity('events', {
  users: [user],
  hourLogs: [hourLog],
  posts: [post],
  userEvents: [userEvent],
  admin: user
})

const hourLog = new schema.Entity('hourLog', {
  volunteer: user,
  event: newEvent
})

const userEvent = new schema.Entity('userEvents', {
  connectedUser: user,
  connectedEvent: newEvent
})

const userList = [user]
const postList = [post]
const commentList = [comment]
const eventList = [newEvent]
const hourLogList = [hourLog]
const userEventList = [userEvent]

export const userNormalizr = (userData) => normalize(userData, userList)
export const postNormalizr = (postData) => normalize(postData, postList)
export const commentNormalizr = (commentData) => normalize(commentData, commentList)
export const eventNormalizr = (eventData) => normalize(eventData, eventList)
export const hourLogNormalizr = (hourLogData) => normalize(hourLogData, hourLogList)
export const userEventNormalizr = (userEventData) => normalize(userEventData, userEventList)

export default { userNormalizr, postNormalizr, commentNormalizr, eventNormalizr, hourLogNormalizr, userEventNormalizr }
