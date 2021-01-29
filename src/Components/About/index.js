import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin-top:10px;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  justify-items:center;
`

const Title = styled.div`
  font-size:1em;
  font-weight:600;
  text-transform:uppercase;
  color:#333;
  margin-bottom:10px;
  margin-top:20px;
`

const Text = styled.div`
  font-size:15px;
  font-weight:300px;
  color:#333333;
  line-height:1.6;
  padding:2px;
`
const SubContainer = styled.div`
  width:300px;
`





const About =()=>{
  return(
    <Container>

      <SubContainer >
        <Title>About</Title>
        <Text>
          Farmers Canada is an initiative to build stronger and sustainable community.
          We believe in providing people easy online access to local, healthy, and organic food.
          Discover local farmers and their year round and seasonally available produce.
        </Text>
      </SubContainer>

      <SubContainer>
        <Title>Customer Service</Title>
        <Text>Contact Us</Text>
        <Text>Terms and Conditions</Text>
        <Text>Farmers Canada Support Center</Text>
        <Text>Frequently Asked Questions</Text>
        <Text>Privacy Policy</Text>
      </SubContainer>

      <SubContainer>
        <Title>Other Business</Title>
        <Text>Our Network</Text>
        <Text>Features</Text>
        <Text>Careers</Text>
        <Text>Seller Information Center</Text>
        <Text>Disclaimer</Text>

      </SubContainer>
    </Container>
  )
}

export default About
