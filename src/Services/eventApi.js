export default class EventApi {
  static fetchEvents() {
    return fetch('http://localhost:3000/api/v1/events').then(res => res.json())
  }

  static createEvent(params) {
    return fetch('http://localhost:3000/api/v1/event', {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}
