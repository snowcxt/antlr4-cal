// Generated from Expr.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var grammarFileName = "Expr.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "\u001f\n\u0003\f\u0003\u000e\u0003\"\u000b\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0003\u0004\u0006\u0002\u0004",
    "\u0006\b\u0002\u0003\u0003\u0002\u0005\u0007\u0002&\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0004\u0018\u0003\u0002\u0002\u0002\u0006#\u0003",
    "\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\u000b\u0005\u0004\u0003",
    "\u0002\u000b\f\u0007\b\u0002\u0002\f\u000e\u0003\u0002\u0002\u0002\r",
    "\n\u0003\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f",
    "\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010",
    "\u0003\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0012",
    "\u0013\b\u0003\u0001\u0002\u0013\u0019\u0005\b\u0005\u0002\u0014\u0015",
    "\u0007\u0003\u0002\u0002\u0015\u0016\u0005\u0004\u0003\u0002\u0016\u0017",
    "\u0007\u0004\u0002\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018\u0012",
    "\u0003\u0002\u0002\u0002\u0018\u0014\u0003\u0002\u0002\u0002\u0019 ",
    "\u0003\u0002\u0002\u0002\u001a\u001b\f\u0005\u0002\u0002\u001b\u001c",
    "\u0005\u0006\u0004\u0002\u001c\u001d\u0005\u0004\u0003\u0006\u001d\u001f",
    "\u0003\u0002\u0002\u0002\u001e\u001a\u0003\u0002\u0002\u0002\u001f\"",
    "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
    "\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002",
    "#$\t\u0002\u0002\u0002$\u0007\u0003\u0002\u0002\u0002%&\u0007\t\u0002",
    "\u0002&\t\u0003\u0002\u0002\u0002\u0005\u000f\u0018 "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'" ];

var symbolicNames = [ null, null, null, null, null, null, "NEWLINE", "INT" ];

var ruleNames =  [ "prog", "expr", "ops", "atom" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.NEWLINE = 6;
ExprParser.INT = 7;

ExprParser.RULE_prog = 0;
ExprParser.RULE_expr = 1;
ExprParser.RULE_ops = 2;
ExprParser.RULE_atom = 3;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ExprParser.NEWLINE);
    } else {
        return this.getToken(ExprParser.NEWLINE, i);
    }
};


ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitProg(this);
	}
};




ExprParser.ProgContext = ProgContext;

ExprParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__0 || _la===ExprParser.INT) {
            this.state = 8;
            this.expr(0);
            this.state = 9;
            this.match(ExprParser.NEWLINE);
            this.state = 15;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.ops = function() {
    return this.getTypedRuleContext(OpsContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitExpr(this);
	}
};



ExprParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.INT:
            this.state = 17;
            this.atom();
            break;
        case ExprParser.T__0:
            this.state = 18;
            this.match(ExprParser.T__0);
            this.state = 19;
            this.expr(0);
            this.state = 20;
            this.match(ExprParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 30;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ExprContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
                this.state = 24;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 25;
                this.ops();
                this.state = 26;
                this.expr(4); 
            }
            this.state = 32;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function OpsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_ops;
    return this;
}

OpsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpsContext.prototype.constructor = OpsContext;


OpsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterOps(this);
	}
};

OpsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitOps(this);
	}
};




ExprParser.OpsContext = OpsContext;

ExprParser.prototype.ops = function() {

    var localctx = new OpsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprParser.RULE_ops);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__2) | (1 << ExprParser.T__3) | (1 << ExprParser.T__4))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.INT = function() {
    return this.getToken(ExprParser.INT, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitAtom(this);
	}
};




ExprParser.AtomContext = AtomContext;

ExprParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_atom);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.match(ExprParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
