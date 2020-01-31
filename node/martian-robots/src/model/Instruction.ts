export class Instruction {
    static readonly FORWARD = 'F';
    static readonly RIGHT = 'R';
    static readonly LEFT = 'L';
    readonly instruction: string;

    constructor(instruction: string) {
        this.instruction = instruction;
    }
}