
const mobileView =(state = false,action)=>{
  switch(action.type){
    case "FALSE":
      state = false
      return state
    case "TRUE":
      state = true;
      return state
    default:
      return state
  }
}

export default mobileView
