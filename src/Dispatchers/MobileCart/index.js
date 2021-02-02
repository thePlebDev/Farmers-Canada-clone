

const mobileCartDispatcher =(function(){

  return(
    {
      removeItem(productId,amount){
        return{
          type:'REMOVE_ITEM',
          payload:{productId:productId,amount:amount}
        }
      },

    }
  )
}())

export default mobileCartDispatcher
