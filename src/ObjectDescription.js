// src/ObjectDescription.js
import React, { useState } from 'react';

const ObjectDescription = () => {
  const [textColor, setTextColor] = useState('black');
  const [fontSize, setFontSize] = useState(16);

  const changeTextColor = () => setTextColor(prompt('Enter text color:', textColor));
  const changeFontSize = () => setFontSize(prompt('Enter font size:', fontSize));

  return (
    <div>
      <p
        style={{
          color: textColor,
          fontSize: `${fontSize}px`,
        }}
      >
        Object Description: A sample storage item.
      </p>
      <button onClick={changeTextColor}>Change Text Color</button>
      <button onClick={changeFontSize}>Change Font Size</button>
    </div>
  );
};

export default ObjectDescription;
