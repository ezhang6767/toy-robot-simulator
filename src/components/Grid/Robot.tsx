import React from "react";
import styles from "./Robot.module.css";

const directionMap: Record<string, string> = {
  NORTH: "⬆️",
  EAST: "➡️",
  SOUTH: "⬇️",
  WEST: "⬅️",
};

const Robot: React.FC<{ facing: string }> = ({ facing }) => {
  return <div className={styles.robot}>{directionMap[facing] || "🤖"}</div>;
};

export default Robot;
