Every vector space has a basis.
#### Proof
We seek a maximal (wrt inclusion) linearly independent subset $B$ of $V$. Then $B$ is a basis.

Let $X=\{ A\subseteq V :A\text{ is L.I.} \}$ partially ordered by inclusion.
Let $C=\{ A_{i}:i\in I \}$ be a chain in $X$. We show that $A=\bigcup_{i\in I}A_{i}$
is an upper bound for $C$.
We have $A_{i}\subseteq A$ for all $i\in I$.
We need $A\in X$ i.e. $A$ is linearly independent.
Assume $\sum_{j=1}^{n}\lambda_{j}x_{j}=0$ is a linear relation on $A$.
For each $j=1,\dots,n$ there is some $i_{j}\in I$ such that $x_{j}\in A_{i_{j}}$
Since $C$ is a chain, there is some $k\in \{ 1,\dots,n \}$ s.t. 
$\bigcup_{j=1}^{n}A_{i_{j}}=A_{i_{k}}$.
Since $A_{i_{k}}$ is linearly independent, $\lambda_{1}=\dots=\lambda_{n}=0$
So $A$ is linearly independent.
By [[Foundations/Zorn's Lemma]], $X$ has a maximal element $B$.
