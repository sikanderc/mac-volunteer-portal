import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchPosts } from '../../Actions/posts'
import PostCard from './../Cards/PostCard';

class PostList extends Component {

  // componentDidMount() {
  //   this.props.fetchPosts()
  // }

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
// <Route exact path='/posts/:id' render={()=>(<PostCard />)} />
// <Route exact path='/posts/:userID' render={()=>(<UserPostList />)} />

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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
