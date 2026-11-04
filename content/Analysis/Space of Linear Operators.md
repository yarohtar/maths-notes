Let $X$ and $Y$ be [[Normed Space]]s.
Write $L(X,Y)$ (or $B(X,Y)$) for the set of continuous [[Linear Operator]]s $X\to Y$
equipped with the [[Operator Norm]] $\lVert \cdot \rVert$.

### Lemma

The space $L(X,Y)$ is a [[Normed Space]].

#### Proof

Note that if $S,T \in L(X,Y)$ then $S+T\in L(X,Y)$.
Indeed $\lVert (S+T)x \rVert\leq \lVert Sx \rVert+\lVert Tx \rVert\leq (\lVert S \rVert+\lVert T \rVert)\lVert x \rVert$
so $S+T$ is bounded,
so it is a [[Linear Operator]]

### Proposition

Suppose $X,Y,Z$ are [[Normed Space]]s.
Let $S\in L(X,Y)$ and $T\in L(Y,Z)$.
Then $T\circ S\in L(X,Z)$ and

$$
\lVert T\circ S \rVert\leq \lVert T \rVert\lVert S \rVert\lVert x \rVert
$$

### Properties

[[Closed subspace of L(X,Y)]]
[[Completeness of L(X,Y)]]
