// Generated from browser-example/Cymbol.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u001b\u009a\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0007\u0017",
    "{\n\u0017\f\u0017\u000e\u0017~\u000b\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0006\u0019\u0083\n\u0019\r\u0019\u000e\u0019\u0084\u0003\u001a",
    "\u0006\u001a\u0088\n\u001a\r\u001a\u000e\u001a\u0089\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007\u001b\u0092",
    "\n\u001b\f\u001b\u000e\u001b\u0095\u000b\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u0093\u0002\u001c\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013",
    "%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00021\u00193\u001a5\u001b\u0003",
    "\u0002\u0005\u0003\u00022;\u0004\u0002C\\c|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u009d\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002\u0002\u0002\u0002",
    "5\u0003\u0002\u0002\u0002\u00037\u0003\u0002\u0002\u0002\u00059\u0003",
    "\u0002\u0002\u0002\u0007;\u0003\u0002\u0002\u0002\tA\u0003\u0002\u0002",
    "\u0002\u000bE\u0003\u0002\u0002\u0002\rJ\u0003\u0002\u0002\u0002\u000f",
    "L\u0003\u0002\u0002\u0002\u0011N\u0003\u0002\u0002\u0002\u0013P\u0003",
    "\u0002\u0002\u0002\u0015R\u0003\u0002\u0002\u0002\u0017T\u0003\u0002",
    "\u0002\u0002\u0019W\u0003\u0002\u0002\u0002\u001b\\\u0003\u0002\u0002",
    "\u0002\u001da\u0003\u0002\u0002\u0002\u001fh\u0003\u0002\u0002\u0002",
    "!j\u0003\u0002\u0002\u0002#l\u0003\u0002\u0002\u0002%n\u0003\u0002\u0002",
    "\u0002\'p\u0003\u0002\u0002\u0002)r\u0003\u0002\u0002\u0002+t\u0003",
    "\u0002\u0002\u0002-w\u0003\u0002\u0002\u0002/\u007f\u0003\u0002\u0002",
    "\u00021\u0082\u0003\u0002\u0002\u00023\u0087\u0003\u0002\u0002\u0002",
    "5\u008d\u0003\u0002\u0002\u000278\u0007?\u0002\u00028\u0004\u0003\u0002",
    "\u0002\u00029:\u0007=\u0002\u0002:\u0006\u0003\u0002\u0002\u0002;<\u0007",
    "h\u0002\u0002<=\u0007n\u0002\u0002=>\u0007q\u0002\u0002>?\u0007c\u0002",
    "\u0002?@\u0007v\u0002\u0002@\b\u0003\u0002\u0002\u0002AB\u0007k\u0002",
    "\u0002BC\u0007p\u0002\u0002CD\u0007v\u0002\u0002D\n\u0003\u0002\u0002",
    "\u0002EF\u0007x\u0002\u0002FG\u0007q\u0002\u0002GH\u0007k\u0002\u0002",
    "HI\u0007f\u0002\u0002I\f\u0003\u0002\u0002\u0002JK\u0007*\u0002\u0002",
    "K\u000e\u0003\u0002\u0002\u0002LM\u0007+\u0002\u0002M\u0010\u0003\u0002",
    "\u0002\u0002NO\u0007.\u0002\u0002O\u0012\u0003\u0002\u0002\u0002PQ\u0007",
    "}\u0002\u0002Q\u0014\u0003\u0002\u0002\u0002RS\u0007\u007f\u0002\u0002",
    "S\u0016\u0003\u0002\u0002\u0002TU\u0007k\u0002\u0002UV\u0007h\u0002",
    "\u0002V\u0018\u0003\u0002\u0002\u0002WX\u0007v\u0002\u0002XY\u0007j",
    "\u0002\u0002YZ\u0007g\u0002\u0002Z[\u0007p\u0002\u0002[\u001a\u0003",
    "\u0002\u0002\u0002\\]\u0007g\u0002\u0002]^\u0007n\u0002\u0002^_\u0007",
    "u\u0002\u0002_`\u0007g\u0002\u0002`\u001c\u0003\u0002\u0002\u0002ab",
    "\u0007t\u0002\u0002bc\u0007g\u0002\u0002cd\u0007v\u0002\u0002de\u0007",
    "w\u0002\u0002ef\u0007t\u0002\u0002fg\u0007p\u0002\u0002g\u001e\u0003",
    "\u0002\u0002\u0002hi\u0007]\u0002\u0002i \u0003\u0002\u0002\u0002jk",
    "\u0007_\u0002\u0002k\"\u0003\u0002\u0002\u0002lm\u0007/\u0002\u0002",
    "m$\u0003\u0002\u0002\u0002no\u0007#\u0002\u0002o&\u0003\u0002\u0002",
    "\u0002pq\u0007,\u0002\u0002q(\u0003\u0002\u0002\u0002rs\u0007-\u0002",
    "\u0002s*\u0003\u0002\u0002\u0002tu\u0007?\u0002\u0002uv\u0007?\u0002",
    "\u0002v,\u0003\u0002\u0002\u0002w|\u0005/\u0018\u0002x{\u0005/\u0018",
    "\u0002y{\t\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002zy\u0003\u0002",
    "\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003",
    "\u0002\u0002\u0002}.\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002",
    "\u007f\u0080\t\u0003\u0002\u0002\u00800\u0003\u0002\u0002\u0002\u0081",
    "\u0083\t\u0002\u0002\u0002\u0082\u0081\u0003\u0002\u0002\u0002\u0083",
    "\u0084\u0003\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0084",
    "\u0085\u0003\u0002\u0002\u0002\u00852\u0003\u0002\u0002\u0002\u0086",
    "\u0088\t\u0004\u0002\u0002\u0087\u0086\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u008c\b\u001a\u0002\u0002\u008c4\u0003\u0002\u0002\u0002\u008d\u008e",
    "\u00071\u0002\u0002\u008e\u008f\u00071\u0002\u0002\u008f\u0093\u0003",
    "\u0002\u0002\u0002\u0090\u0092\u000b\u0002\u0002\u0002\u0091\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0095\u0003\u0002\u0002\u0002\u0093\u0094\u0003",
    "\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0094\u0096\u0003",
    "\u0002\u0002\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0007",
    "\f\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098\u0099\b\u001b",
    "\u0003\u0002\u00996\u0003\u0002\u0002\u0002\b\u0002z|\u0084\u0089\u0093",
    "\u0004\b\u0002\u0002\u0002\u0003\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CymbolLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CymbolLexer.prototype = Object.create(antlr4.Lexer.prototype);
