import getTree from './getTree';
import EvalVisitor from './EvalVisitor';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input expr:', (expr) => {
    var input = `${expr}\r\n`;
    var tree = getTree(input);

    var answer = new EvalVisitor().visit(tree);

    console.log(`parsed successful:\r\n${answer}`);

    rl.close();
});