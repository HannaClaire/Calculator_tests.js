import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let operatorEquals;
  let operatorAdd;
  let operatorSubtract;
  let operatorMultiply;
  let operatorDivide;
  let operatorClear;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator />)

    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3')
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')
    button8 = container.getByTestId('number8')
    button9 = container.getByTestId('number9')
    operatorEquals = container.getByTestId('operator-equals')
    operatorAdd = container.getByTestId('operator-add')
    operatorSubtract = container.getByTestId('operator-subtract')
    operatorMultiply = container.getByTestId('operator-multiply')
    operatorEquals = container.getByTestId('operator-equals')
    operatorDivide = container.getByTestId('operator-divide')
    operatorClear = container.getByTestId('clear')
    runningTotal = container.getByTestId('running-total')
    
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

it("Should add", () => {
  button1 = container.getByTestId('number1')
  button4 = container.getByTestId('number4')
  operatorAdd = container.getByTestId('operator-add')
  operatorEquals = container.getByTestId('operator-equals')
  fireEvent.click(button1)
  fireEvent.click(operatorAdd)
  fireEvent.click(button4)
  fireEvent.click(operatorEquals)

  expect(runningTotal.textContent).toEqual('5')
})


it("Should subtract", () => {
  button7 = container.getByTestId('number7')
  operatorSubtract = container.getByTestId('operator-subtract')
  button4 = container.getByTestId('number4')
  operatorEquals = container.getByTestId('operator-equals')
  fireEvent.click(button7)
  fireEvent.click(operatorSubtract)
  fireEvent.click(button4)
  fireEvent.click(operatorEquals)

  expect(runningTotal.textContent).toEqual('3')
})

it('Should multiply', () => {
  button5 = container.getByTestId('number5')
  operatorMultiply = container.getByTestId('operator-multiply')
  button3 = container.getByTestId('number3')
  operatorEquals = container.getByTestId('operator-equals')
  fireEvent.click(button5)
  fireEvent.click(operatorMultiply)
  fireEvent.click(button3)
  fireEvent.click(operatorEquals)

  expect(runningTotal.textContent).toEqual('15')
})

it('Should divide', () => {
  button2 = container.getByTestId('number2')
  operatorAdd = container.getByTestId('operator-add')
  button1 = container.getByTestId('number1')
  operatorDivide = container.getByTestId('operator-divide')
  button7 = container.getByTestId('number7')
  operatorEquals = container.getByTestId('operator-equals')
  fireEvent.click(button2)
  fireEvent.click(button1)
  fireEvent.click(operatorDivide)
  fireEvent.click(button7)
  fireEvent.click(operatorEquals)

  expect(runningTotal.textContent).toEqual('3')
})

it('Should concatenate numbers', () => {
  button2 = container.getByTestId('number2')
  button8 = container.getByTestId('number8')
  button7 = container.getByTestId('number7')
  button3 = container.getByTestId('number3')
  button7 = container.getByTestId('number7')
  fireEvent.click(button2)
  fireEvent.click(button8)
  fireEvent.click(button7)
  fireEvent.click(button3)
  fireEvent.click(button7)
  fireEvent.click(operatorEquals)


  expect(runningTotal.textContent).toEqual('28737')
})


it('Should concatenate operands', () => {
  button5 = container.getByTestId('number5')
  operatorAdd = container.getByTestId('operator-add')
  button7 = container.getByTestId('number7')
  operatorAdd = container.getByTestId('operator-add')
  button7 = container.getByTestId('number7')
  fireEvent.click(button5)
  fireEvent.click(operatorAdd)
  fireEvent.click(button7)
  fireEvent.click(operatorAdd)
  fireEvent.click(button7)
  fireEvent.click(operatorEquals)

expect(runningTotal.textContent).toEqual('19')
})

it('Should clear running total whilst not affecting calculation', () => {
  button5 = container.getByTestId('number5')
  operatorAdd = container.getByTestId('operator-add')
  button7 = container.getByTestId('number7')
  operatorAdd = container.getByTestId('operator-add')
  button7 = container.getByTestId('number7')
  operatorClear= container.getByTestId('clear')
  
  fireEvent.click(button5)
  fireEvent.click(operatorAdd)
  fireEvent.click(button7)
  fireEvent.click(operatorAdd)
  fireEvent.click(button7)
  fireEvent.click(operatorEquals)
  fireEvent.click(operatorClear)

expect(runningTotal.textContent).toEqual('0')

})

})

