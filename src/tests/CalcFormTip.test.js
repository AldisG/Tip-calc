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
describe('Show Tip inputs', () => {
  it('should not go higher than 99%', async () => {
    render(AppElement)
    const tipInput = screen.getByTestId("custom-tip-amount-input")
    fireEvent.change(tipInput, { target: {value: '199'} })
    waitFor (() => expect(tipInput.value).toBe("99"))

    const billInputDisplay = screen.getByTestId("current-tip")
    waitFor (() => expect(billInputDisplay.innerHTML).toBe("Select Tip <b>99%</b>"))
  })

  it('should show 10%', async () => {
    render(AppElement)
    const tipInput = screen.getByTestId("custom-tip-amount-input")
    fireEvent.change(tipInput, { target: {value: '10'} })
    waitFor (() => expect(tipInput.value).toBe("10"))

    const billInputDisplay = screen.getByTestId("current-tip")
    waitFor (() => expect(billInputDisplay.innerHTML).toBe("Select Tip <b>10%</b>"))
  })
  
  it('should not accept letters', async () => {
    render(AppElement)
    const tipInput = screen.getByTestId("custom-tip-amount-input")
    fireEvent.change(tipInput, { target: {value: 'abcd'} })
    waitFor (() => expect(tipInput.value).toBe("0"))

    const billInputDisplay = screen.getByTestId("current-tip")
    waitFor (() => expect(billInputDisplay.innerHTML).toBe("Select Tip <b>0%</b>"))
  })
})