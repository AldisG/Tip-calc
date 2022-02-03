import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/redux/store';
import CalcForm from '../components/CalcForm';

const AppElement = (
  <Provider store={store}>   
    <CalcForm />
  </Provider>    
)
describe('Show People inputs', () => {
  it('should be 1 at start', async () => {
    render(AppElement)
    const pplInput = screen.getByTestId("bill-input__field")
    expect(pplInput.value).toBe("1")
  })
  
  it('should not accept letters', async () => {
    render(AppElement)
    const pplInput = screen.getByTestId("bill-input__field")
    fireEvent.change(pplInput, { target: {value: 'abcd'} })
    expect(pplInput.value).toBe("1")
  })
  
  it('should show correct number', async () => {
    render(AppElement)
    const pplInput = screen.getByTestId("bill-input__field")
    fireEvent.change(pplInput, { target: {value: '7'} })
    expect(pplInput.value).toBe("7")
  })
})