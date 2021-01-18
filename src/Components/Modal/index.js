import React,{useState} from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';

import SearchInput from '../SearchInput'

const CloseContainer = styled.div`

color:white;
z-index:99;
position:absolute;
right:0%;
top:0%;
transition:0.35s all;
transform:${({state})=>state ? 'translateY(0px)':'translateY(15px)'}

`

const Container = styled.div`
  visibility:${({state})=>state ? 'visible' : 'hidden'};
  width:100vw;
  height:100%;
  background-color:black;
  opacity:0;
  position:absolute;
  left:0;
  top:0;
  z-index:9;
  transition:0.35s all;
  opacity:${({state})=>state ? '0.9':'0'};

`

const Nav = styled.div`
  background-color:white;
  height:100vh;
  width:200px;
  position:absolute;
  transition:0.35s all;
  transform:${({state})=>state? 'translateX(0px)':'translateX(-200px)'};

`


const Modal = ({state,handleClick,mobileView,falseDispatcher})=>{
  console.log(mobileView)



  return(
    <Container state={mobileView}>
      <CloseContainer onClick={()=>falseDispatcher()} state={state}>
        <CloseIcon style={{fontSize:'40px'}}/>
      </CloseContainer>
      <Nav state={state}>
        <SearchInput />
      </Nav>
    </Container>
  )
}

const mapStateToProps = state => ({mobileView:state.mobileView})

const falseDispatcher = () =>{
  return({
    type:'FALSE'
  })
}


const mapDispatchToProps = {
  falseDispatcher
}

const ConnectedModal = connect(mapStateToProps,mapDispatchToProps)(Modal)
export default ConnectedModal
