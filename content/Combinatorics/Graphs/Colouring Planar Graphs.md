## Proposition
Let $G$ be planar. Then $\delta(G)\leq 5$.
### Proof
The average degree of $G$ is $\frac{2e}{n}$
Since $e\leq 3n-6$ the average degree is at most $6-\frac{12}{n}<6$
So minimal degree is at most $5$
## Proposition
Let $G$ be planar. Then $G$ admits a $6$ colouring.
### Proof
Proof by induction. 
Let $x$ be the vertex of minimum degree in $G$
Then $G-x$ is still planar so has a $6$ colouring.
Also $x$ is connected to at most $5$ vertices in $G$ 
so we can choose a sixth colour for $x$
## Proposition
Let $G$ be planar. Then $G$ admits a $5$ colouring.
### Proof
By induction.
Let $x\in V(G)$ have degree at most $5$
Then colour $G-x$ in $5$ colours.
Let $x_{1},x_{2},x_{3},x_{4},x_{5}$ be neighbourhoods of $x$ arranged clockwise
WLOG they are all coloured differently, 
say by colours $1,2,3,4,5$ respectively.
Consider the connected component of $x_{1}$ 
in the subgraph of $G$ consisting of vertices of colours $1,3$
If $x_{3}$ is not in that component, then swap colours $1,3$ 
and colour $x$ by $1$
Otherwise there is a path from $x_{1}$ to $x_{3}$ in colours $1,3$
Do similar for $x_{2}$ and $x_{4}$ with colours $2,4$
The graph is planar, so these two paths intersect
But this is a contradiction.