CymbolLexer.prototype.constructor = CymbolLexer;

CymbolLexer.EOF = antlr4.Token.EOF;
CymbolLexer.T__0 = 1;
CymbolLexer.T__1 = 2;
CymbolLexer.T__2 = 3;
CymbolLexer.T__3 = 4;
CymbolLexer.T__4 = 5;
CymbolLexer.T__5 = 6;
CymbolLexer.T__6 = 7;
CymbolLexer.T__7 = 8;
CymbolLexer.T__8 = 9;
CymbolLexer.T__9 = 10;
CymbolLexer.T__10 = 11;
CymbolLexer.T__11 = 12;
CymbolLexer.T__12 = 13;
CymbolLexer.T__13 = 14;
CymbolLexer.T__14 = 15;
CymbolLexer.T__15 = 16;
CymbolLexer.T__16 = 17;
CymbolLexer.T__17 = 18;
CymbolLexer.T__18 = 19;
CymbolLexer.T__19 = 20;
CymbolLexer.T__20 = 21;
CymbolLexer.ID = 22;
CymbolLexer.INT = 23;
CymbolLexer.WS = 24;
CymbolLexer.SL_COMMENT = 25;


CymbolLexer.modeNames = [ "DEFAULT_MODE" ];

CymbolLexer.literalNames = [ null, "'='", "';'", "'float'", "'int'", "'void'", 
                             "'('", "')'", "','", "'{'", "'}'", "'if'", 
                             "'then'", "'else'", "'return'", "'['", "']'", 
                             "'-'", "'!'", "'*'", "'+'", "'=='" ];

CymbolLexer.symbolicNames = [ null, null, null, null, null, null, null, 
                              null, null, null, null, null, null, null, 
                              null, null, null, null, null, null, null, 
                              null, "ID", "INT", "WS", "SL_COMMENT" ];

CymbolLexer.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", 
                          "T__6", "T__7", "T__8", "T__9", "T__10", "T__11", 
                          "T__12", "T__13", "T__14", "T__15", "T__16", "T__17", 
                          "T__18", "T__19", "T__20", "ID", "LETTER", "INT", 
                          "WS", "SL_COMMENT" ];

CymbolLexer.grammarFileName = "Cymbol.g4";



exports.CymbolLexer = CymbolLexer;

