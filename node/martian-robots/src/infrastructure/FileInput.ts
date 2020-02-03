import { Robot } from '../model/Robot';
import { Coordinate } from '../model/Coordinate';
import fs from 'fs';
import { Position } from '../model/Position';
import { Orientation } from '../model/Orientation';
import { Instruction } from '../model/Instruction';

export class FileInput {
    private maximumCoordinates: Coordinate;
    private robots: Robot[];

    constructor() {
        this.robots = [];
    }

    loadData(path: string) {
        const file = fs.readFileSync(path, 'utf8');
        const lines = file.split('\n');

        const coordinates = lines.shift().split(' ');
        this.maximumCoordinates = new Coordinate(
            Number(coordinates[0]),
            Number(coordinates[1]),
        );

        this.formatRobots(lines);
    }

    private formatRobots(lines: string[]): void {
        const initialRobotValueFormat = /\d \d [W,S,N,E]{1}/;
        const instructionInput = /[R,L,F]/;
        let position: Position;

        lines.forEach(line => {
            if (line.search(initialRobotValueFormat) === 0) {
                const initialPosition = line.split(' ');
                position = new Position(
                    new Coordinate(
                        Number(initialPosition[0]),
                        Number(initialPosition[1]),
                    ),
                    new Orientation(initialPosition[2]),
                );
            }
            if (line.search(instructionInput) === 0) {
                const instructionInput = line.split('');
                const instructions: Instruction[] = [];
                instructionInput.forEach(instruction => {
                    instructions.push(new Instruction(instruction));
                });
                this.robots.push(new Robot(position, instructions));
            }
        });
    }

    getMaximumCoordinates(): Coordinate {
        return this.maximumCoordinates;
    }

    getRobots(): Robot[] {
        return this.robots;
    }
}
