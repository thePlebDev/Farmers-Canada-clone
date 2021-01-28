
const initialState ={
  modal:false,
  cartNav:false
}

const mobileView =(state = initialState, action)=>{
  switch(action.type){
    case "FALSE":
      return {...state,modal:false}
    case "TRUE":
      return {...state,modal:true}
    case "OPEN":
      return{...state,cartNav:true}
    case "CLOSE":
      return {...state,cartNav:false}
    default:
      return state
  }
}

export default mobileView
