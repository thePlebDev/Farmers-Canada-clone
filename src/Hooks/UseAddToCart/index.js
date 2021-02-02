import {useState} from 'react'




const useAddToCart =()=>{
  let [state,setState] = useState(1)

  const handleClickPositive =()=>{
    setState(state +=1)
  }

  const handleClickNegative =()=>{
      if(state === 1){

      }else {
        setState(state -=1)
      }
  }

  return{
    state,
    handleClickNegative,
    handleClickPositive
  }
}

export default useAddToCart
