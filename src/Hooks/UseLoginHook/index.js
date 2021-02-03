import {useEffect,useState} from 'react'



const useLoginHook =(validate)=>{
  const [state,setState] = useState({password:'',email:''})
  const [errors,setErrors] = useState({})

  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setIsSubmitting(true)
    setErrors(validate(state))
  }

  const handleChange =(e)=>{
    const {value,name} = e.target
    setState({...state,[name]:value})
  }

  useEffect(()=>{

    if(isSubmitting && Object.keys(errors).length === 0){
        //This is where the API call would go
    }
    setIsSubmitting(false)

  },[state,isSubmitting,errors])

  return{
    state,
    errors,
    handleChange,
    handleSubmit
  }

}


export default useLoginHook
