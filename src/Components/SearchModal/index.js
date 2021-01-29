import React from 'react';
import styled from 'styled-components';



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
const ItemContainer = styled.div`
  margin:10px 0;
  border-bottom:1px solid rgba(0,0,0,0.2);
  padding:2px;
  padding-bottom:10px;
  display:flex;
  align-items:center;
  cursor:pointer;

`


const Image = styled.img`
  width: 40px;
  height:40px;
  @media only screen and (min-width: 770px) {
    width:60px;
    height:60px;

}
`
const TextContainer =styled.div`

`

const Text = styled.div`
  font-weight:600;
  color:#333;
  font-size:11px;
  margin-left:10px;
  @media only screen and (min-width: 770px) {
    font-size:14px;

}
`

const Text2 = styled(Text)`
margin-top:5px;
  color:rgba(0,0,0,0.3);
  font-weight:300;
`


const SearchModal = ({show})=>{


  return(
    <Container state={show}>
      <ItemContainer>
        <Image alt="corn" src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'/>
        <TextContainer>
          <Text>Corn</Text>
          <Text2>sold by Timmothy collective</Text2>
        </TextContainer>
      </ItemContainer>
    </Container>
  )
}

export default SearchModal
