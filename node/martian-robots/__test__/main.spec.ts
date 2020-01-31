import { MockInput } from '../src/infrastructure/MockInput';
import { Grid, MAX_X, MAX_Y } from '../src/model/Grid';
import { ConsoleOutput } from '../src/infrastructure/ConsoleOutput';
import { GridService } from '../src/service/Grid';
import { Coordinates } from '../src/model/Coordinates';

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
        const grid = new Grid(coordinates);
        expect(grid).toThrowError(Error);
    });
});
