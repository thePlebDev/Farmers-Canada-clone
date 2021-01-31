import React,{useEffect,useState} from 'react';
import styled from 'styled-components'

import SearchForm from '../SearchForm'
import LoginTextInput from '../LoginTextInput'
import useLoginHook from '../../Hooks/UseLoginHook'
import loginUtils from '../../Utils/LoginUtils'



const Container = styled.div`

  width:100%;
  margin:20px auto;
`

const FormContainer = styled.div`
  max-width:240px;
  border:1px solid #29b706;
  margin:10px auto;
  padding:30px;
  border-radius:4px;
  @media only screen and (min-width: 770px) {
    max-width:330px
}
`

const Text = styled.h3`
  font-weight:500;
  color:#29b706;
  font-size:27px;
`

const Button = styled.button`
 background-color:#29b706;
 border-radius:4px;
 text-align:center;
 padding:10px 20px;
 border:none;
 width:100px;
 color:white;
 font-size:15px;
 font-weight:500;
`

const Lost = styled(Text)`
  font-weight:300;
  font-size:17px;
`
const Farmers = styled.div`
  color:#767676;
  font-weight:400;
  font-size:14px;
  text-align:center;
  margin:20px auto;
  display:flex;
  flex-direction:row;
   &:after{
     content:'';
     flex:1 1;
     border-bottom:1px solid #767676;
     margin:auto;
   };
   &:before{
     content:'';
     flex:1 1;
     border-bottom:1px solid #767676;
     margin:auto;
   }
`

const BecomeVendor = styled.div`
  text-align:center;
  padding:9px 10px;
  border-radius:4px;
  margin-top:25px;
  font-weight:500;
  color:#29b706;
  border:1px solid #29b706;
`



const Login =()=>{
  const {state,errors,handleChange,handleSubmit} = useLoginHook(loginUtils.validate)


  return(
    <Container>
      <FormContainer>
        <Text>Sign In</Text>

        <SearchForm handleSubmit={handleSubmit}>
          <LoginTextInput label={'Username or email address'} error={errors.email} id={'email'} type={'text'} handleChange={handleChange} value={state.email} name="email"/>
          <LoginTextInput label={'Password'} type={'password'} error={errors.password} id={'password'} handleChange={handleChange} value={state.password} name={'password'}/>

          <Button type="submit" >Sign In</Button>
        </SearchForm>
          <Lost>Lost your password ?</Lost>
          <Farmers>New to Farmers Canada ?</Farmers>
          <BecomeVendor>Create an Account</BecomeVendor>
      </FormContainer>
    </Container>
  )
}


export default Login
