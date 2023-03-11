import React from 'react';
import BlockContainer from './BlockContainer';
import Button from './Button';

const Operators = ({ type }: any) => {
  const numbers = ['/', 'x', '-', '+'];
  return (
    <BlockContainer id="operators" type={type}>
      {numbers.map((item, index) => {
        return <Button value={item} key={index} className="button_operators" />;
      })}
    </BlockContainer>
  );
};

export default Operators;
