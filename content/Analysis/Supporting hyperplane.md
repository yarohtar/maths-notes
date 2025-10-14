We say that $\lambda\in \mathbb{R}^m$ is a supporting hyperplane to function $\phi$ at $b$ if:
$$\phi(c)\geq \phi(b)+\lambda^T(c-b)$$
for all $c\in \mathbb{R}^m$.

In a sense $\phi$ is always "above" the plane $\lambda^T(x-b)$.

### Theorem (Convexity)
$\phi:\mathbb{R}^m\rightarrow \mathbb{R}$ is convex 
if and only if 
there exists a supporting hyperplane at every $b\in \mathbb{R}^m$.

### Theorem (Gradient)
If $\phi$ is differentiable at $b$ 
and if $\phi$ has a supporting hyperplane $\lambda$ at $b$, 
then $\lambda=\nabla\phi(b)$.
#### Proof
If $\lambda$ is a supporting hyperplane, 
then for any $a\in R^m$ and $\delta>0$ we have 
$$\frac{\phi(b+a\delta)-\phi(b)}\delta \geq \lambda^T a$$
Taking $\delta\rightarrow 0$ we get $\nabla\phi(b)a\geq\lambda^Ta$ for any $a$. 
So it has to be that $\nabla\phi(b)=\lambda^T$.