import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
  margin:20px auto;
`

const Quantity = styled.div`
  font-size:.9em;
  font-weight:300;
  color:#222;
  align-self:center;
`

const Select = styled.select`
  margin-left:10px;
  font-weight:300;
  padding:2px 10px;
  text-align:start;
  border:1px solid #ddd;
  font-size:16px;
`




const SelectInput = ({children})=>{

  return(
    <Container>
      <Quantity>Quantity</Quantity>
      <Select>
        <option defaultValue> Choose an option</option>
        <option value='1/2 pint'> 1/2 price</option>
      </Select>
    </Container>
  )
}

export default SelectInput
