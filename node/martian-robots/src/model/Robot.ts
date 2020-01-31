import { Position } from './Position';
import { Instruction } from './Instruction';

export class Robot {
    readonly initialPosition: Position;
    readonly instructions: Instruction[];

    constructor(initialPosition: Position, instructions: Instruction[]) {
        this.initialPosition = initialPosition;
        this.instructions = instructions;
    }
}
