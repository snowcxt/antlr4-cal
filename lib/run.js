import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import { BailErrorStrategy } from 'antlr4/error/ErrorStrategy';
import { ExprLexer } from './parsers/ExprLexer';
import { ExprParser } from './parsers/ExprParser';
import EvalVisitor from './EvalVisitor';

export default function run(input) {
    var chars = new InputStream(`${input}\r\n`);
    var lexer = new ExprLexer(chars);
    lexer.removeErrorListeners();
    var tokens = new CommonTokenStream(lexer);
    var parser = new ExprParser(tokens);
    parser._errHandler = new BailErrorStrategy();
    try {
        var tree = parser.prog();
        var results = new EvalVisitor().visit(tree);
        return results.pop();
    } catch (ex) {
        console.error(ex);
        return false;
    }
}