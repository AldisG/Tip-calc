import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store/redux/store';

const AppElement = (
  <Provider store={store}>   
    <App />
  </Provider>    
)
describe('Render all inputs', () =>{
  it('Should render Bill input and start with 0', () => {
    render(AppElement);
    const billInput = screen.getByTestId("bill-input")
    expect(billInput.value).toBe('0');
  });

  it('Should renderall tip% buttons and an input', () => {
    render(AppElement);
    const procentageBtns = screen.queryAllByTestId("tip-amount-btn")
    expect(procentageBtns.length).toBe(5)
  });

  it('Should renderall people input and start with 0', () => {
    render(AppElement);
    const customPrecentInput = screen.getByTestId("custom-tip-amount-input")
    expect(customPrecentInput.value).toBe('0');
  });              

  it('Should renderall people input and start with 1', () => {
    render(AppElement);
    const personsCount = screen.getByTestId("bill-input__field")
    expect(personsCount.value).toBe('1');
  });

})
