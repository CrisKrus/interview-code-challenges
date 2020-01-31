import { Coordinates } from './Coordinates';

export const MAX_X = 50;
export const MAX_Y = 50;

export class Grid {
    readonly topRightCoordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.checkCoordinates(coordinates);
        this.topRightCoordinates = coordinates;
    }

    private checkCoordinates(coordinates: Coordinates) {
        if (coordinates.x > MAX_X) {
            throw new Error('Coordinates exceed maximum on X');
        }
        if (coordinates.y > MAX_Y) {
            throw new Error('Coordinates exceed maximum on Y');
        }
    }
}