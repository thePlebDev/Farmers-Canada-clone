import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Delivery from './Delivery';
import Local from './Local';
import Options from '../Options'

const Container = styled.div`
  text-align:center;

  width:90%;
  margin:10px auto;

`
const Text = styled.div`
    font-size:13px;
    font-weight:300;
    color:#555;
    width:90%;
    margin:10px auto;
    text-align:start;
`
const SoldBy = styled.h5`
  font-size:14px;
  font-weight:300px;
  color:#555;
  display:flex;
  align-items:center;
  text-align:center;
  width:90%;
  margin:10px auto;

`

const Names = styled.span`
  color:#29b706;

  font-size:14px;
  font-weight:300px;
  display:flex;
  align-items:center;
  margin:7px;
  margin-left:5px;
  text-align:center;
`



const Pickups =({farmName,item})=>{

  return(
      <Container>
        <Options item={item}/>
        <Local/>
        <Delivery/>
        <Text>Processing time: Ready to pickup or deliver in one day </Text>
        <SoldBy>
        Sold by:
        <Link to={`/farm/${farmName}`}>
          <Names>{farmName}</Names>
        </Link>

        </SoldBy>
      </Container>
  )
}

export default Pickups
