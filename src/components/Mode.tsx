import React from 'react';
import { ArrowsIcon, EyeIcon } from '../svg';
import { useSelector, useDispatch } from 'react-redux';
import { setMode } from '../redux/slices/modeSlice';
import { resetCalculator } from '../redux/slices/calculatorSlice';

const Mode = () => {
  const mode = useSelector((state: any) => state.mode.value);
  const dispatch = useDispatch();

  const changeValue = (mode: string) => {
    dispatch(setMode(mode));
    dispatch(resetCalculator());
  };

  return (
    <div className="mode">
      <label className={`option ${mode === 'runtime' ? 'active' : ''}`} htmlFor="runtime">
        <EyeIcon />
        <input type="radio" id="runtime" name="mode" onChange={() => changeValue('runtime')} />
        <p>Runtime</p>
      </label>
      <label className={`option ${mode === 'constructor' ? 'active' : ''}`} htmlFor="constructor">
        <ArrowsIcon />
        <input
          type="radio"
          id="constructor"
          name="mode"
          onChange={() => changeValue('constructor')}
        />
        <p>Constructor</p>
      </label>
    </div>
  );
};

export default Mode;
