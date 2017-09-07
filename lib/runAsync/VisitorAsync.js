import { ExprVisitor } from '../parsers/ExprVisitor';
import Execution from './Execution';

export default class VisitorAsync extends ExprVisitor {
    constructor() {
        super();
        this.memory = {};
    }
    visitAssign(ctx) {
        var id = ctx.ID().getText();
        var value = this.visit(ctx.expr());
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

        var node = new Execution();
        node.op = op;
        node.setLeft(left);
        node.setRight(right);

        return node;
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