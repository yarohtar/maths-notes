Let $G$ be a [[Combinatorics/Graphs/Weighted Graph]] on $\{ 1,2,\dots,n \}$ 
with [[Combinatorics/Graphs/Adjacency Matrix]] $A$.
The Laplacian matrix $L_{G}$ is the $n\times n$ matrix defined by:
$$
(L_{G})_{ij} = \begin{cases}
-A_{ij}  & i\neq j \\
\sum_{j\neq i} A_{ij}  & i=j
\end{cases}
$$
