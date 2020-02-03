import { FileInput } from './infrastructure/FileInput';
import { GridService } from './service/GridService';
import { ConsoleOutput } from './infrastructure/ConsoleOutput';
import path from 'path';

const main = () => {
    const input = new FileInput();
    input.loadData(path.resolve(__dirname, '../input.txt'));
    const robots = input.getRobots();
    const gridService = new GridService();
    robots.forEach(robot => {
        const robotPath = gridService.launch(robot);
        new ConsoleOutput().print(robotPath);
    });
};

main();
