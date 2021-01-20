import React from 'react';

import useSearchHook from '../../Hooks/UseSearchHook'
import searchUtils from '../../Utils/SearchUtils'

import TextInput from '../TextInput'
import SearchForm from '../SearchForm'


const SearchInput = ({useHook = useSearchHook})=>{

  const {state,handleChange,handleSubmit,errors} = useHook(searchUtils.validate)


  return(
    <SearchForm handleSubmit={handleSubmit}>
      <TextInput data-testid="textInput1" state={state.search} errors={errors} name={'search'} handleChange={handleChange} />
    </SearchForm>
  )
}


export default SearchInput
