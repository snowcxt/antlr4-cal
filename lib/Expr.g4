grammar Expr;
prog  : stat+ ;
stat  : expr NEWLINE                      #print
      | ID '=' INT NEWLINE                #assign
      | NEWLINE                           #blank
      ;
expr  : left=expr op=('*'|'/') right=expr #opExpr
      | left=expr op=('+'|'-') right=expr #opExpr
      | '(' expr ')'                      #parenExpr
      | INT                               #atomExpr
      | ID                                #idExpr
      ;
NEWLINE : ';' ;
INT     : [0-9]+ ;
ID      : [a-zA-Z]+;
WS      : [ \t\n\r]+ -> skip;