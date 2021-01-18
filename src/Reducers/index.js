import {combineReducers} from 'redux';


//const rootReducer = combineReducers({reducer1,reducer2})
// this says that the state shape should be {reducer1, reducer2}
//then the rootReducer gets passed to the store

//1) make a reducer
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
const rootReducer = combineReducers({mobileView})

export default rootReducer
