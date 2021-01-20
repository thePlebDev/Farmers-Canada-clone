import React from 'react';
import styled from 'styled-components';



const Input = styled.input`
  border: 1px solid #c1bfbf;
  box-shadow:inset 0 1px 1px 1px rgba(0,0,0,0.0.75);
  border-radius:4px;
  padding:12px 6px;
  font-size:17px;
  margin: 0 auto;
  margin-top:30px;
  width:90%;
`

const TextInputVendor = ({placeholder}) =>{

  return(
    <>
      <label htmlFor="search"/>
      <Input id="search" type="text" autocomplete="off" placeholder={placeholder}/>
    </>
  )
}


export default TextInputVendor
