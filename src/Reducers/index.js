import {combineReducers} from 'redux';

import mobileView from './MobileReducers'
import groceryReducer from './GroceryReducers'
import sellersReducer from './SellersReducers'
import searchReducer from './SearchReducer'
import cartReducer from './CartReducer'


//const rootReducer = combineReducers({reducer1,reducer2})
// this says that the state shape should be {reducer1, reducer2}
//then the rootReducer gets passed to the store

//1) make a reducer

const rootReducer = combineReducers({mobileView,groceryReducer,sellersReducer,searchReducer,cartReducer})

export default rootReducer
