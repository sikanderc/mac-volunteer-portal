
export class AuthAdapter {

  static getUser() {
    return fetch(`${baseUrl}/current_user`, getRequest()).then(response => response.json());
  }

  static login(body) {
    return fetch(`${baseUrl}/login`, postRequest(body))
    .then(response => response.json())
  }


  static logout(body) {
    return fetch(`${baseUrl}/logout`, deleteRequest(body)).then(response => response.json())
  }


  static signUp(body) {
    return fetch(`${baseUrl}/signup`, postRequest(body))
    .then(response => response.json())
  }

}

export class UserApi {

  static getUsers() {
    return fetch(`${baseUrl}/users`, getRequest()).then(response => response.json());
  }

  static editUser(body, id) {
    return fetch(`${baseUrl}/users/${id}`, putRequest(body)).then(response => response.json())
  }


  static deleteUser(id) {
    return fetch(`${baseUrl}/users/${id}`, deleteRequest()).then(response => response.json())
  }

}

export class PostApi {

  static newPost(body) {
    return fetch(`${baseUrl}/new_post`, postRequest(body)).then(response => response.json())
  }

  static getPosts() {
    return fetch(`${baseUrl}/posts`, getRequest()).then(response => response.json());
  }

  static editPost(body, id) {
    return fetch(`${baseUrl}/posts/${id}`, putRequest(body)).then(response => response.json())
  }

  static deletePost(id) {
    return fetch(`${baseUrl}/posts/${id}`, deleteRequest()).then(response => response.json())
  }

  static newComment(body, postId) {
    return fetch(`${baseUrl}/posts/${postId}/comments`, postRequest(body)).then(response => response.json())
  }

  static getComments(postId) {
    return fetch(`${baseUrl}/posts/${postId}/comments`, getRequest()).then(response => response.json());
  }

  static deleteComment(postId, id) {
    return fetch(`${baseUrl}/posts/${postId}/comments/${id}`, deleteRequest()).then(response => response.json())
  }

}

export class EventApi {

  static newEvent(body) {
    return fetch(`${baseUrl}/new_event`, postRequest(body)).then(response => response.json())
  }

  static getEvents() {
    return fetch(`${baseUrl}/events`, getRequest()).then(response => response.json());
  }

  static editEvent(body, id) {
    return fetch(`${baseUrl}/events/${id}`, putRequest(body)).then(response => response.json())
  }

  static deleteEvent(id) {
    return fetch(`${baseUrl}/events/${id}`, deleteRequest()).then(response => response.json())
  }

  static newUserEvent(body, eventId) {
    return fetch(`${baseUrl}/events/${eventId}/connected`, postRequest(body)).then(response => response.json())
  }

  static getUserEvents() {
    return fetch(`${baseUrl}/events/connected`, getRequest()).then(response => response.json());
  }

}

export class UserEventApi {

  static getAllUserEvents() {
    return fetch(`${baseUrl}/user_events`, getRequest()).then(response => response.json());
  }

}

export class HourLogApi {

  static createHourLog(body) {
    return fetch(`${baseUrl}/new_hour_log`, postRequest({hour_log: body})).then(response => response.json())
  }

  static getHourLog(id) {
    return fetch(`${baseUrl}/hour_log/${id}`, getRequest()).then(response => response.json());
  }

  static editHourLog(body, id) {
    return fetch(`${baseUrl}/hour_log/${id}`, putRequest(body)).then(response => response.json())
  }

  static deleteHourLog(id) {
    return fetch(`${baseUrl}/hour_log/${id}`, deleteRequest()).then(response => response.json())
  }

}

const baseUrl = 'http://localhost:3000/api/v1'

function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`
  };
}

function getRequest() {
  return {
    headers: headers()
  };
}

function postRequest(body) {
  return {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

function putRequest(body) {
  return {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(body)
  };
}

function deleteRequest() {
  return {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  };
}
