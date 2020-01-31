import { Coordinate } from './Coordinate';
import { Orientation } from './Orientation';
import { Instruction } from './Instruction';

export class Position {
    readonly coordinate: Coordinate;
    readonly orientation: Orientation;

    constructor(coordinate: Coordinate, orientation: Orientation) {
        this.coordinate = coordinate;
        this.orientation = orientation;
    }

    public move(instruction: Instruction): Position {
        const coordinate = new Coordinate(
            this.coordinate.x,
            this.coordinate.y + 1,
        );
        return new Position(coordinate, this.orientation);
    }
}
