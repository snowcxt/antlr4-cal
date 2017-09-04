import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import { ExprLexer } from '../parsers/ExprLexer';
import { ExprParser } from '../parsers/ExprParser';


export default function getParser(input) {
    var chars = new InputStream(input);
    var lexer = new ExprLexer(chars);
    var tokens = new CommonTokenStream(lexer);
    return new ExprParser(tokens);
}
