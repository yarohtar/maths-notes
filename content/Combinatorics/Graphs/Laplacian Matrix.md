Let $G$ be a [[Weighted Graph]] on $\{ 1,2,\dots,n \}$
with [[Adjacency Matrix]] $A$.
The Laplacian matrix $L_{G}$ is the $n\times n$ matrix defined by:

$$
(L_{G})_{ij} = \begin{cases}
-A_{ij}  & i\neq j \\
\sum_{j\neq i} A_{ij}  & i=j
\end{cases}
$$
