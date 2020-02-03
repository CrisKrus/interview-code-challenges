import { Robot } from '../model/Robot';
import { Coordinate } from '../model/Coordinate';
import fs from 'fs';

export class FileInput {
    private maximumCoordinates: Coordinate;
    constructor() {}

    loadData(path: string) {
        const file = fs.readFileSync(path, 'utf8');
        const lines = file.split('\n');

        const coordinates = lines.shift().split(' ');
        this.maximumCoordinates = new Coordinate(
            Number(coordinates[0]),
            Number(coordinates[1]),
        );
    }

    getMaximumCoordinates(): Coordinate {
        return this.maximumCoordinates;
    }

    getRobots(): Robot[] {
        throw 'Not implemented yet';
    }
}
