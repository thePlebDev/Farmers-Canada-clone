

const SearchUtils =(function(){

  return{
    validate:(state)=>{
      let errors ={};
      if(!state.search){
        errors.state ="PLEASE ENTER THE STATE"
      }
      return errors
    }
  }
}())

export default SearchUtils;
