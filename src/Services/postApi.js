export default class PostApi {
  static fetchPosts() {
    return fetch('http://localhost:3000/api/v1/posts').then(res => res.json())
  }

  static createPost(params) {
    return fetch('http://localhost:3000/api/v1/post', {
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(params)
    }).then(res => res.json())
  }
}
