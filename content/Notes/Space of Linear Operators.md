[[Notes/Linear Operator]]
[[Notes/Operator Norm]]
### Definition
Write $L(X,Y)$ (or $B(X,Y)$) for the set of continuous linear maps $X\to Y$.
Note that $S,T \in L(X,Y)$ then $S+T\in L(X,Y)$.
Indeed $\lVert (S+T)x \rVert\leq \lVert Sx \rVert+\lVert Tx \rVert\leq (\lVert S \rVert+\lVert T \rVert)\lVert x \rVert$ so $S+T$ is bounded. 
Moreover, $\lVert S+T \rVert\leq \lVert S \rVert+\lVert T \rVert$ so $\lVert  \rVert$ is indeed a norm on $L(X,Y)$.

### Proposition
$X,Y,Z$ normed, $S\in L(X,Y)$ and $T\in L(Y,Z)$. Then $T\circ S\in L(X,Z)$ and $\lVert T\circ S \rVert\leq \lVert T \rVert\lVert S \rVert\lVert x \rVert$.

### Properties
[[Notes/Closed subspace of L(X,Y)]]
[[Notes/Completeness of L(X,Y)]]
