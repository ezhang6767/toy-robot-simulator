import React from "react";
import Robot from "./Robot";
import styles from "./Grid.module.css";

const Grid: React.FC<{ x: number; y: number; facing: string }> = ({ x, y, facing }) => {
  const gridSize = 5;

  return (
    <div className={styles.grid}>
      {Array.from({ length: gridSize * gridSize }).map((_, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;

        return (
          <div key={index} className={styles.cell}>
            {row === 4 - y && col === x && <Robot facing={facing} />}
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
