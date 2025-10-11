Let $A$ be a matrix, $v$ nonzero vector and $m\in \mathbb{N}$
We define the Krylov subspace as:
$$
K_{m}(A,v) = \operatorname{span}\{ A^{i}v : 0\leq i<m \}
$$
## Lemma
Let $A$ have $s$ distinct eigenvalues.
Then for any $v$ and any $m$:
$$
\operatorname{dim} K_{m}(A,v) \leq s
$$
### Proof
Expand $v$ in the eigenbasis 
and then group together vectors with the same eigenvalue.
