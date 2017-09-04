import getParser from './utils/getParser';
import buildTree from './utils/buildTree';
import EvalVisitor from './EvalVisitor';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function waitInput() {
    rl.question('Input expr:', (expr) => {
        var input = `${expr}\r\n`;
        const parser = getParser(input);

        var tree = buildTree(parser);

        var answer = new EvalVisitor().visit(tree);

        console.log(`parsed successful:\r\n${answer}`);
        waitInput();
    });
}

waitInput();