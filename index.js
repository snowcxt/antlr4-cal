var antlr4 = require('antlr4/index');
var ExprLexer = require.main.require('./parsers/expr/ExprLexer');
var ExprParser = require.main.require('./parsers/expr/ExprParser');
var ExprListener = require.main.require('./parsers/expr/ExprListener').ExprListener;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Loader() {
    ExprListener.call(this);
    return this;
}

Loader.prototype = Object.create(ExprListener.prototype);
Loader.prototype.constructor = Loader;

Loader.prototype.enterExpr = function (ctx) {
    console.log('enterExpr', ctx.getText());
};

Loader.prototype.exitExpr = function (ctx) {
    console.log('exitExpr', ctx.getText());
};

// Enter a parse tree produced by ExprParser#atom.
ExprListener.prototype.exitAtom = function(ctx) {
    console.log('enterAtom', ctx.getText());
};

// Enter a parse tree produced by ExprParser#ops.
ExprListener.prototype.exitOps = function(ctx) {
    console.log('enterOps', ctx.getText());
};


rl.question('Input expr:', (expr) => {
    var input = '52-(11*2)\r\n';// `${expr}\r\n`;
    var chars = new antlr4.InputStream(input);
    var lexer = new ExprLexer.ExprLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ExprParser.ExprParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();

    var ParseTreeWalker = antlr4.tree.ParseTreeWalker;
    var walker = new ParseTreeWalker();
    var loader = new Loader();

    walker.walk(loader, tree);

    console.log(`parsed successful:\r\n${input}`);

    rl.close();
});


// console.log(tokens)
// java -jar path/to/antlr/download/antlr-4.1-complete.jar /path/to/antlr/file/Drink.g