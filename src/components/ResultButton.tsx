import React from 'react';
import BlockContainer from './BlockContainer';
import Button from './Button';

const ResultButton = ({ type }: any) => {
  return (
    <BlockContainer id="result-button" type={type}>
      <Button value="=" className="button_equal" />
    </BlockContainer>
  );
};

export default ResultButton;
