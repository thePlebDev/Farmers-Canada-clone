import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:center;

`


const SearchForm =({children,handleSubmit})=>{
  return(
    <Form onSubmit={(e)=>handleSubmit(e)}>
        {children}
    </Form>

  )
}

export default SearchForm
