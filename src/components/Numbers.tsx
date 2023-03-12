import React from 'react';
import { NUMBERS } from '../data';
import BlockContainer from './BlockContainer';
import Button from './Button';

const Numbers = ({ type }: any) => {
  return (
    <BlockContainer id="numbers" type={type}>
      {NUMBERS.map((item, index) => {
        return <Button value={item} key={index} className="button_numbers" />;
      })}
    </BlockContainer>
  );
};

export default Numbers;
