There does not exist a partition of $K_{n}$ into $(n-2)$ complete bipartite graphs.
### Proof
Suppose there is such a partition into $H_{i}$ for $1\leq i\leq n-2$.
Let $A_{i}$ be the [[Combinatorics/Graphs/Adjacency Matrix]] of $H_{i}$ 
with edges between $X_{i}\subseteq[n]$ to $Y_{i}\subseteq[n]$.
Then 
$$
J-I = \sum_{i=1}^{m} A_{i}
$$
where $J$ is the matrix with all $1$s.
Let $A_{i}'$ be the [[Combinatorics/Graphs/Adjacency Matrix]] when the edges in $H_{i}$ are directed $X_{i}\to Y_{i}$
Note $A_{i}=A_{i}'+A_{i}'^{T}$
Each $A_{i}'$ has a rectangle block of $1$s and the rest zeros.
Thus the rank of $A_{i}'$ is $1$.
Let $D=\sum_{i} A_{i}'$.
Then $D$ has rank at most $n-2$.
Since the matrix $J$ has rank $1$, 
there is some $x\neq 0$ such that $Dx=Jx=0$.
Now calculate 
$$
0 = x^{T} (Dx) + (Dx)^{T}x = x^{T}(D+D^{T})x = x^{T}(J-I)x = -\lVert x \rVert^{2}
$$
which is a contradiction.
 