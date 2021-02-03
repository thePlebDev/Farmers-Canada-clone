import {useState,useEffect} from 'react'

const useSearchHook =(validateFunc,actionCreator)=>{
    const [state,setState] = useState({search:'',email:'',farm:''})
    const [errors,setErrors] = useState('')
    const [isSubmitting,setIsSubmitting] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validateFunc(state))
    setIsSubmitting(true)
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
    actionCreator(value)
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      //This is where the API call would go
    }
    setIsSubmitting(false)
  },[errors,isSubmitting])

  return{
    state,
    errors,
    handleSubmit,
    handleChange
  }
}

export default useSearchHook
