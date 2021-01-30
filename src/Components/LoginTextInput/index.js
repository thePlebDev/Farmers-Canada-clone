import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

`
const Input = styled.input`
  border:1px solid #a6a6a6;
  border-top-color: #949494;
  border-radius:3px;
  box-shadow:0 1px 0 rgba(255,255,255,0.5);
  width:100%;
  height:2.5em;
  margin:10px auto;
  margin-top:0px;
`


const LoginTextInput = ({label})=>{

  return(
    <Container>
        <label htmlFor="login">{label}</label>
        <Input id="login" />
    </Container>
  )
}

export default LoginTextInput
