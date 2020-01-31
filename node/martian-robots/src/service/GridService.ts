import { Grid } from '../model/Grid';
import { Robot } from '../model/Robot';

export class GridService {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    play(robot: Robot) {
        throw 'Not implement yet';
    }
}