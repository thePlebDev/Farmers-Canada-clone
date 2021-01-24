import React from 'react';
import styled from 'styled-components';

import Delivery from './Delivery'
import Local from './Local'

const Container = styled.div`

`
const Text = styled.div`
    font-size:13px;
    font-weight:300;
    color:#555;
`


const Pickups =()=>{

  return(
      <Container>
        <Text>Processing time: Ready to pickup or deliver in one day </Text>
        <Local/>
        <Delivery/>
      </Container>
  )
}

export default Pickups
