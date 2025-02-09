import React, { useState } from "react";
import styles from "./Controls.module.css";

const Controls: React.FC<{ onCommand: (command: string, args?: any) => void }> = ({ onCommand }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [facing, setFacing] = useState("NORTH");

  return (
    <div className={styles.controls}>

    {/* PLACE 输入框 */}
      <div className={styles.placeInputs}>
        <input type="number" value={x} onChange={(e) => setX(Number(e.target.value))} min="0" max="4" />
        <input type="number" value={y} onChange={(e) => setY(Number(e.target.value))} min="0" max="4" />
        <select value={facing} onChange={(e) => setFacing(e.target.value)}>
          <option value="NORTH">NORTH</option>
          <option value="SOUTH">SOUTH</option>
          <option value="EAST">EAST</option>
          <option value="WEST">WEST</option>
        </select>
        <button onClick={() => onCommand("PLACE", { x, y, facing })}>PLACE</button>
      </div>

      {/* 其他命令按钮 */}
      <button onClick={() => onCommand("MOVE")}>MOVE</button>
      <button onClick={() => onCommand("LEFT")}>LEFT</button>
      <button onClick={() => onCommand("RIGHT")}>RIGHT</button>
      <button onClick={() => onCommand("REPORT")}>REPORT</button>
    </div>
  );
};

export default Controls;
