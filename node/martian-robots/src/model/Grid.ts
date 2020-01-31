import { Coordinate } from './Coordinate';

export const MAX_X = 50;
export const MAX_Y = 50;

export class Grid {
    readonly topRightCoordinates: Coordinate;

    constructor(coordinates: Coordinate) {
        this.checkCoordinates(coordinates);
        this.topRightCoordinates = coordinates;
    }

    private checkCoordinates(coordinates: Coordinate) {
        if (coordinates.x > MAX_X) {
            throw new Error('Coordinates exceed maximum on X');
        }
        if (coordinates.y > MAX_Y) {
            throw new Error('Coordinates exceed maximum on Y');
        }
    }
}