import React from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

import SearchInput from '../SearchInput'


const CloseContainer = styled.div`

color:white;
z-index:99;
position:absolute;
right:0;
top:0;
transition:0.35s all;
transform:${({state})=>state ? 'translateY(0px)':'translateY(15px)'}

`

const Container = styled.div`
  visibility:${({state})=>state ? 'visible' : 'hidden'};
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-color:black;
  opacity:0;
  z-index:9;
  transition:0.35s all;
  opacity:${({state})=>state ? '0.9':'0'};

`

const Nav = styled.div`
  background-color:white;
  height:100%;
  width:200px;
  position:fixed;
  transition:0.35s all;
  transform:${({state})=>state? 'translateX(0px)':'translateX(-200px)'};

`


const Modal = ({state,handleClick,mobileView,falseDispatcher})=>{

  return(
    <Container state={state}>
      <CloseContainer onClick={()=>handleClick()} state={state}>
        <CloseIcon style={{fontSize:'40px'}}/>
      </CloseContainer>
      <Nav state={state}>
        <SearchInput />
      </Nav>
    </Container>
  )
}


export default Modal
