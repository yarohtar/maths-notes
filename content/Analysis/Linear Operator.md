Let $X$ and $Y$ be [[Analysis/Normed Space]]s. 
A [[Algebra/Vector Spaces/Linear]] map $T:X\to Y$ is an operator if it is continuous.
[[Analysis/Invertible Linear Map]]
### Proposition
Let $X$, $Y$ be normed, $T:X\to Y$ [[Algebra/Vector Spaces/Linear]]. 
Then the following are equivalent:
1. $T$ is continuous
2. $T$ is continuous at $0$
3. $T$ is a [[Analysis/Bounded Linear Map]]
#### Proof
##### $1\implies 2$
is obvious.
##### $2 \implies 3$
$B_{Y}$ is a [[Topology/Neighbourhood\|nbd]] of 0 in $Y$.
So there is some $\delta>0$ such that $\lVert x \rVert\leq\delta\implies \lVert Tx \rVert\leq 1$.
Now scale up
Thus $\lVert Tx \rVert\leq \frac{1}{\delta}\lVert x \rVert$ for all $x \in X$.
##### $3 \implies 1$
$\lVert Tx-Ty \rVert\leq k\lVert x-y \rVert$ so $T$ is [[Analysis/Uniformly Continuous]].
In particular it is continuous.

