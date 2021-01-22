import React from 'react'
import styled from 'styled-components';

import Cards from '../Cards'
import CustomerBase from '../CustomerBase'
import {customerInfoData,whatYouGetInfo} from '../CustomerBase/data.js';
import {LargeVendor} from '../../../Assets/Styles/Buttons'


const Container = styled.div`


`
const TextContainer = styled.div`
  margin-top:50px;
`

const Text1 = styled.h2`
  text-align:center;
  font-weight:300;
  font-family:"Varela Round";
  color:#554;
  margin-bottom:0;
  font-size:1.9em;

  @media (min-width:549px){
    font-size:2.4em;
  }

`
const Text2 = styled.h3`
  text-align:center;
  font-weight:300;
  font-family: "Varela Round";
  margin-top:10px;
  color:#555;
  opacity:0.9;
`

const SellLocal = ()=>{

  return(
    <Container>
      <TextContainer>
          <Text1>Signup To Sell Local</Text1>
          <Text2> Start by createing a listing. It's like a profile page for your Farm.</Text2>
      </TextContainer>
      <Cards/>
      <CustomerBase info={customerInfoData} fontColor="white" backColor={'#9c3'} title={'Are You Looking for a Permanent & Strong Customer Base?'}/>
      <CustomerBase info={whatYouGetInfo} fontColor="black" backColor={'white'} title={'What You Get'}>
        <LargeVendor>Become a vendor</LargeVendor>
      </CustomerBase>
    </Container>
  )
}

export default SellLocal
