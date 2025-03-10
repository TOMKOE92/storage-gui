// src/App.js
import React, { useState } from 'react';
import './App.css';
import DraggableButton from './DraggableButton';
import ImageElement from './ImageElement';
import NumberField from './NumberField';
import ObjectDescription from './ObjectDescription';

function App() {
  const [color, setColor] = useState('#4CAF50');
  const [imageColor, setImageColor] = useState('transparent');

  return (
    <div className="App">
      <h1>Storage GUI Prototype</h1>

      {/* Picking Button */}
      <DraggableButton label="Picking" color={color} setColor={setColor} onClick={() => alert('Picking action triggered')} />
      
      {/* Put Away Button */}
      <DraggableButton label="Put Away" color={color} setColor={setColor} onClick={() => alert('Put Away action triggered')} />
      
      {/* User Image */}
      <ImageElement src="https://via.placeholder.com/150" width={150} height={150} color={imageColor} setColor={setImageColor} />
      
      {/* Number Field */}
      <NumberField label="Quantity" />
      
      {/* Object Description */}
      <ObjectDescription />

      {/* Product Image */}
      <ImageElement src="https://via.placeholder.com/150" width={150} height={150} color={imageColor} setColor={setImageColor} />

      {/* Confirm Button */}
      <DraggableButton label="Confirm" color={color} setColor={setColor} onClick={() => alert('Confirmation complete')} />
    </div>
  );
}

export default App;
