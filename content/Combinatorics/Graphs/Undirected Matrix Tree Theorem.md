Let $G$ be a [[Combinatorics/Graphs/Simple Graph\|Graph]] on $n$ vertices 
whose [[Combinatorics/Graphs/Laplacian Matrix]] $L_{G}$ has [[Analysis/Eigenvalue]]s $\lambda_{1}=0,\lambda_{2},\dots,\lambda_{n}$.
Then $T(G)$, the number of spanning trees of $G$, is 
$$
T(G) = \frac{1}{n} \lambda_{2}\dots \lambda_{n}
$$
### Proof 1
The number of spanning trees of $G$ rooted towards each vertex is the same.
Let $L_{G,k}$ be the matrix $L_{G}$ with $k$-th row and column removed.
Now by [[Combinatorics/Graphs/Matrix Tree Theorem]]:
$$
nT(G) = \sum_{i=1}^{n} \det(L_{G,k})
$$
This is exactly the linear coefficient (in $t$) of 
$$
-\det(L_{G}-tI) = t(\lambda_{2}-t)(\lambda_{3}-t)\dots(\lambda_{n}-t)
$$
and the result follows.
