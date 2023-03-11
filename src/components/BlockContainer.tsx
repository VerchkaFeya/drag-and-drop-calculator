import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeElementFromCanvas } from '../redux/slices/canvasSlice';

const BlockContainer = ({ children, id, type }: any) => {
  const mode = useSelector((state: any) => state.mode.value);
  const canvas = useSelector((state: any) => state.canvas.elements);
  const dispatch = useDispatch();

  const isInCanvas = canvas.includes(id);

  const dragStartHandler = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData('element', id);
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    if (type === 'sidebar-type' && isInCanvas) {
      const node = e.currentTarget as HTMLElement;
      node.style.opacity = '0.5';
      node.style.cursor = 'default';
      node.draggable = false;
    }
  };

  const doubleClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (type === 'canvas-type' && mode === 'constructor') {
      dispatch(removeElementFromCanvas(id));
    }
  };

  // УБРАТЬ ВСЕ ТЕРНАРНИКИ

  return (
    <div
      onDragStart={(e) => dragStartHandler(e, id)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDoubleClick={(e) => doubleClickHandler(e)}
      className={`block-container`}
      id={id}
      draggable={mode === 'runtime' ? false : type === 'sidebar-type' && isInCanvas ? false : true}
      style={{
        opacity: `${type === 'sidebar-type' && isInCanvas ? '0,5' : '1'}`,
        cursor: `${
          mode === 'runtime'
            ? 'default'
            : type === 'sidebar-type' && isInCanvas
            ? 'default'
            : 'move'
        }`,
      }}>
      {children}
    </div>
  );
};

export default BlockContainer;
