import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


import SearchModalItems from '../SearchModalItems'
import NoSearchFound from './NoSearchFound'


const Container = styled.div`
  position:absolute;
  height:${({state})=>state ? '300px' : '0px'};
  width:99.5%;
  opacity:${({state})=>state ? 1 : 0};

  top:80px;
  background-color:white;
  border-radius:4px;
  border:2px solid rgba(0,0,0,0.2);
  border-top:none;
  transition:0.35s all;
  overflow-y:auto;

`



const SearchModal = ({show,search,changeState,text})=>{

  return(
    <Container state={show}>
      {
        search[0]
          ?
      <SearchModalItems search={search}/>
        :
      <NoSearchFound text={text}/>

      }

    </Container>
  )
}

const mapStateToProps = (state) =>{
  return{
    search:state.searchReducer.groceries
  }
}



const ConnectedSearchModal = connect(mapStateToProps)(SearchModal)

export default ConnectedSearchModal
