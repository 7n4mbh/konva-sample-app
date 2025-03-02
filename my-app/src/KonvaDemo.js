// src/KonvaDemo.js
import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';

const KonvaDemo = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={50}
          y={50}
          width={200}
          height={100}
          fill="skyblue"
          stroke="black"
          strokeWidth={2}
          draggable
        />
        <Text text="ドラッグしてみてください" x={60} y={80} fontSize={18} fill="black" />
      </Layer>
    </Stage>
  );
};

export default KonvaDemo;