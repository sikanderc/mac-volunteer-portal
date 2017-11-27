import PostApi from '../Services/postApi'

export function fetchPosts() {
    return function(dispatch) {
      dispatch(fetchingPosts())
      PostApi.fetchPosts()
      .then((posts) => {
        dispatch(fetchedPosts(posts))
      })
    }
  }

  function fetchedPosts(posts) {
    return {
      type: 'FETCHED_POSTS',
      payload: posts
    }
  }

  function fetchingPosts() {
    return { type: 'FETCHING_POSTS'}
  }

  export function createPost(params) {
    return function(dispatch) {
      PostApi.createPost(params)
      .then((post) => {
        dispatch({})
      })
    }
  }
