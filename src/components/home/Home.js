import React, { Component } from 'react'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import routers from '../router/Router';
import '../../css/Home.css';

class Home extends Component {
  //https://www.cnblogs.com/faith3/p/9219446.html
  constructor(props){
    super(props);
    this.state = {
      name:"里斯"
    }
  }

  render() {
    return (
      <div className="home">
        <Router>
          <div>
            <div className="routerDiv" key="1"><Link to="/" replace>首页</Link></div>
            <div className="routerDiv" key="2"><Link to="/movie" replace>电影</Link></div>
            <div className="routerDiv" key="3"><Link to="/news" replace>新闻</Link></div>

            {
              routers.map((route,key)=>{
                if(route.exact){
                  return <Route key={key} exact path={route.path}
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                  ></Route>
                }else{
                  return <Route key={key} path={route.path} 
                  render={props => (
                    // pass the sub-routes down to keep nesting
                    <route.component {...props} routes={route.routes} />
                  )}
                  ></Route>
                }
              })
            }
            
            {/* <Route exact path="/" component={Page}></Route>
            <Route path="/movie" component={Movie}></Route>
            <Route path="/news" component={News}></Route> */}

          </div>
        </Router>
      </div>
    )
  }
}

export default Home
