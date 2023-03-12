import React from 'react';
import Numbers from './Numbers';
import Operators from './Operators';
import ResultButton from './ResultButton';
import Screen from './Screen';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const mode = useSelector((state: any) => state.mode.value);

  return (
    <div className={`sidebar ${mode === 'runtime' ? 'hidden' : ''}`}>
      <Screen type="sidebar-type" />
      <Operators type="sidebar-type" />
      <Numbers type="sidebar-type" />
      <ResultButton type="sidebar-type" />
    </div>
  );
};

export default Sidebar;
