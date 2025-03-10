// src/NumberField.js
import React, { useState } from 'react';

const NumberField = ({ label }) => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <div>
      <h3>{label}</h3>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default NumberField;
