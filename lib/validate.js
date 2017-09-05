import { InputStream } from 'antlr4/InputStream';
import { CommonTokenStream } from 'antlr4/CommonTokenStream';
import { ErrorListener } from 'antlr4/error/ErrorListener';
import { ExprLexer } from './parsers/ExprLexer';
import { ExprParser } from './parsers/ExprParser';

class MyErrorListener extends ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, text, e) {
        this.errors.push({
            line,
            column,
            text
        });
    }
}

export default function validate(input) {
    var listener = new MyErrorListener();

    var chars = new InputStream(input);
    var lexer = new ExprLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);

    var tokens = new CommonTokenStream(lexer);

    var parser = new ExprParser(tokens);
    parser.buildParseTrees = false;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);

    parser.prog();
    return listener.errors;
}