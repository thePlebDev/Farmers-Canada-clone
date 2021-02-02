

const cartDispatcher =(function(){
  return{
    addItem(amount,item){
      return{
        type:'ADD_ITEM',
        payload:{item,amount}
      }
    }
  }
}())


export default cartDispatcher
