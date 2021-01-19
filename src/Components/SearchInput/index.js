import React,{useState} from 'react';

import useSearchHook from '../../Hooks/UseSearchHook'
import searchUtils from '../../Utils/SearchUtils'

import TextInput from '../TextInput'
import SearchForm from '../SearchForm'


const SearchInput = ()=>{

  const {state,handleChange,handleSubmit} = useSearchHook(searchUtils.validate)


  return(
    <SearchForm handleSubmit={handleSubmit}>
      <TextInput state={state.search} name={'search'} handleChange={handleChange} />
  
    </SearchForm>
  )
}


export default SearchInput
