import React from "react";

export default function ColorPicker({ color, setColor }) {
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}
