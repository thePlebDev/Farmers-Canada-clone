import React from 'react'

import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Modal from '../../Components/Modal';


describe('it should test the modal component',()=>{
  it ('should test the snapshot',()=>{
    const {asFragment} = render(<Modal />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should test that the close button fires',()=>{
    const mockFn = jest.fn()
    let state = false

    const {getByTestId} = render(<Modal state={state} handleClick={mockFn} />)
    userEvent.click(getByTestId('close'))
    expect(mockFn.mock.calls.length).toBe(1)

  })
})
