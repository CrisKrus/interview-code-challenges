import { Robot } from '../model/Robot';
import { Position } from '../model/Position';
import { Instruction } from '../model/Instruction';
import { Orientation } from '../model/Orientation';
import { Coordinate } from '../model/Coordinate';

export class GridService {
    launch(robot: Robot): Position {
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
        const { orientation } = position.orientation;

        switch (orientation) {
            case Orientation.NORTH:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y + 1,
                    ),
                    position.orientation,
                );
            case Orientation.EAST:
                return new Position(
                    new Coordinate(
                        position.coordinate.x + 1,
                        position.coordinate.y,
                    ),
                    position.orientation,
                );
            case Orientation.SOUTH:
                return new Position(
                    new Coordinate(
                        position.coordinate.x,
                        position.coordinate.y - 1,
                    ),
                    position.orientation,
                );
            case Orientation.WEST:
                return new Position(
                    new Coordinate(
                        position.coordinate.x - 1,
                        position.coordinate.y,
                    ),
                    position.orientation,
                );
            default:
                return new Position(position.coordinate, position.orientation);
        }
    }

    private rotateRight(position: Position): Position {
        switch (position.orientation.orientation) {
            case Orientation.NORTH:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.EAST),
                );
            case Orientation.EAST:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.SOUTH),
                );
            case Orientation.SOUTH:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.WEST),
                );
            case Orientation.WEST:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.NORTH),
                );
            default:
                return new Position(
                    position.coordinate,
                    new Orientation(position.orientation.orientation),
                );
        }
    }

    private rotateLeft(position: Position) {
        switch (position.orientation.orientation) {
            case Orientation.NORTH:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.WEST),
                );
            case Orientation.WEST:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.SOUTH),
                );
            case Orientation.SOUTH:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.EAST),
                );
            case Orientation.EAST:
                return new Position(
                    position.coordinate,
                    new Orientation(Orientation.NORTH),
                );
            default:
                return new Position(position.coordinate, position.orientation);
        }
    }
}
