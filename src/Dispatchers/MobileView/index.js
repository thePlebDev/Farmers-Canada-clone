

const mobileViewDispatch =(function(){
  return{
    false(){
      return {type:'FALSE'}
    },
    true(){
      return {type:"TRUE"}
    }
  }
}())


export default mobileViewDispatch
