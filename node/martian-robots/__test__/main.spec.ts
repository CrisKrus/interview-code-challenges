import { Grid, MAX_X, MAX_Y } from '../src/model/Grid';
import { Coordinate } from '../src/model/Coordinate';
import { Robot } from '../src/model/Robot';
import { Position } from '../src/model/Position';
import { Orientation } from '../src/model/Orientation';
import { Instruction } from '../src/model/Instruction';

describe('The grid', () => {
    it('should be created under the maximum coordinates', () => {
        const coordinates = new Coordinate(MAX_X - 1, MAX_Y - 1);
        const grid = new Grid(coordinates);
        expect(grid);
    });

    it('should check if is created over the maximum coordinates', () => {
        const coordinates = new Coordinate(MAX_X + 1, MAX_Y + 1);
        expect(() => {
            new Grid(coordinates);
        }).toThrowError('Coordinates exceed maximum on X');
    });
});

describe('The robot', () => {
    it('should be created with initial position and instructions', () => {
        const instructions = [new Instruction(Instruction.FORWARD)];
        const coordinate = new Coordinate(0, 0);
        const initialPosition = new Position(
            coordinate,
            new Orientation(Orientation.NORTH),
        );
        const robot = new Robot(initialPosition, instructions);
        expect(robot);
    });
});
