Given a set of variables $V$ and a set of terminal symbols $\Sigma$, a parse tree is a tree $T$ with labelling $\ell$ such that:
1. if $v\in T$ is a leaf then $\ell(v)\in \Sigma$
2. if $v\in T$ is not a leaf then $\ell(v)\in V$

We always look at this tree as being rooted at the top and then having a notion of left to right. For example, if $G$ is a [[Notes/Grammar]] and the parse tree "respects" $G$ and say $S\to ABC$ is a rewrite rule, then $A$ is the leftmost descendent of $S$, $B$ is the middle descendent of $S$, while $C$ is the rightmost descendent of $S$. 

![[Excalidraw/Parse Tree 2025-05-10 22.38.00.excalidraw]]

Note that parse tree is not meant to simulate a grammar. It is merely here to represent one derivation (and it may not exist for certain derivations in some grammars)

Write $\sigma_{T}$ for the word consisting of leaves read from left to right. 

### Proposition
Let $G$ be a [[Notes/Context-Free Formal Language\|context-free grammar]] which produces a word $w$. Then there exists a (not necessarily unique) parse tree $T$ such that $\sigma_{T}=w$.
