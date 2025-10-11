Every set $A$ can be [[XNotes/Well-ordered]].
#### Proof
Let $X=\{ (B,R)\in \mathbb{P}A\times \mathbb{P}(A\times A) : R \text{ is a well-ordering of B} \}$
be [[XNotes/Partial Order]]ed by extension $(B_{1},R_{1})\subseteq(B_{2},R_{2})$
iff $B_{1}\subseteq B_{2}$, $R_{1}=R_{2}\cap(B_{1}\times B_{1})$, $B_{1}$ is an initial segment of $B_{2}$
Note $X\neq \emptyset$, e.g. $(\emptyset,\emptyset)\in X$
Let $C=\{ (B_{i},R_{i}):i\in I \}$ be a nonempty [[Foundations/Chain]] in $X$, i.e. a nested set of [[XNotes/Well-ordered]] sets. 
Then $\left( \bigcup B_{i},\bigcup R_{i} \right)$ is an [[XNotes/Upper Bound]] for $C$ 
By [[XNotes/Zorn's Lemma]] there is a [[XNotes/Maximal]] element $(B,R)$ of $X$.
If $B\neq A$ then for $x\in A\setminus B$  ... is a strictly greater than $(B,R)$
