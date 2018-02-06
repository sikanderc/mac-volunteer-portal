import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchPosts } from '../../Actions/posts'
import { Segment } from 'semantic-ui-react'
import './PostList.css'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  posts = () => {
    let titles = []
    for(let key in this.props.data.posts) {
      titles.push(<li key={key}>
          <Segment.Group raised>
            <Segment color='blue' size={'big'}>
              Title:<br/>
              {this.props.data.posts[key].title}
            </Segment>
            <Segment>
              Posted by: <br/>
              {this.props.data.posts[key].user.email}
            </Segment>
            <Segment>
              Content:<br/>
              {this.props.data.posts[key].content}
            </Segment>
          </Segment.Group>
        </li>)
    }
    return titles
  }

  render() {
    return(
      <div className="postWrapper">
        <div className="postsListcontainer">
          {(!this.props.data.posts || ! this.props.data.posts[1] || !this.props.data.posts[1].user) ? "Loading..." : <div id="postsList"><ul>{this.posts()}</ul></div>}
        </div>
      </div>
    )
  }
}
// <Route exact path='/posts/:id' render={()=>(<PostCard />)} />
// <Route exact path='/posts/:userID' render={()=>(<UserPostList />)} />

function mapStateToProps(state) {
  console.log("POST LIST MAPSTTPRP", state);
  return {
    data: state.data,
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
