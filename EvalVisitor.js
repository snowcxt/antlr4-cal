import { ExprVisitor } from './parsers/expr/ExprVisitor';

export default class EvalVisitor extends ExprVisitor {
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