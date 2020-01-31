export class Orientation {
    static readonly NORTH = 'N';
    static readonly EAST = 'E';
    static readonly SOUTH = 'S';
    static readonly WEST = 'W';
    readonly orientation: string;

    constructor(orientation: string) {
        this.orientation = orientation;
    }
}