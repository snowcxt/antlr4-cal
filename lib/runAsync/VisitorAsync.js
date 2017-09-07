import { ExprVisitor } from '../parsers/ExprVisitor';
import Execution from './Execution';

export default class VisitorAsync extends ExprVisitor {
    constructor() {
        super();
        this.memory = {};
        this.root = null;
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
        // switch (op) {
        //     case '*': return left * right;
        //     case '/': return left / right;
        //     case '+': return left + right;
        //     case '-': return left - right;
        //     default: throw "Unknown operator " + op;
        // }

        var node = new Execution();
        node.op = op;
        node.setLeft(left);
        node.setRight(right);

        return node;
    }

    visitAtomExpr(ctx) {
        var node = new Execution();
        node.setValue(Number(ctx.getText()));
        return node;
    }

    visitParenExpr(ctx) {
        return this.visit(ctx.expr());
    }

    visitIdExpr(ctx) {
        var node = new Execution();
        node.setValue(this.memory[ctx.getText()]);
        return node;
    }
}