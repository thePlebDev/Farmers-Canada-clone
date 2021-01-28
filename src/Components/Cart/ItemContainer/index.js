import React from 'react';
import styled from 'styled-components';

import ItemIncreaseButton from './ItemIncreaseButton'




const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(1fr,1fr));

  padding-bottom:10px;
  padding-top:10px;
  border-bottom:1px solid #eee;
`
const InfoContainer = styled.div`
  width:100%;
`


const Image = styled.img`
  width:91px;
  height:100px;
  border-radius:4px;
  box-shadow:1px 2px 2px 1px rgba(0, 0, 0, 0.15);
`
const Name = styled.div`
  color:#333333;
  font-weight:300;
  margin-top:5px;
  font-size:13px;
  margin-left:10px;

`

const Price = styled.div`
  color:#b12704;
  margin-left:10px;
`

const Price2= styled(Price)`
  margin-left:0;
    &:before{
      content:'(';
      color:black;
    };
    &:after{
      content:'each )';
      color:black;
    }
`

const PriceContainer = styled.div`

  @media only screen and (max-width: 500px) {
    display:none;
}
`

const SubContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  margin-bottom:20px;
`




const ItemContainer =()=>{

  return(
    <>
      <Container>
        <SubContainer>
              <div style={{display:'flex'}}>
                <Image alt={'corn'} src='https://images.unsplash.com/photo-1540040920895-4ed39be080b7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'/>
                <InfoContainer>
                  <Name>Corn</Name>
                  <Name>Variant size: 1/2</Name>
                </InfoContainer>
              </div>
              <ItemIncreaseButton/>
              <PriceContainer>
                <Price>CA$ 4.00</Price>
                <Price2> CA$ 4.00 </Price2>
              </PriceContainer>
          </SubContainer>
      </Container>

    </>
  )
}



export default ItemContainer;
