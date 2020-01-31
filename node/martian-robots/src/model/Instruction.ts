export class Instruction {
    static readonly FORWARD = 'F';
    readonly instruction: string;

    constructor(instruction: string) {
        this.instruction = instruction;
    }
}