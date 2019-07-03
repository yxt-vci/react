import React, { Component } from 'react';
import Home from './components/home/Home.js';
import './css/App.css';
import {connect} from 'react-redux'
import {add} from './components/redux/Action'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home name="章三"></Home>
        <div onClick={this.props.onClick}>变化</div>
        <p>{this.props.count}</p>
      </div>
    );
  }
}
const mapStateProps = state=>{
  return {
    count:state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(add(4))
    }
  }
}
export default connect(mapStateProps,mapDispatchToProps)(App);
