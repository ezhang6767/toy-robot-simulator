import React from "react";
import styles from "./ReportDisplay.module.css";

const ReportDisplay: React.FC<{ position: string }> = ({ position }) => {
  return <div className={styles.report}>Current Position: {position}</div>;
};

export default ReportDisplay;
