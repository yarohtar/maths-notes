Let $X$ and $Y$ be [[Analysis/Normed Space]]s.
Write $L(X,Y)$ (or $B(X,Y)$) for the set of continuous [[Analysis/Linear Operator]]s $X\to Y$
equipped with the [[Analysis/Operator Norm]] $\lVert \cdot \rVert$.
### Lemma
The space $L(X,Y)$ is a [[Analysis/Normed Space]].
#### Proof
Note that if $S,T \in L(X,Y)$ then $S+T\in L(X,Y)$.
Indeed $\lVert (S+T)x \rVert\leq \lVert Sx \rVert+\lVert Tx \rVert\leq (\lVert S \rVert+\lVert T \rVert)\lVert x \rVert$ 
so $S+T$ is bounded,
so it is a [[Analysis/Linear Operator]]
### Proposition
Suppose $X,Y,Z$ are [[Analysis/Normed Space]]s.
Let $S\in L(X,Y)$ and $T\in L(Y,Z)$. 
Then $T\circ S\in L(X,Z)$ and 
$$
\lVert T\circ S \rVert\leq \lVert T \rVert\lVert S \rVert\lVert x \rVert
$$
### Properties
[[Analysis/Closed subspace of L(X,Y)]]
[[Analysis/Completeness of L(X,Y)]]
