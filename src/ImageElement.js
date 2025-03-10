// src/ImageElement.js
import React from 'react';
import { ResizableBox } from 'react-resizable';
import { Draggable } from 'react-draggable';

const ImageElement = ({ src, width, height, setColor, color }) => {
  return (
    <Draggable bounds="parent">
      <div>
        <ResizableBox width={width} height={height} axis="both" minConstraints={[100, 100]} maxConstraints={[500, 500]}>
          <img
            src={src}
            alt="element"
            style={{ width: '100%', height: '100%', backgroundColor: color }}
            onDoubleClick={() => setColor(prompt('Enter color:'))}
          />
        </ResizableBox>
      </div>
    </Draggable>
  );
};

export default ImageElement;
