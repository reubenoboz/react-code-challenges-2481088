import React, { useState } from "react";

function ColorPicker({ setActiveColor }) {
  const colors = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setActiveColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel({ activeColor }) {
  const [pixelColor, setpixelColor] = useState("lightGrey");
  return (
    <div
      onClick={() => setpixelColor(activeColor)}
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: pixelColor,
        margin: "1px",
      }}
    />
  );
}

function Pixels({ activeColor }) {
  const pixels = [];
  for (let i = 0; i < 100; i++)
    pixels.push(<Pixel activeColor={activeColor} key={i} />);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        width: "210px",
        margin: "0 auto",
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [activeColor, setActiveColor] = useState("");
  return (
    <div>
      <ColorPicker setActiveColor={setActiveColor} />
      <Pixels activeColor={activeColor} />
    </div>
  );
}
