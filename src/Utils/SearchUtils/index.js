

const SearchUtils =(function(){

  return{
    validate:(state)=>{
      let errors ={};
      if(!state.search){
        errors.state ="PLEASE ENTER THE STATE"
      }
      return errors
    },
    validateVendor:(state)=>{
      let errors = {}
      if(!state.farm){
        errors.farm = "PLEASE ENTER FARM NAME"
      }
      if (!state.email) {
        errors.email ="PLEASE ENTER A VALID EMAIL!"
      }
      return errors
    }
  }
}())

export default SearchUtils;
