

const mobileViewDispatch =(function(){
  return{
    false(){ 
      return {type:'FALSE'}
    },
    true(){
      return {type:"TRUE"}
    },
    openCart(){
      return{type:"OPEN"}
    },
    closeCart(){
      return{type:'CLOSE'}
    }
  }
}())


export default mobileViewDispatch
