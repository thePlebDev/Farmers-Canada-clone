import {useState,useEffect} from 'react'

const useSearchHook =(validateFunc)=>{
    const [state,setState] = useState({search:''})
    const [errors,setErrors] = useState('')
    const [isSubmitting,setIsSubmitting] = useState(false)

  const handleSubmit =(e)=>{
    e.preventDefault()
    setErrors(validateFunc(state))
    setIsSubmitting(true)
    console.log('SUBMITED')
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      console.log('this is where the api call will go')
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
