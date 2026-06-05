Let $\{ S_{1},\dots,S_{m} \}$ be a family of subsets of $[n]$ such that $\lvert S_{i} \rvert$ is odd
and $\lvert S_{i}\cap S_{j} \rvert$ even for all $i\neq j$.
Then 
$$
m\leq n
$$
Note, this is much smaller than [[Combinatorics/Even Town Theorem]].
### Proof
Take such sets $S_{1},\dots,S_{m}$
Take their indicators $\chi_{S_{i}}\in \mathbb{F}_{2}^{n}$.
Note that the dot product satisfies 
$$
\chi_{S_{i}} \cdot \chi_{S_{j}} = \delta_{ij}
$$
We claim that $\chi_{S_{i}}$ are linearly independent.
Suppose 
$$
\sum_{i=1}^{m} \lambda_{i} \chi_{S_{i}} = 0
$$
Taking the dot product with $\chi_{S_{i}}$ we deduce $\lambda_{i}=0$.
Thus we conclude $m\leq n$.
