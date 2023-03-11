import React from 'react';
import BlockContainer from './BlockContainer';
import Button from './Button';

const Numbers = ({ type }: any) => {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];
  return (
    <BlockContainer id="numbers" type={type}>
      {numbers.map((item, index) => {
        return <Button value={item} key={index} className="button_numbers" />;
      })}
    </BlockContainer>
  );
};

export default Numbers;
