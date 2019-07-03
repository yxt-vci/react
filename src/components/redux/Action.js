
export const type = {
  ADD:"ADD",
  ADDSYNC:"ADDSYNC"
}

export const add = (count)=>{
  //{type: "ADD", count: 数字}
  return {
    type:type.ADD,
    count
  }
}
//异步操作第一个箭头函数可以传参数，第二个箭头函数内置dispatch、getState
export const addSync = (count)=>(dispatch)=>{
  setTimeout(() => {
    dispatch({type:type.ADDSYNC,count})
  }, 1000);
}