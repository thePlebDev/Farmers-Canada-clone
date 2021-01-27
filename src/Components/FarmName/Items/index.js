import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`

  width:80%;
  margin:60px auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(270px,1fr));
  justify-items:center;
  grid-gap:20px;

`
const ImagesContainer = styled.div`
  width:265px;
  border:1px solid rgba(0,0,0,0.1);
  box-shadow: 0 5px 15px 0 rgba(0,0,0,0.3);
  border-radius:4px;
  padding:2px;
  cursor:pointer;
  transition: 0.35s all;

  &:hover{
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.3);
  }

`

const Image = styled.img`
  height:209px;
  width:265px;
  object-fit:center;
  margin: auto;
  margin-top:0;
  border-radius:4px;
`
const Title = styled.p`
  font-weight:500;
  margin-top:0px;
  text-align:center;
  width:80%;
  margin:0px auto;
`
const Price = styled.div`

  color:#b12704;
  font-size:14px;
  width:80%;
  margin:0px auto;
  text-align:center;


`



const Items =({food})=>{
  console.log(food)
  return(
    <Container>
      {
        food.map((item,index)=>{
          return(
            <Link key={index} to={`/${item.sellerId}`}>
              <ImagesContainer>
                <Image alt={item.name} src={item.img}/>
                <Title>{item.name}</Title>
                <Price>CA ${item.price}</Price>
              </ImagesContainer>
            </Link>
          )
        })
      }
    </Container>
  )
}

export default Items
