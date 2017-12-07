import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import { fetchPosts } from '../../Actions/posts'
import { Card } from 'semantic-ui-react'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  posts = () => {
    let titles = []
    for(let key in this.props.data.posts) {
      titles.push(<Card key={key} header={this.props.data.posts[key].title} meta={this.props.data.posts[key].user.email} description={this.props.data.posts[key].content}/>)
    }
    return titles
  }

  render() {
    console.log("post list", this.props);
    return(
      <div className="postWrapper">
        <div className="postsList">
          {(!this.props.data.posts) ? "Loading..." : <div><Card.Group>{this.posts()}</Card.Group></div>}
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
