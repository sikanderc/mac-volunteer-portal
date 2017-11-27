import React, { Component } from 'react'
import {connect} from 'react-redux'
import { fetchPosts } from '../Actions/posts'

class PostContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
      { this.props.isLoading ? <p>Loading</p> : <p>Not Loading</p> }
        <ul>
          <li />
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    posts: state.posts,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
