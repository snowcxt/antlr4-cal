// Generated from Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#prog.
ExprListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ExprParser#prog.
ExprListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ExprParser#expr.
ExprListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expr.
ExprListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by ExprParser#ops.
ExprListener.prototype.enterOps = function(ctx) {
};

// Exit a parse tree produced by ExprParser#ops.
ExprListener.prototype.exitOps = function(ctx) {
};


// Enter a parse tree produced by ExprParser#atom.
ExprListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by ExprParser#atom.
ExprListener.prototype.exitAtom = function(ctx) {
};



exports.ExprListener = ExprListener;