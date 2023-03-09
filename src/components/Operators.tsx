import React from 'react';
import Button from './Button';

const Operators = () => {
  const numbers = ['/', 'x', '-', '+'];
  return (
    <div className="block-container">
      {numbers.map((item, index) => {
        return <Button value={item} key={index} className="button_operators" />;
      })}
    </div>
  );
};

export default Operators;
