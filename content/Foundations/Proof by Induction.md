Let $X$ be a [[Foundations/Well-ordered]] set and $S\subseteq X$ 
s.t. for every $x\in X$, if $y\in S$ for all $y<x$, then $x\in S$. 
Then $S=X$
#### Proof
If not, then let $x=min(X\setminus S)$. Then for $y<x$, we have $y\in S$ by choice of $x$. By assumption on $S$, we have $x\in S$.
