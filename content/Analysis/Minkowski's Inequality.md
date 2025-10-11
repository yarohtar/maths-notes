### Lemma
$f(x)=x^p$ is convex for $1\leq p<\infty$
#### Proof
Need to show 
$$
(\lambda x+(1-\lambda)y)^p\leq \lambda x^p +(1-\lambda)y^p
$$ 
WLOG $x\leq y$. It is certainly true for $x=y$ (then equality holds). Now take derivative and show LHS>RHS.

### Minkowski's Inequality
Let $1\leq p<\infty$ and $x,y\in l_{p}$ (see [[Analysis/L norms]]). Then $x+y\in l_{p}$ and $||x+y||_{p}\leq ||x||_{p}+||y||_{p}$.
#### Proof
First show if $||x||_{p}, ||y||_{p}\leq 1$ then $||\lambda x+(1-\lambda)y||_{p}\leq 1$ for all $0<\lambda<1$. 
For each $n$ have $|\lambda x_{n}+(1-\lambda)y_{n}|^p\leq \lambda|x_{n}|^p+(1-\lambda)|y_{n}|^p$ (using lemma)
Now sum over $n$ and get that RHS is at most 1, so LHS is at most 1.
Now for general $x,y$, apply the inequality to $\frac{x}{||x||_{p}}$ and $\frac{y}{||y||_{p}}$ and take $\lambda=\frac{||x||_{p}}{||x||_{p}+||y||_{p}}$ and get the result.
