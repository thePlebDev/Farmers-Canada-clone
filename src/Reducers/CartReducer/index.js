
const cartState ={
  cart:[
    {
      name:'Peas',
      img:'https://images.unsplash.com/photo-1571070703151-4f99fa9cd3b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
      price:2.00,
      id:0,
      productId:75,
      amount:1,
      sellerId:0,
      sizeOptions: [{option:'1/2 pint'}],
      soldBy:"Frank Farms"
    }
  ],
amount:{finalValue:4.00}
}

const cartReducer =(state=cartState,action)=>{
  switch(action.type){
    case "REMOVE_ITEM":

      const cart = state.cart.filter((item,index)=>item.productId !== action.payload.productId)
      let newAmount = state.amount.finalValue - action.payload.amount
      let amount = {finalValue:newAmount}
      return {...state,cart,amount}

    case "ADD_ITEM":

    //BELOW SHOULD BE ADDED TO OWN util function

      let add = true
      state.cart.map((item,index)=>{
        if(item.id === action.payload.item.id){
          item.amount += action.payload.amount
          add = false
          return item
        }else{
          return item
        }
      })
      if(add){
        state.cart.push({...action.payload.item,amount:action.payload.amount})
      }

    let money = action.payload.item.price * action.payload.amount
    let newMoney = money + state.amount.finalValue





      console.log(state)

      return {...state,amount:{finalValue:newMoney}}
    default:
      return state
  }

}

export default cartReducer
