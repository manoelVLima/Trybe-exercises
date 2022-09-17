import React, { Component } from 'react'
import { connect } from 'react-redux'
class Posts extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        OS POSTS FICARÃO AQUI 
      </div>
    )
  }
}
export default connect()(Posts);