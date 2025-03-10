import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import { SketchPicker } from "react-color";
import "./App.css";

const DraggableElement = ({ id, type, defaultText, imageUrl }) => {
  const savedState = JSON.parse(localStorage.getItem(id)) || {
    width: type === "image" ? 150 : 200,
    height: type === "image" ? 150 : 60,
    x: 50,
    y: 50,
    bgColor: type === "text" ? "transparent" : "#3498db",
    textColor: "#ffffff",
    fontSize: 16,
  };

  const [elementState, setElementState] = useState(savedState);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(elementState));
  }, [elementState, id]);

  return (
    <Rnd
      size={{ width: elementState.width, height: elementState.height }}
      position={{ x: elementState.x, y: elementState.y }}
      onDragStop={(e, d) => setElementState({ ...elementState, x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) =>
        setElementState({
          ...elementState,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          x: position.x,
          y: position.y,
        })
      }
      bounds="parent"
      style={{
        background: type === "text" || type === "image" ? "transparent" : elementState.bgColor,
        color: elementState.textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${elementState.fontSize}px`,
        position: "absolute",
        cursor: "move",
        padding: "5px",
      }}
    >
      {type === "image" ? (
        <img src={imageUrl} alt={id} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : type === "input" ? (
        <input
          type="number"
          value={elementState.fontSize}
          onChange={(e) => setElementState({ ...elementState, fontSize: e.target.value })}
          style={{
            width: "100%",
            height: "100%",
            background: elementState.bgColor,
            color: elementState.textColor,
            fontSize: elementState.fontSize,
            textAlign: "center",
          }}
        />
      ) : (
        <div onClick={() => setShowPicker(!showPicker)}>{defaultText}</div>
      )}

      {showPicker && type !== "image" && (
        <SketchPicker
          color={elementState.bgColor}
          onChange={(color) => setElementState({ ...elementState, bgColor: color.hex })}
        />
      )}
    </Rnd>
  );
};

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", background: "#f4f4f4" }}>
      <DraggableElement id="pickingBtn" type="button" defaultText="Picking" />
      <DraggableElement id="putAwayBtn" type="button" defaultText="Put Away" />
      <DraggableElement id="inventoryBtn" type="button" defaultText="Inventory" />
      <DraggableElement id="userImage" type="image" imageUrl="https://via.placeholder.com/150" />
      <DraggableElement id="quantityInput" type="input" />
      <DraggableElement id="objectDescription" type="text" defaultText="Item Description" />
      <DraggableElement id="productImage" type="image" imageUrl="https://via.placeholder.com/200" />
      <DraggableElement id="confirmBtn" type="button" defaultText="Confirm" />
    </div>
  );
};

export default App;
