import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const Input = styled.input`
  padding:10px 15px;
  border:1px solid #ddd;
  border-radius:4px;
  margin-left:10px;
  margin-top:40px;
  outline:none;
  text-align:start;
  font-weight:500;
  font-size:0.88rem;
  opacity:0.7;
`
const Container = styled.div`

  position:relative;
`
const SearchContainer = styled.div`
  position:absolute;
  right:11px;
  top:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:3px 6px;
  border:1px solid #ddd;
  border-left:none;
  background-color:#E62E04;
  color:white;
  border-radius:0 4px 4px 0;
  width:15%;
  font-weight:bold;

`

const TextInput =({state,handleChange,name})=>{

  return(
    <Container>
    <label htmlFor="search"></label>
    <Input id="search" type="text" name={name} placeholder={'e.g. blueberry, micro greens, Smith'} autocomplete="off" value={state} onChange={(e)=>handleChange(e)}/>
      <SearchContainer>
        <SearchIcon style={{fontSize:'30px',fontWeight:'bold'}}/>
      </SearchContainer>
    </Container>
  )
}

export default TextInput
