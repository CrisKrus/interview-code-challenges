import { Grid } from '../model/Grid';
import { Robot } from '../model/Robot';

export class GridService {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    play(robot: Robot) {
        let position = robot.initialPosition;
        robot.instructions.forEach(instruction => {
            position = position.move(instruction);
        });
        return `${position.coordinate.x} ${position.coordinate.y} ${position.orientation.orientation}`;
    }
}