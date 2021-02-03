import React from 'react';
import styled from 'styled-components';

import SearchForm from '../../SearchForm'
import TextInputVendor from '../../TextInputVendor'

import useSearchHook from '../../../Hooks/UseSearchHook'
import searchUtils from '../../../Utils/SearchUtils';

const Container = styled.div`
    height:450px;
    background-color:#446084;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
    align-items:center;


`

const FormContainer = styled.div`
  background-color:white;
  border-radius:4px;
  padding:5px;
  width:295px;
  margin:0px auto;

  @media only screen and (max-width: 600px){
    align-self:start;
  }
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

const Button = styled.button`
  background-color:#29b706;
  border:1px solid #29b706;
  padding:6px 10px;
  color:white;
  width:140px;
  height:40px;
  margin:25px auto;
  border-radius:4px;
  cursor:pointer;

`

const MainTitle = styled.h1`
color:white;
text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
padding:0;
font-size:3.5em;
font-weight:500;
font-family:"Varela Round";
margin-top:10px;
margin-bottom:5px;

@media only screen and (max-width: 600px){
  display:none;
}

`

const MainTitle2 = styled(MainTitle)`
  color:#9c3;
`

const TitleContainer = styled.div`
  text-align:center
`




const Landing = ()=>{
  const {state,handleChange,handleSubmit,errors} = useSearchHook(searchUtils.validateVendor)
  return(
    <Container>
    <TitleContainer>
      <MainTitle>Create your own</MainTitle>
      <MainTitle2>Success Story!</MainTitle2>
    </TitleContainer>

      <FormContainer>
        <Title>Your Online Farm Store</Title>
        <SearchForm handleSubmit={handleSubmit}>
          <TextInputVendor placeholder="Farm Name" errors={errors.farm} name='farm' type="text" handleChange={handleChange} value={state.farm}/>
          <TextInputVendor placeholder="Email Adress" errors={errors.email} type='email' name="email" value={state.email} handleChange={handleChange}/>
          <Button type="submit">Become a vendor</Button>
        </SearchForm>
      </FormContainer>
    </Container>
  )
}


export default Landing
