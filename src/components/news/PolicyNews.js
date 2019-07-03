import React, { Component } from 'react'
import {connect} from 'react-redux'


class PolicyNews extends Component {
  componentWillMount(){
  }
  goRouter=()=>{
    //路由跳转 
    // 接受参数：this.props.location.state,刷新页面会丢失
    // this.props.history.push({pathname : '/movie',state:123});

    // 路由跳转，要是传参数的话必须在路由（router）表中配置<Route path=' /user/:id '   component={User}></Route>
    // 接受参数：this.props.match.params.id 
    this.props.history.push('/movie');
    //this.props.history.push(`/movie/${id}`);//js动态传参数

    //接受参数：this.props.location.query.day
    // this.props.history.push({ pathname : '/movie' ,query : { day: 'Friday'} })
  }
  render() {
    return (
      <div>
        <p onClick={this.goRouter}>政治新闻内容</p>
        <p>从状态管理中获取的数据：<span>{this.props.count}</span></p>
      </div>
    )
  }
}

const mapStateProps = state=>{
  return {
    count:state.count
  }
}
export default connect(mapStateProps)(PolicyNews)
