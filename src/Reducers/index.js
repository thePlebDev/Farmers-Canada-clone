import {combineReducers} from 'redux';

import mobileView from './MobileReducers'
import groceryReducer from './GroceryReducers'
import sellersReducer from './SellersReducers'


//const rootReducer = combineReducers({reducer1,reducer2})
// this says that the state shape should be {reducer1, reducer2}
//then the rootReducer gets passed to the store

//1) make a reducer

const rootReducer = combineReducers({mobileView,groceryReducer,sellersReducer})

export default rootReducer
