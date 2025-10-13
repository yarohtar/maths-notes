## Proposition
Let $G$ be a graph. Then $\chi(G)\leq \Delta(G)+1$
### Proof
Greedy

## Proposition
Let $G$ be a connected graph and $\delta(G)<\Delta(G)$.
Then $\chi(G)\leq \Delta(G)$
### Proof
Order vertices of $G$ into $x_{1},\dots ,x_{n}$ such that:
- $\deg x_{n}<\Delta(G)$
- $x_{n-1}$ is connected to $x_{n}$
- $x_{n-i}$ is connected to at least one of $x_{n-i+1}\dots x_{n}$
(take it as BFS)
Now every vertex $x_{i}$ has less than $\Delta(G)$ edges towards $x_{j}$ for $j<i$
Thus a greedy colouring works.
