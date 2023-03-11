import React, { ReactElement } from 'react';
import { ImageIcon } from '../svg';
import { useSelector, useDispatch } from 'react-redux';
import Screen from './Screen';
import Operators from './Operators';
import Numbers from './Numbers';
import ResultButton from './ResultButton';
import { addElementToCanvas } from '../redux/slices/canvasSlice';

const getComp = (item: string, index: number) => {
  switch (item) {
    case 'screen':
      return <Screen key={index} type="canvas-type" />;
    case 'numbers':
      return <Numbers key={index} type="canvas-type" />;
    case 'result-button':
      return <ResultButton key={index} type="canvas-type" />;
    case 'operators':
      return <Operators key={index} type="canvas-type" />;
  }
};

const Canvas = () => {
  const canvas = useSelector((state: any) => state.canvas.elements);
  const dispatch = useDispatch();

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const element = e.dataTransfer.getData('element') as string;

    if ((e.target as HTMLElement).classList.contains('canvas')) {
      (e.target as HTMLElement).style.backgroundColor = '#fff';
    }

    if (canvas.includes(element)) {
      console.log('already in canvas');
    } else {
      dispatch(addElementToCanvas(element));
    }
  };

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragOverEmptyCanvas = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    (e.target as HTMLElement).style.backgroundColor = '#F0F9FF';
  };

  const dragLeaveEmptyCanvas = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLElement).style.backgroundColor = '#fff';
  };

  return (
    <>
      {canvas.length === 0 ? (
        <div
          className="canvas canvas_empty"
          onDragOver={dragOverEmptyCanvas}
          onDragLeave={dragLeaveEmptyCanvas}
          onDrop={dropHandler}>
          <ImageIcon />
          <p>
            <span>Перетащите сюда</span>любой элемент
            <br />
            из левой панели
          </p>
        </div>
      ) : (
        <>
          <div className="canvas" onDrop={dropHandler} onDragOver={dragOver}>
            {canvas.map((item: string, index: number) => {
              return getComp(item, index);
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Canvas;
