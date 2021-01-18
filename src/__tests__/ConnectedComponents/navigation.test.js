import React from 'react';
import { Provider } from 'react-redux';
import {render,getByTestId} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import configureStore from 'redux-mock-store';
import Navigation from '../../Components/Navigation'

const mockStore = configureStore([]);


describe('it should test the React-Redux component',()=>{
  let store;

  beforeEach(()=>{
    store = mockStore({
      mobileView:false
    });

    store.dispatch = jest.fn()
  });

  it('should render with the given state from the Redux store',()=>{

  })

  it('should dispatch an action on button click',()=>{
      const {getByTestId} = render(
        <Provider store={store}>
            <Navigation />
        </Provider>
      )
      userEvent.click(getByTestId('nav-toggle'))
      expect(store.dispatch).toHaveBeenCalledTimes(1)
  })
})
