import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';

import customerInfoData from './data.js';




const Container = styled.div`
  background-color:#9c3;
`

const GridContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  padding:5px;
  margin:0 auto;
  grid-gap:20px;

  @media only screen and (min-width: 600px) {
    width:80%;

`


const Title = styled.h2`
  font-size:25px;
  font-weight:300px;
  font-family: "Varela Round";
  text-align:center;
  line-height:1.4em;
  width:80%;
  margin:30px auto;
  padding-top:40px;
  color:white;
`
const Words = styled.p`
  color:white;
  font-family: "Varela Round";
  line-height:1.6;
  margin-top:0;
  white-space:pre-line;

`
const WordContainer = styled.div`
    display:flex;

`

const CustomerBase =()=>{


  return(
    <Container>
      <Title> Are You Looking for a Permanent & Strong Customer Base?</Title>
      <GridContainer>
        {
          customerInfoData.map((item,index)=>{
            return(
            <div key={index}>

              <WordContainer>
                <CheckIcon style={{color:'white'}}/>
                <Words>{item.title}</Words>
              </WordContainer>
            </div>
          )
          })
        }
      </GridContainer>

    </Container>
  )
}

export default CustomerBase;
