import React from 'react';
import BlockContainer from './BlockContainer';

const Screen = ({ type }: any) => {
  return (
    <BlockContainer id="screen" type={type}>
      <div className="screen-value">0</div>
    </BlockContainer>
  );
};

export default Screen;
