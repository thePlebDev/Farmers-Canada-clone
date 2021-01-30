import React from 'react';
import styled from 'styled-components'

import SearchForm from '../SearchForm'
import LoginTextInput from '../LoginTextInput'



const Container = styled.div`
  border:1px solid blue;
  width:100%;
  margin:0 auto;
`

const FormContainer = styled.div`
  max-width:400px;
  border:1px solid #29b706;
  margin:10px auto;
  padding:30px;
  border-radius:4px;
`

const Text = styled.h3`
  font-weight:500;
  color:#29b706;
  font-size:27px;

`



const Login =()=>{


  return(
    <Container>
      <FormContainer>
        <Text>Sign In</Text>

        <SearchForm>
          <LoginTextInput/>
          <LoginTextInput/>

        </SearchForm>

      </FormContainer>
    </Container>
  )
}


export default Login
