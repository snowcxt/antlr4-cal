var antlr4 = require('antlr4/index');
var ExprLexer = require.main.require('./parsers/expr/ExprLexer');
var ExprParser = require.main.require('./parsers/expr/ExprParser');
var ExprVisitor = require.main.require('./parsers/expr/ExprVisitor').ExprVisitor;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class EvalVisitor extends ExprVisitor {
    visitOpExpr(ctx) {
        var left = this.visit(ctx.left);
        var right = this.visit(ctx.right);
        var op = ctx.op.text;
        switch (op) {
            case '*': return left * right;
            case '/': return left / right;
            case '+': return left + right;
            case '-': return left - right;
            default: throw "Unknown operator " + op;
        }
    }

    visitStart(ctx) {
        return this.visit(ctx.expr());
    }

    visitAtomExpr(ctx) {
        return Number(ctx.getText());
    };

    visitParenExpr(ctx) {
        return this.visit(ctx.expr());
    };
}

rl.question('Input expr:', (expr) => {
    var input = `${expr}\r\n`;
    var chars = new antlr4.InputStream(input);
    var lexer = new ExprLexer.ExprLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ExprParser.ExprParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();

    var answer = new EvalVisitor().visit(tree);

    console.log(`parsed successful:\r\n${answer}`);

    rl.close();
});