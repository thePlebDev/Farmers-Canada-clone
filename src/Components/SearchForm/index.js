import React from 'react';



const SearchForm =({children,handleSubmit})=>{
  return(
    <form onSubmit={(e)=>handleSubmit(e)}>
        {children}
    </form>

  )
}

export default SearchForm
