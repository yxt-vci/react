import {type} from './Action';

const initState = {
  count:1
}
export default (state=initState,action)=>{
  switch(action.type){
    case type.ADD:
    return { 
      ...state,
      count:action.count
    }
    case type.ADDSYNC:
    return { 
      ...state,
      count:action.count
    }
    default:
    return state;
  }
}