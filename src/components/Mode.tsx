import React from 'react';
import { ArrowsIcon, EyeIcon } from '../svg';

const Mode = () => {
  return (
    <div className="mode">
      <div className="option">
        <EyeIcon />
        <input type="radio" id="runtime" name="mode" />
        <label htmlFor="runtime">Runtime</label>
      </div>
      <div className="option active">
        <ArrowsIcon />
        <input type="radio" id="constructor" name="mode" checked />
        <label htmlFor="constructor">Constructor</label>
      </div>
    </div>
  );
};

export default Mode;
