import React from 'react';
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const IncreaseContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid rgba(0,0,0,0.3);
  padding:2px;
  width:90px;
  height:30px;
  margin-top:10px;
  margin-bottom:10px;

`


const Number = styled.div`
  border:1px solid rgba(0,0,0,0.3);
  border-top:none;
  border-bottom:none;
  height:85%;
  padding:5px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const ButtonContainer = styled.div`

  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`


const ItemIncreaseButton =()=>{
  return(
    <IncreaseContainer>
      <ButtonContainer>
        <RemoveIcon  style={{fontSize:'15px'}}/>
      </ButtonContainer>
        <Number>0</Number>
    <ButtonContainer>
      <AddIcon style={{fontSize:'15px'}} />
    </ButtonContainer>
    </IncreaseContainer>
  )
}

export default ItemIncreaseButton
