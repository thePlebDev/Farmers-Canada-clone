import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Container = styled.div`

`

const Divider = styled.h3`
  display:flex;
  margin:40px 0;
  font-weight:300;
  font-size:1em;
  color:#555;
  &::before{
    content:'';
    flex:1;
    border-bottom:groove 2px;
  margin:auto 0.25em;
};
&::after{
  content:'';
  flex:1;
  border-bottom:groove 2px;
  margin:auto 0.25em;
}
`


const ImageComponent =({grocery})=>{
  //console.log(grocery)

  return(
    <>
      <Divider>Fresh Produce</Divider>
      <Container>

      </Container>
    </>
  )
}

const mapStateToProps =(state)=>{
  return{
    grocery:state.groceryReducer.groceries
  }
}


const ConnectedImageComponent = connect(mapStateToProps)(ImageComponent)

export default ConnectedImageComponent
