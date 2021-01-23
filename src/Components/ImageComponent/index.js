import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


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
`



const ImageComponent =({grocery})=>{
  //console.log(grocery)

  return(
    <>
      <Divider>Fresh Produce</Divider>
      <Container>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
        <Items>
          <Image src='https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80' alt='vegtable'/>
          <Text>Spinach</Text>
          <Money> CA $5.00</Money>
          <FarmName>Small Farm</FarmName>
        </Items>
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
