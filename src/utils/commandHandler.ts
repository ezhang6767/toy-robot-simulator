
export type RobotState = {
    x: number;
    y: number;
    facing: string;
    report: string;
    setX: (x: number) => void;
    setY: (y: number) => void;
    setFacing: (facing: string) => void;
    setReport: (report: string) => void;
  };
  
  export const handleCommand = (command: string, args: any, state: RobotState) => {
    switch (command) {
      case "PLACE":
        {
        const { x, y, facing } = args;
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
          state.setX(x);
          state.setY(y);
          state.setFacing(facing);
            }
        }
        break;
  
      case "MOVE":{
        const movementMap: Record<string, { dx: number; dy: number }> = {
          NORTH: { dx: 0, dy: 1 },
          SOUTH: { dx: 0, dy: -1 },
          EAST: { dx: 1, dy: 0 },
          WEST: { dx: -1, dy: 0 },
        };
  
        const { dx, dy } = movementMap[state.facing];
        state.setX((prevX) => Math.min(4, Math.max(0, prevX + dx)));
        state.setY((prevY) => Math.min(4, Math.max(0, prevY + dy)));
        }
        break;
  
      case "LEFT":
        state.setFacing((prevFacing) => {
          const directions = ["NORTH", "WEST", "SOUTH", "EAST"];
          return directions[(directions.indexOf(prevFacing) + 1) % 4];
        });
        break;
  
      case "RIGHT":
        state.setFacing((prevFacing) => {
          const directions = ["NORTH", "EAST", "SOUTH", "WEST"];
          return directions[(directions.indexOf(prevFacing) + 1) % 4];
        });
        break;
  
      case "REPORT":
        state.setReport(`(${state.x},${state.y}) Facing: ${state.facing}`);
        break;
  
      default:
        console.warn("Invalid command");
    }
  };
  