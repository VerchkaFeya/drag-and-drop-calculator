import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { NUMBERS, OPERATORS } from '../data';
// import { addOperator, addDigit } from '../redux/slices/calculatorSlice';

type TValue = {
  value: string;
  className: string;
};

const Button = ({ value, className }: TValue) => {
  const mode = useSelector((state: any) => state.mode.value);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (mode === 'runtime') {
      console.log(value);
      // if (NUMBERS.includes(value)) {
      //   dispatch(addDigit(value));
      // }
      // if (OPERATORS.includes(value)) {
      //   dispatch(addOperator(value));
      // }
    }
  };

  return (
    <div
      className={`button ${className} ${mode === 'constructor' ? 'disabled' : ''}`}
      onClick={clickHandler}>
      {value}
    </div>
  );
};

export default Button;
