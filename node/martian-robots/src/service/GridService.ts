import { Grid } from '../model/Grid';
import { Robot } from '../model/Robot';
import { Position } from '../model/Position';
import { Instruction } from '../model/Instruction';
import { Orientation } from '../model/Orientation';
import { Coordinate } from '../model/Coordinate';

export class GridService {
    private grid: Grid;

    constructor(grid: Grid) {
        this.grid = grid;
    }

    play(robot: Robot): Position {
        let position = robot.initialPosition;
        robot.instructions.forEach(instruction => {
            switch (instruction.instruction) {
                case Instruction.FORWARD:
                    position = this.goForward(position);
                    break;
                case Instruction.RIGHT:
                    position = this.rotateRight(position);
                    break;
                case Instruction.LEFT:
                    position = this.rotateLeft(position);
                    break;
                default:
                    break;
            }
        });
        return position;
    }

    private goForward(position: Position): Position {
        switch (position.orientation.orientation) {
            case Orientation.NORTH:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y + 1,
                    ),
                    new Orientation(position.orientation.orientation),
                );
            case Orientation.EAST:
                return new Position(
                    new Coordinate(
                        position.coordinate.x + 1,
                        position.coordinate.y,
                    ),
                    new Orientation(position.orientation.orientation),
                );
            default:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(position.orientation.orientation),
                );
        }
    }

    private rotateRight(position: Position): Position {
        switch (position.orientation.orientation) {
            case Orientation.NORTH:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(Orientation.EAST),
                );
            case Orientation.EAST:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(Orientation.SOUTH),
                );
            default:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(position.orientation.orientation),
                );
        }
    }

    private rotateLeft(position: Position) {
        switch (position.orientation.orientation) {
            case Orientation.SOUTH:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(Orientation.EAST),
                );
            default:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y,
                    ),
                    new Orientation(position.orientation.orientation),
                );
        }
    }
}
