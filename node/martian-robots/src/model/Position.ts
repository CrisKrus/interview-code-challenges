import { Coordinate } from './Coordinate';
import { Orientation } from './Orientation';

export class Position {
    readonly coordinate: Coordinate;
    readonly orientation: Orientation;

    constructor(coordinate: Coordinate, orientation: Orientation) {
        this.coordinate = coordinate;
        this.orientation = orientation;
    }
}
