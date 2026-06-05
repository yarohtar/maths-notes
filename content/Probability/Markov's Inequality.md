Let $X$ be a real random variable with $\mathbb{P}(X\geq 0)=1$ and let $a\geq 0$.
$$
\mathbb{P}(X\geq a) \leq \frac{\mathbb{E}(X)}{a}
$$
#### Proof
For any $x\geq 0$ we have:
$$
\mathbb{1}(x\geq a) \cdot a \leq x
$$
Thus almost surely:
$$
\mathbb{1}(X\geq a)\leq \frac{X}{a}
$$
And taking expectations:
$$
\mathbb{P}(X\geq a)\leq \frac{\mathbb{E}(X)}{a}
$$
