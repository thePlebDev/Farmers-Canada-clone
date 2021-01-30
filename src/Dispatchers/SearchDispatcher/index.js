
const searchDispatcher = (function(){
  return{
    filter(value){
      return{
        type:'FILTER',
        payload:value
      }
    }
  }
}())

export default searchDispatcher
