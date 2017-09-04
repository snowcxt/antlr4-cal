// grammar Expr;
// prog:	(expr NEWLINE)* ;
// expr:	expr ops expr
//     |	atom
//     |	'(' expr ')'
//     ;
// ops:  ('+'|'-'|'*');
// atom: INT ;
// NEWLINE : [\r\n]+ ;
// INT     : [0-9]+ ;


grammar Expr;
prog:	(expr NEWLINE)* ;
expr  : left=expr op=('*'|'/') right=expr #opExpr
      | left=expr op=('+'|'-') right=expr #opExpr
      | '(' expr ')'                      #parenExpr
      | atom=INT                          #atomExpr
      ;
NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;

