Let $R$ be a commutative [[Algebra/Ring Theory/Ring\|Ring]].
Let $R\langle e_{1}, e_{2}, \dots, e_{n}\rangle$ be the free associative algebra.
Then the exterior algebra is 
$$
\Lambda(R) = R \left< e_{1},\dots,e_{n} \right> / \left<e_{i}^{2},\ e_{i}e_{j} + e_{j}e_{i} \text{ for }i\neq j \right> 
$$
Every element of $\Lambda(R)$ can be written as: 
$$
r_{0} + \sum r_{i}e_{i} + \sum r_{ij}e_{i}e_{j} + \dots
$$
where WLOG the products are ordered in increasing indices.

### Lemma
Let $A$ be an $n\times n$ matrix over a [[Algebra/Ring Theory/Ring\|Ring]] $R$.
Then in $\Lambda(R)$ we have the identity:
$$
\begin{align}
(\det A) e_{1}e_{2}\dots e_{n}  & = (A_{11}e_{1} + \dots + A_{1n}e_{n}) \dots(A_{n 1}e_{1} + \dots + A_{nn}e_{n}) \\
 & = \prod_{i=1}^{n} \sum_{j=1}^{n} A_{ij}e_{j}
\end{align}
$$

