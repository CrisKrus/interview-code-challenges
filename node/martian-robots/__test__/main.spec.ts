import { MockInput } from '../src/infrastructure/MockInput';
import { Grid, MAX_X, MAX_Y } from '../src/model/Grid';
import { ConsoleOutput } from '../src/infrastructure/ConsoleOutput';
import { GridService } from '../src/service/GridService';
import { Coordinate } from '../src/model/Coordinate';
import { Robot } from '../src/model/Robot';
import { Position } from '../src/model/Position';
import { Orientation } from '../src/model/Orientation';
import { Instruction } from '../src/model/Instruction';

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

describe('The grid service', () => {
    it('should be created with an initial grid', () => {
        const coordinate = new Coordinate(0, 0);
        const grid = new Grid(coordinate);
        const gridService = new GridService(grid);
        expect(gridService);
    });

    function getRobotOnZeroZeroFacingNorth(instructions: Instruction[]): Robot {
        return new Robot(
            new Position(
                new Coordinate(0, 0),
                new Orientation(Orientation.NORTH),
            ),
            instructions,
        );
    }

    it('should play a robot with one instruction', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.FORWARD),
        ]);
        const grid = new Grid(new Coordinate(MAX_X, MAX_Y));
        const gridService = new GridService(grid);
        const output = gridService.play(robot);
        expect(output).toEqual('0 1 N');
    });

    it('should play a robot with multiple instructions', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.FORWARD),
            new Instruction(Instruction.FORWARD),
        ]);
        const grid = new Grid(new Coordinate(MAX_X, MAX_Y));
        const gridService = new GridService(grid);
        const output = gridService.play(robot);
        expect(output).toEqual('0 2 N');
    });
});
