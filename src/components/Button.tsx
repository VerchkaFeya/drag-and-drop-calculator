import React from 'react';

type TValue = {
  value: string | number;
  className: string;
};

const Button = ({ value, className }: TValue) => {
  return <div className={`button ${className}`}>{value}</div>;
};

export default Button;
