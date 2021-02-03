import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  margin-top:20px;
  margin-bottom:20px;
  @media only screen and (min-width: 760px) {
  display:none;
}
`

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;


`

const Image = styled.img`
  width:60px;
  height:60px;
  padding:2px;
  margin-right:10px;
  box-shadow: 1px 1px 1px rgba(115, 115, 115, 0.17);
  border:3px solid #fff;
  border-radius:3px;
`

const Title = styled.h6`
  text-transform:uppercase;
  margin: 0 auto;
  font-size:14px;
  font-weight:300;
  opacity:0.7;
  text-align:center;
`

const Location = styled.p`
  margin:0 auto;
  color:#333;
  font-weight:300;
  font-size:12px;
  text-align:center;
`

const TitleContainer = styled.div`
align-self:center;
`

const Connected = styled.div`
  display:flex;
  justify-content:center;
  margin-top:10px;
`

const ItemsBox = styled.div`
  display:flex;
  flex-direction:column;
  width: 60px;
  height:60px;
  box-shadow: 1px 1px 1px rgba(115, 115, 115, 0.17);
  border:3px solid #fff;
  border-radius:3px;
  align-items:center;
  justify-content:flex-start;
`
const Number = styled.span`
  color:#29b706;
  font-size:22px;
  font-weight:400;
  padding-top:10px;
`

const More = styled.span`
  color:#bdbdbd;
  font-size:14px;
`



const SmallInfo =({seller})=>{

  return(
    <Container>
      <TextContainer>
        <TitleContainer>
          <Title>{seller.name}</Title>
          <Location> {seller.location}</Location>
        </TitleContainer>
      </TextContainer>
      <Connected>
        <Image src={seller.items[0].img} alt={seller.items[0].name}/>
        <Image src={seller.items[1].img} alt={seller.items[1].name}/>
        <Link to={`/farm/${seller.farmId}/${seller.name}`}>
          <ItemsBox>
            <Number>{seller.items.length}</Number>
            <More>More</More>
          </ItemsBox>
        </Link>
      </Connected>
    </Container>
  )
}

export default SmallInfo
