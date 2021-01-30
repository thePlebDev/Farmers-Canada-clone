import React from 'react';
import styled from 'styled-components'

const Container = styled.div`

`



const LoginTextInput = ()=>{

  return(
    <Container>
        <label htmlFor="login"/>
        <input id="login" />
    </Container>
  )
}

export default LoginTextInput
