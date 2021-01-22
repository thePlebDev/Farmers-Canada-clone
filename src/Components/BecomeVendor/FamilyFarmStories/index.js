import React from 'react';
import styled from 'styled-components';

import Stories from './Stories'


const Container = styled.div`
  width:80%;
  margin:70px auto;
  text-align:center;
`

const Title = styled.h2`
  color:#555;
  font-size:1.7em;
`
const Text = styled.p`
  margin-top:0;
  font-weight:300;
  color:#333;
  line-height:1.6;
  text-align:center;
`


const FamilyFarmStories =()=>{

  return(
    <Container>
        <Title>Family Farms Stories</Title>
        <Text>
          Farmers Canada is changing the way people eat. Making Farm Frech produce avaliable to everyone
          everywhere is the first step to future's sustainable cities. Hear stories from our farmers about how
          Farmers Canada is changing the world.
        </Text>
        <Stories/>
    </Container>
  )
}

export default FamilyFarmStories
