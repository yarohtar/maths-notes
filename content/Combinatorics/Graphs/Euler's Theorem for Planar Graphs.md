Let $G$ be connected planar graph with $F$ faces.
Then:
$$
\lvert V(G) \rvert -\lvert E(G) \rvert + F = 2
$$
### Proof
Induction

## Corollary
If $G$ is planar and $\lvert G \rvert\geq 3$, then $\lvert E(G) \rvert\leq 3\lvert G \rvert-6$.
### Proof
WLOG $G$ is connected (by adding some edges)
Then $3F\leq 2\lvert E(G) \rvert$
Now:
$$
2=\lvert V(G) \rvert -\lvert E(G) \rvert +F \leq \lvert V(G) \rvert - \frac{1}{3}\lvert E(G) \rvert 
$$
so the result follows
## Corollary
Suppose $G$ is planar and $\lvert G \rvert\geq 4$ and there is no cycle of length 3.
Then $\lvert E(G) \rvert\leq 2(\lvert G \rvert -2)$
### Proof
$4\lvert F \rvert\geq 2\lvert E(G) \rvert$ 
