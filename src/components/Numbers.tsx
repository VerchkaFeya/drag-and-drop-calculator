import React from 'react';
import Button from './Button';

const Numbers = () => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];
  return (
    <div className="block-container">
      {numbers.map((item, index) => {
        return <Button value={item} key={index} className="button_numbers" />;
      })}
    </div>
  );
};

export default Numbers;
