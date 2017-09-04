grammar Expr;
prog:	(expr NEWLINE)* ;
expr:	expr ops expr
    |	atom
    |	'(' expr ')'
    ;
ops:  ('+'|'-'|'*');
atom: INT ;
NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;