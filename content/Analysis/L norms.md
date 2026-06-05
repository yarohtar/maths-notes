#### On vectors
Norms $l_p^n$ for any $1\leq p<\infty$ defined by $||X||_{p}=\left( \sum_{i=1}^{n}|X_{i}|^p \right)^{1/p}$ 

#### On sequences
Let $S$ be the space of all scalar sequences. We define the [[Analysis/Normed Space\|normed space]] 
$$
l_{p}=\left\{  X\in S : \sum_{i=1}^{\infty} |X_{i}|^p<\infty  \right\}
$$
With norm $||X||_{p}=\left( \sum_{i=1}^{\infty}|X_{i}|^p \right)^{\frac{1}{p}}$.

These all satisfy the desired properties by [[Analysis/Minkowski's Inequality]].

#### On functions
Write $L_{p}(X)$ (or just $L_{p}$ for the whole $\mathbb{R}$) for the space of all functions $f:X\to \mathbb{R}$ such that $\int_{X} \lvert f(x) \rvert^pdx$ converges.
Then the $L_{p}$ norm is defined to be:
$$
\lVert f \rVert _{p}=\left\{  \int_X \lvert f(x) \rvert ^p dx  \right\}^{1/p}
$$


[[Analysis/Dual of l spaces]]

## Spanning
Note that $\delta_{i}=(0,\dots, 0, 1, 0,\dots, 0)$ do not span $l_{p}$ 
but they do span the space of finite sequences $F$. 
We do get close because $l_{p}$ is the closure of $F$ for $1\leq p<\infty$. 

This is FALSE for $p=\infty$, e.g. let $x=(1,1,1,\dots)$. 

Also subspaces need not be closed - e.g. $F$ in $l_{1}$. 
Even have $F$ dense in $l_{1}$.
