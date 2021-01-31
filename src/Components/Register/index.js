import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import CheckIcon from '@material-ui/icons/Check';

import LoginTextInput from '../LoginTextInput';
import SearchForm from '../SearchForm';

import useLoginHook from '../../Hooks/UseLoginHook';
import loginUtils from '../../Utils/LoginUtils';

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

const CheckContainer = styled.div`
  display:flex;
  align-items:center;
  margin-top:10px;
  margin-bottom:10px;

`

const CheckText = styled.div`
  font-size:16px;
  font-weight:300;
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
 cursor:pointer;
`

const TinyText = styled.div`
  font-size:12px;
  color:#29b706;
  font-weight:300;
  text-align:right;
  cursor:pointer;

`



const Register =()=>{
  const {state,handleChange,errors,handleSubmit} = useLoginHook(loginUtils.validate)


  return(
    <Container>
      <FormContainer>
        <Text>Become a Vendor</Text>
        <CheckContainer>
          <CheckIcon style={{color:'#29b706'}} />
          <CheckText>Offer Local Pickups or Cash on Delivery</CheckText>
        </CheckContainer>
        <CheckContainer>
          <CheckIcon style={{color:'#29b706'}} />
          <CheckText>Check orders within 24 hours</CheckText>
        </CheckContainer>
        <CheckContainer>
          <CheckIcon style={{color:'#29b706'}} />
          <CheckText>Setup your store up in ten minutes</CheckText>
        </CheckContainer>

          <SearchForm handleSubmit={handleSubmit}>
            <LoginTextInput error={errors.email} label={'Email address'} id="email" type={'text'} name='email' handleChange={handleChange} value={state.email}/>
            <LoginTextInput error={errors.password} label={'Password'} id='password' type={'password'} name="password" handleChange={handleChange} value={state.password}/>
            <Button> Register </Button>
          </SearchForm>

            <Link to='/login'>
              <TinyText> Already have a store? Login.</TinyText>
            </Link>

      </FormContainer>
    </Container>
  )
}


export default Register
