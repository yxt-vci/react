import React, { Component } from 'react'
import {connect} from 'react-redux'
import {add,addSync} from '../redux/Action'
import '../../css/news.scss'

class PlayNews extends Component {
  handleClick = ()=>{
    const {dispatch} = this.props;
    console.log(dispatch(add(3))); //同步也可以这种dispatch也可以app那种dispatch
    // dispatch(addSync(56)) // 异步
  }
  render() {
    return (
      <div>
        <p onClick={this.handleClick}>点击娱乐新闻内容</p>
        <p className="count">{this.props.count}</p>
      </div>
    )
  }
}
const mapStateProps = state=>{
  return {
    count:state.count
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onClick: () => {
//       dispatch({
//         type:"ADD",
//         count:22
//       });
//     }
//   }
// }
export default connect(mapStateProps)(PlayNews)
