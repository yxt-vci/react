import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

export class News extends Component {

  componentWillMount(){
    // console.log(this.props.routes)
  }

  render() {
    return (
      <div>
        <p><Link to="/news/" replace>娱乐新闻</Link></p>
        <p><Link to="/news/policynews" replace>政治新闻</Link></p>
        {
          this.props.routes.map((route,key)=>{
            return <Route key={key} exact path={route.path} component={route.component}></Route>
          })
        }
        
      </div>
    )
  }
}

export default News
