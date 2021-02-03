import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Container = styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,250px));
align-items:center;
justify-content:center;
`

const Divider = styled.h3`
  display:flex;
  margin:40px 0 0 0;
  font-weight:300;
  font-size:1.5em;
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

const Items = styled.div`
  border:1px solid #eee;
  border-radius:4px;
  font-weight:300;
  color:#333;
  height:293px;
  width:218px;
  margin:40px auto;
  box-shadow:0 5px 15px 0 rgba(0,0,0,.4);
  cursor:pointer;
  transition:all 0.25s;
  &:hover{
    box-shadow:0 5px 35px 0 rgba(0,0,0,.4);
    transform:scale(1.1);
  }
`
const Image = styled.img`

  height:200px;
  width:200px;
  display:block;
  margin:5px auto;
`
const Text = styled.div`
  color:#333333;
  font-weight:500;
  font-size:0.8em;
  width:90%;
  margin:10px auto;
`

const Money = styled(Text)`
  color:#b12704;
`
const FarmName = styled(Text)`
  color:#29b706;


  &:after{
    content:'';
    display:block;
    width:0px;
    height:2px;
    background-color:#29b706;
    transition: .25s all;


  };
  &:hover::after{

    width:60%;
  }
`



const ImageComponent =({grocery})=>{

  return(
    <>
      <Divider>Fresh Produce</Divider>
      <Container>
        {
          grocery.map((item,index)=>{
            return (
              <Items key={index}>
                <Link to={`${item.id}`}>
                  <Image src={item.img} alt={item.name}/>
                  <Text>{item.name}</Text>
                  <Money> CA ${item.price}</Money>
                </Link>
                <Link to={`/farm/${item.sellerId}/${item.soldBy}`}>
                  <FarmName>{item.soldBy}</FarmName>
                </Link>
              </Items>
            )
          })
        }

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
