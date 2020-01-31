import { MockInput } from '../src/infrastructure/MockInput';
import { Grid, MAX_X, MAX_Y } from '../src/model/Grid';
import { ConsoleOutput } from '../src/infrastructure/ConsoleOutput';
import { GridService } from '../src/service/Grid';
import { Coordinates } from '../src/model/Coordinates';
import { Robot } from '../src/model/Robot';

describe('Complete test', () => {
    it('should work', () => {
        const input = new MockInput();
        input.loadData('');
        const coordinates = input.getMaximumCoordinates();
        let grid: Grid;
        try {
            grid = new Grid(coordinates);
        } catch (error) {
            throw error;
        }
        const robots = input.getRobots();
        const gridService = new GridService(grid);
        robots.forEach(robot => {
            const robotPath = gridService.play(robot);
            new ConsoleOutput().print(robotPath);
        });
    });
});

describe('The grid', () => {
    it('should be created under the maximum coordinates', () => {
        const coordinates = new Coordinates(MAX_X - 1, MAX_Y - 1);
        const grid = new Grid(coordinates);
        expect(grid);
    });

    it('should check if is created over the maximum coordinates', () => {
        const coordinates = new Coordinates(MAX_X + 1, MAX_Y + 1);
        expect(() => {
            new Grid(coordinates);
        }).toThrowError('Coordinates exceed maximum on X');
    });
});

export class Instruction {
    constructor(instruction: string) {
        throw 'Not implemented';
    }
}

export class Orientation {
    constructor() {
        throw 'Not implemented';
    }
}

export class Position {
    constructor(coordinates: Coordinates, orientation: Orientation) {
        throw 'Not implemented';
    }
}

describe('The robot', () => {
    it('should be created with initial position and instructions', () => {
        const instructions = [new Instruction('')];
        const coordinates = new Coordinates(0, 0);
        const initialPosition = new Position(coordinates, new Orientation());
        const robot = new Robot(initialPosition, instructions);
        expect(robot);
    });
});
