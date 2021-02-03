

const mobileCartDispatcher =(function(){

  return(
    {
      removeItem(productId,amount,price){
        return{
          type:'REMOVE_ITEM',
          payload:{productId:productId,amount:amount,price:price}
        }
      },

    }
  )
}())

export default mobileCartDispatcher
