import React from 'react';
import BlockContainer from './BlockContainer';
import { useSelector } from 'react-redux';

const Screen = ({ type }: any) => {
  const screenValue = useSelector((state: any) => state.calculator.screenValue);
  // const currentOperand = useSelector((state: any) => state.calculator.currentOperand);

  return (
    <BlockContainer id="screen" type={type}>
      <div className="screen-value">{screenValue}</div>
    </BlockContainer>
  );
};

export default Screen;
