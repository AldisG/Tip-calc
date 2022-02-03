import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/redux/store';
import CalcForm from '../components/CalcForm';

const AppElement = (
  <Provider store={store}>   
    <CalcForm />
  </Provider>    
)
describe('Show Bill inputs', () => {
  it('should display 7 if entered 7...', () => {
    render(AppElement)
    const billInput = screen.getByTestId("bill-input")
    fireEvent.change(billInput, { target: {value: '7'} })
    expect(billInput.value).toBe("7")
  })

  it('should display 0 if entered -1...', () => {
    render(AppElement)
    const billInput = screen.getByTestId("bill-input")
    fireEvent.change(billInput, { target: {value: '-1'} })
    expect(billInput.value).toBe("0")
  })

  it('should not accept more than 9 numbers at once..., returns nothing (0)', () => {
    render(AppElement)
    const billInput = screen.getByTestId("bill-input")
    fireEvent.change(billInput, { target: {value: '11111111111'} })
    expect(billInput.value).toBe("0")
  })

  it('should not accept letters', () => {
    render(AppElement)
    const billInput = screen.getByTestId("bill-input")
    fireEvent.change(billInput, { target: {value: 'abcd'} })
    expect(billInput.value).toBe("0")
  })
  
  it('should not accept spaces', () => {
    render(AppElement)
    const billInput = screen.getByTestId("bill-input")
    fireEvent.change(billInput, { target: {value: '2 2'} })
    expect(billInput.value).toBe("0")
  })
})
