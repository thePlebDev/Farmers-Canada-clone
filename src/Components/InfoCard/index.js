import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color:rgb(153,204,51);
  padding:30px 0;
`

const Title = styled.h2`
  text-transform:uppercase;
  color:#fff;
  padding:0;
  width:80%;
  margin:20px auto;
  text-align:center;
  @media only screen and (min-width: 768px) {
  font-size:40px;
}
`

const Info = styled.p`
  color:#fff;
  text-align:center;
  margin:10px auto;
  width:80%;
  @media only screen and (min-width: 768px) {
  font-size:20px;
}
`

const ButtonContainer  = styled.div`
  width:80%;
  margin:20px auto;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Button1 = styled.div`
  padding:5px 10px;
  color:#fff;
  cursor:pointer;
  font-weight:bold;
  text-align:center;
  border-radius:30px;
  border:1px solid white;
  margin:10px 10px;
  font-size:0.8em;
  @media only screen and (min-width: 768px) {
  font-size:20px;
  padding:5px 30px;
}
`
const Button2 = styled(Button1)`
  background-color:#29b706;
`

const InfoCard = ()=>{

  return(
    <Container>
      <Title>Become and online Vendor</Title>
      <Info>
      Own a Micro or Multi Acreage Farm?
      Spend more time growing food and let us take care of distributing and and marketing. Help us build healthy
      and sustainable cities.
      </Info>
      <Info>buy and sell locally</Info>
      <ButtonContainer>
      <Button1>Learn More</Button1>
      <Button2>Become a Vendor</Button2>
      </ButtonContainer>
    </Container>
  )
}

export default InfoCard
