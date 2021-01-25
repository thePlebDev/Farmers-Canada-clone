import React from 'react';
import styled from 'styled-components';

import Delivery from './Delivery'
import Local from './Local'

const Container = styled.div`
text-align:center;

`
const Text = styled.div`
    font-size:13px;
    font-weight:300;
    color:#555;
`
const SoldBy = styled.h5`
  font-size:14px;
  font-weight:300px;
  color:#555;
  display:flex;
  align-items:center;
  margin:7px;
  text-align:center;

`

const Names = styled(SoldBy)`
  color:#29b706;
  margin-left:5px;
`



const Pickups =()=>{

  return(
      <Container>
        <Text>Processing time: Ready to pickup or deliver in one day </Text>
        <Local/>
        <Delivery/>
        <SoldBy>
        Sold by:
        <Names>Small Town Farms, Beamsville</Names>

        </SoldBy>
      </Container>
  )
}

export default Pickups
