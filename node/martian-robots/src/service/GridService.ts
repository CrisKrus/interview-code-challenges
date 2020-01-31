import { Grid } from '../model/Grid';
import { Robot } from '../model/Robot';
import { Position } from '../model/Position';

export class GridService {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    play(robot: Robot): Position {
        let position = robot.initialPosition;
        robot.instructions.forEach(instruction => {
            position = position.move(instruction);
        });
        return position;
    }
}