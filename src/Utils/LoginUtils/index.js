

const loginUtils =(function(){

  return{
    validate(state){
      let errors = {}
      if (!state.email){
        errors.email ="please enter an email"
      }
      if(!state.password){
        errors.password ="please enter an password"
      }
      return errors
    }
  }

}())


export default loginUtils
