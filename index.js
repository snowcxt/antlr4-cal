var antlr4 = require('antlr4/index');
var ExprLexer = require.main.require('./parsers/expr/ExprLexer');
var ExprParser = require.main.require('./parsers/expr/ExprParser');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input expr:', (expr) => {
    var input = `${expr}\r\n`;
    var chars = new antlr4.InputStream(input);
    var lexer = new ExprLexer.ExprLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ExprParser.ExprParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();

    console.log(`parsed successful:\r\n${input}`);

    rl.close();
});


// console.log(tokens)