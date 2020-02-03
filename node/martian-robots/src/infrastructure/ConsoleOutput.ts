import { Position } from '../model/Position';

export class ConsoleOutput {
    constructor() {}

    print(position: Position) {
        console.log(`${position.coordinate.x} ${position.coordinate.y} ${position.orientation.orientation} `);
    }
}
