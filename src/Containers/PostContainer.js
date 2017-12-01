import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import { fetchPosts } from '../Actions/posts'
import PostForm from './../Components/Forms/PostForm';
import PostList from './../Components/Lists/PostList';
import EventPostList from './../Components/Lists/EventPostList';
import PostCard from './../Components/Cards/PostCard';

class PostContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchPosts()
  // }

  render() {
    return (
      <div>
        <Route path='/posts' render={()=>(<h2>Posts Container</h2>)} />
        <Switch>
          <Route exact path='/posts' render={()=>(<PostList />)} />
          <Route exact path='/posts/new' render={()=>(<PostForm />)} />
        </Switch>
      </div>
    )
  }
}
// <Route exact path='/posts/:id' render={()=>(<PostCard />)} />
// <Route exact path='/posts/:userID' render={()=>(<EventPostList />)} />

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
