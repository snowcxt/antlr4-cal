import { ExprVisitor } from './parsers/ExprVisitor';

export default class EvalVisitor extends ExprVisitor {
    constructor() {
        super();
        this.memory = {};
    }
    visitAssign(ctx) {
        var id = ctx.ID().getText();
        var value = Number(ctx.INT().getText());
        this.memory[id] = value;
        return value;
    }
    visitPrint(ctx) {
        return this.visit(ctx.expr());
    }
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

    visitAtomExpr(ctx) {
        return Number(ctx.getText());
    }

    visitParenExpr(ctx) {
        return this.visit(ctx.expr());
    }

    visitIdExpr(ctx) {
        return this.memory[ctx.getText()];
    }
}