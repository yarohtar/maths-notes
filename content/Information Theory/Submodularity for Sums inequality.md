Let $X,Y,Z$ be [[Probability/Independent]] [[Probability/Random Variable]]s in $\mathbb{Z}$.
Then 
$$
H(X+Y+Z) + H(Y) \leq H(X+Y) + H(Y+Z)
$$
### Proof
[[Information Theory/Data Processing Property of the Mutual Information]]:
$$
I(X;X+Y) \geq I(X;X+Y+Z)
$$
## Corollary
Let $X$ and $X'$ be iid.
Then:
$$
\frac{ H(X+X') - H(X) }{ H(X-X') - H(X) } \leq 2
$$
### Proof
Let $Y\sim -X$ be [[Probability/Independent]] from $X$ and $X'$.
Then 
$$
H(X+Y+X') + H(X) \leq H(X-X') + H(-X+X') = 2 H(X-X')
$$
Also we have $H(X+X')\leq H(X+Y+X')$ so the inequality follows.