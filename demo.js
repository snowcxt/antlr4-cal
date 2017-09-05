import validate from './lib/validate';
import run from './lib/run';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function waitInput() {
    rl.question('Input expr:', (input) => {
        const errors = validate(input);
        if (errors.length > 0) {
            console.log('errors:', errors);
        } else {
            console.log('answer:', run(input));
        }
        waitInput();
    });
}

waitInput();