import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import ExprLexer from './parsers/ExprLexer';
import ExprParser from './parsers/ExprParser';

export default function getTree(input) {
    var chars = new InputStream(input);
    var lexer = new ExprLexer.ExprLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    var parser = new ExprParser.ExprParser(tokens);
    parser.buildParseTrees = true;
    return parser.prog();
}

