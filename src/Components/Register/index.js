import React from 'react';
import styled from 'styled-components'

import CheckIcon from '@material-ui/icons/Check';


const Container = styled.div`
  border:2px solid blue;
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

`

const CheckText = styled.div`
  font-size:16px;
  font-weight:300;
`


const Register =()=>{


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
          <CheckText>Setup your store in ten minutes</CheckText>
        </CheckContainer>
      </FormContainer>
    </Container>
  )
}


export default Register
