import React from 'react';
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchInput from '../../Components/SearchInput'
import TextInput from '../../Components/TextInput'

describe('testing the search form',()=>{

  it('should test the search from render',()=>{
      const {asFragment} = render(<SearchInput/>)
      expect(asFragment()).toMatchSnapshot()
  })

  it('should test with invalid input',()=>{
      const handleSubmit = jest.fn(e => e.preventDefault())
    const mockFn = ()=>{
      return{
        handleSubmit:handleSubmit,
        state:{search:''},
        errors:'',
        handleChange:handleSubmit
      }
    }
    const {getByTestId} = render(<SearchInput useHook={mockFn}/>)

    userEvent.click(getByTestId('submit'))
      expect(handleSubmit.mock.calls.length).toBe(1)
  })

})
