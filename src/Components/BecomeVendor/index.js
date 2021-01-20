import React from 'react';
import styled from 'styled-components';

import SearchForm from '../SearchForm'
import TextInputVendor from '../TextInputVendor'
import {Vendor} from '../../Assets/Styles/Buttons'

const Container = styled.div`
    height:450px;
    background-color:#446084;
    display:grid;
    justify-content:center;
    padding-top:20px;

`

const FormContainer = styled.div`
  background-color:white;
  height:70%;
  border-radius:4px;
  padding:5px;
  width:295px;
`

const Title = styled.h2`
  border-bottom: 1px solid #e4e4e4;
  padding:24px 10px 18px 10px;
  margin-bottom:0;
  color:#444;
  font-size:24px;
  font-weight:500;
  text-align:center;
  margin-top:0.2em;
`

const Button = styled(Vendor)`
  margin:20px auto;
`




const BecomeVender =()=>{

  return(
    <Container>
      <FormContainer>
        <Title>Your Online Farm Store</Title>
        <SearchForm>
          <TextInputVendor placeholder="Farm Name"/>
          <TextInputVendor placeholder="Email Adress"/>
        </SearchForm>

        <Button>Become a vendor</Button>
      </FormContainer>
    </Container>
  )
}


export default BecomeVender
