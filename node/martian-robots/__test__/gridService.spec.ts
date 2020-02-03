import { Coordinate } from '../src/model/Coordinate';
import { GridService } from '../src/service/GridService';
import { Instruction } from '../src/model/Instruction';
import { Robot } from '../src/model/Robot';
import { Position } from '../src/model/Position';
import { Orientation } from '../src/model/Orientation';

describe('The grid service', () => {
    it('should be created with an initial grid', () => {
        const gridService = new GridService();
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
    function getRobotOnOneOneFacingNorth(instructions: Instruction[]): Robot {
        return new Robot(
            new Position(
                new Coordinate(1, 1),
                new Orientation(Orientation.NORTH),
            ),
            instructions,
        );
    }

    it('should launch a robot with one instruction', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.FORWARD),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(0, 1),
            new Orientation(Orientation.NORTH),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot with multiple instructions', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.FORWARD),
            new Instruction(Instruction.FORWARD),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(0, 2),
            new Orientation(Orientation.NORTH),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot that rotate itself', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.LEFT),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(0, 0),
            new Orientation(Orientation.WEST),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot that moves to the EAST', () => {
        const robot = getRobotOnZeroZeroFacingNorth([
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.FORWARD),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(1, 0),
            new Orientation(Orientation.EAST),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot that moves to the SOUTH', () => {
        const robot = getRobotOnOneOneFacingNorth([
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.FORWARD),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(1, 0),
            new Orientation(Orientation.SOUTH),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot that moves to the WEST', () => {
        const robot = getRobotOnOneOneFacingNorth([
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.RIGHT),
            new Instruction(Instruction.FORWARD),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(0, 1),
            new Orientation(Orientation.WEST),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });

    it('should launch a robot that rotates to the left side', () => {
        const robot = getRobotOnOneOneFacingNorth([
            new Instruction(Instruction.LEFT),
            new Instruction(Instruction.LEFT),
            new Instruction(Instruction.LEFT),
            new Instruction(Instruction.LEFT),
            new Instruction(Instruction.LEFT),
        ]);
        const gridService = new GridService();

        const finalPosition = gridService.launch(robot);

        const expectedPosition = new Position(
            new Coordinate(1, 1),
            new Orientation(Orientation.WEST),
        );
        expect(finalPosition).toEqual(expectedPosition);
    });
});
