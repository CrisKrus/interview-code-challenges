import { Coordinates } from './Coordinates';

export const MAX_X = 50;
export const MAX_Y = 50;

export class Grid {
    readonly topRightCoordinates: Coordinates;

    constructor(coordinates: Coordinates) {
        this.topRightCoordinates = coordinates;
    }
}