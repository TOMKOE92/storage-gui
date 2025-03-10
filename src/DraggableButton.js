// src/DraggableButton.js
import React from 'react';
import { ResizableBox } from 'react-resizable';
import { Draggable } from 'react-draggable';

import 'react-resizable/css/styles.css';  // Import for resizable styles

const DraggableButton = ({ label, onClick, color, setColor }) => {
  return (
    <Draggable bounds="parent">
      <div>
        <ResizableBox width={200} height={50} axis="x" minConstraints={[100, 50]} maxConstraints={[400, 50]}>
          <button
            style={{ backgroundColor: color }}
            onClick={onClick}
            onDoubleClick={() => setColor(prompt('Enter color:', color))}
          >
            {label}
          </button>
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default DraggableButton;
