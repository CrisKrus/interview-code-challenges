import { Instruction, Position } from '../../__test__/main.spec';

export class Robot {
    readonly initialPosition: Position;
    readonly instructions: Instruction[];

    constructor(initialPosition: Position, instructions: Instruction[]) {
        this.initialPosition = initialPosition;
        this.instructions = instructions;
    }
}
