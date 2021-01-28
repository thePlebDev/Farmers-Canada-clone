import React,{useEffect,useRef} from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

import SearchInput from '../SearchInput';
import PageLinks from '../PageLinks';

import MobileCart from '../MobileCart'

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
  background-color:${({state})=> state ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'};
  z-index:99999;
  transition:0.35s all;
`

const Nav = styled.div`
  height:100%;
  width:260px;
  z-index:9;
  background-color:rgba(255,255,255,0.9);
  position:fixed;
  transition:0.35s all;
  transform:${({state})=>state? 'translateX(0px)':'translateX(-260px)'};
`


const Modal = ({state,handleClick,mobileView,falseDispatcher})=>{
  const node = useRef()
  const handleDetection =(e)=>{
    // if(node.current.contains(e.target)){
    //   console.log('inside the click')
    // }else{
    //   console.log('outside the click')
    // }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleDetection);

    //return function to be called when unmounted
    return ()=>{
      document.removeEventListener("mousedown",handleDetection);
    }
  },[])

  return(
    <Container state={state.modal} ref={node}>
      <CloseContainer data-testid="close" onClick={()=>handleClick()} state={state.modal}>
        <CloseIcon style={{fontSize:'40px'}}/>
      </CloseContainer>
      <Nav state={state.modal}>
        {
          state.cartNav
               ?
          <MobileCart/>
               :
          <>
            <SearchInput />
            <PageLinks />
          </>
        }
      </Nav>
    </Container>
  )
}


export default Modal
