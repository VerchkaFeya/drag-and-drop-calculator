import React from 'react';
import { OPERATORS } from '../data';
import BlockContainer from './BlockContainer';
import Button from './Button';

const Operators = ({ type }: any) => {
  return (
    <BlockContainer id="operators" type={type}>
      {OPERATORS.map((item, index) => {
        return <Button value={item} key={index} className="button_operators" />;
      })}
    </BlockContainer>
  );
};

export default Operators;
