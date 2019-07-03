import React, { Component } from 'react'

export class Movie extends Component {
  componentWillMount(){
    // console.log(this.props.location.state)
    console.log(this.props.match.params);
    // console.log(this.props.location.query)
  }
  fun(username){
    let obj = {
      ab:"123",
      username
    }
    console.log(obj)
  }
  render() {
    return (
      <div onClick={this.fun.bind(this,"abcde")}>
       <p>电影内容</p> 
      </div>
    )
  }
}

export default Movie
