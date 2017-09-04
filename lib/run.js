import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import { ExprLexer } from './parsers/ExprLexer';
import { ExprParser } from './parsers/ExprParser';
import EvalVisitor from './EvalVisitor';

export default function run(input) {
    var chars = new InputStream(input);
    var lexer = new ExprLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    var parser = new ExprParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();
    return new EvalVisitor().visit(tree)[0];
}