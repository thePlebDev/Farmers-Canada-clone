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
  width:95%;
`

const Container = styled.div`
  position:relative;
`
const Error = styled.div`
  position:absolute;
  color:red;
  top:15px;
  left:20%;
  font-size:10px;
`



const TextInputVendor = ({placeholder,name,handleChange,value,type,errors}) =>{

  return(
    <Container>
      {
        errors
          ?
        <Error>{errors}</Error>
        :
        <div></div>
      }
      <label htmlFor="search"/>
      <Input id="search" type={type} onChange={(e)=>handleChange(e)} value={value} autocomplete="off" placeholder={placeholder} name={name}/>
    </Container>
  )
}


export default TextInputVendor
