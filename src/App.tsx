import React, { useState } from "react";
import Grid from "./components/Grid/Grid";
import Controls from "./components/Controls/Controls";
import ReportDisplay from "./components/ReportDisplay/ReportDisplay";
import { handleCommand } from "./utils/commandHandler";
import "./App.css";

const App: React.FC = () => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [facing, setFacing] = useState("NORTH");
  const [report, setReport] = useState("");

  const onCommand = (command: string, args?: any) => {
    handleCommand(command, args, { x, y, facing, report, setX, setY, setFacing, setReport });
  };
  
  

  return (
    <div className="app">
      <Grid x={x} y={y} facing={facing} />
      <Controls onCommand={onCommand} />
      <ReportDisplay position={report} />
    </div>
  );
};

export default App;
