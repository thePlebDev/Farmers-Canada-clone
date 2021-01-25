import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width:60%;
  justify-self:center;
  padding-top:20px;
  display:none;
  @media only screen and (min-width: 1000px) {
  display:block;
}


`
const H2 = styled.h2`
  font-size:22px;
  text-align:center;
  margin-top:0;
`

const Location = styled.div`
  font-size:15px;
  font-weight:500;
  text-align:center;
  color:#333;
  border-bottom:1px solid rgba(0,0,0,0.46);
  width:60%;
  padding-bottom:10px;
  margin:10px auto;
`

const Image = styled.img`
  width:80px;
  height:80px;
`
const ImageItem = styled.div`
  box-shadow:0 2px 10px 0 rgba(0,0,0,0.1);
  font-size:12px;
  margin:5px;
  text-align:center;
`

const ImageContainer = styled.div`
display:grid;
justify-content:center;
grid-template-columns:repeat(auto-fit,minmax(80px,100px));

`

const Button = styled.button`
  border: 1px solid #29b706;
  color:#29b706;
  display:block;
  margin:10px auto;
  padding:5px 30px;
  border-radius:4px;
  cursor:pointer;
  background-color:white;
  box-shadow:0 2px 10px 0 rgba(0,0,0,0.3);
  transition:0.35s all;
  &:hover{
    box-shadow:0 2px 30px 0 rgba(0,0,0,0.3);
    transform: scale(1.1);
  }


`


const LargeInfo = ()=>{

  return(
    <Container>
      <H2>Timmothy Collective</H2>
      <Location>Alberta, Canada</Location>
      <ImageContainer>
        <ImageItem>
          <Image alt="food" src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
          <div>Kale</div>
        </ImageItem>

        <ImageItem>
          <Image alt="food" src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' />
          <div>Kale</div>
        </ImageItem>
      </ImageContainer>
      <Button>View all</Button>
    </Container>
  )
}

export default LargeInfo
