import React from 'react';
import { useSelector } from 'react-redux';

type TValue = {
  value: string | number;
  className: string;
};

const Button = ({ value, className }: TValue) => {
  const mode = useSelector((state: any) => state.mode.value);

  return (
    <div className={`button ${className} ${mode === 'constructor' ? 'disabled' : ''}`}>{value}</div>
  );
};

export default Button;
