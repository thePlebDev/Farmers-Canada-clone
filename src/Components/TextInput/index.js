import React from 'react'
import styled from 'styled-components'


const TextInput =({state,handleChange,name})=>{
  console.log(state)

  return(
    <div>
    <label htmlFor="search"></label>
    <input id="search" type="text" name={name} value={state} onChange={(e)=>handleChange(e)}/>
    </div>
  )
}

export default TextInput
