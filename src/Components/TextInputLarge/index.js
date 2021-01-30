import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

import SearchModal from '../SearchModal'


const Container = styled.div`

  position:relative;
  width:80%;
  margin:0 auto;
  display:flex;
  @media only screen and (max-width: 375px) {
  width:100%;
}
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
  const [show,setShow] = useState(false);
  const node = useRef(null)

  const handleClick = (e)=>{
    if(node.current.contains(e.target)){
      setShow(true)
    }else {
      setShow(false)
    }
  }

  useEffect(()=>{
    document.addEventListener("mousedown",handleClick)

    return ()=>{
      document.removeEventListener("mousedown",handleClick)
    }

  },[])


  return(
    <Container>
      <label htmlFor='search'/>
      <Input id="search" value={state} ref={node} name="search" onChange={(e)=>handleChange(e)} errors={errors} placeholder={'Search local farms'} autocomplete="off"/>
      <SearchButton type="submit"><SearchIcon style={{fontSize:'50px'}}/></SearchButton>
      <SearchModal show={show} changeState={state} text={state}/>
    </Container>

  )
}

export default TextInputLarge
