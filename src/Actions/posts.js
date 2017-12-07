import {PostApi} from '../Adapter'

export function fetchPosts() {
    return dispatch => {
      dispatch(fetchingPosts())
      PostApi.getPosts()
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
