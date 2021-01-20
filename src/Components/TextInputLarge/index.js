import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';


const Container = styled.div`

  position:relative;
  width:80%;
  margin:0 auto;
  display:flex;
`

const Input = styled.input`
  margin-top:20px;
  padding:10px 15px;
  border:1px solid #ddd;
  border-radius:4px 0px 0px 4px;
  height: 38px;
  outline:none;
  text-align:start;
  font-weight:500;
  font-size:0.88rem;
  width:100%;
  font-size:1.2rem;
`

const SearchButton = styled.button`
  background-color:red;
  margin-top:20px;
  width:68px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:4.7px;
  border:none;
  border-radius:0px 4px 4px 0;
  color:white;

`





const TextInputLarge =({state,handleChange,errors})=>{

  return(
    <Container>
      <label htmlFor='search'/>
      <Input id="search" value={state} name="search" onChange={(e)=>handleChange(e)} errors={errors} placeholder={'e.g. blueberry, micro greens, Smith'} autocomplete="off"/>
      <SearchButton type="submit"><SearchIcon style={{fontSize:'50px'}}/></SearchButton>
    </Container>

  )
}

export default TextInputLarge
