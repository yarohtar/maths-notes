## Second-order condition

Convexity $\implies$ $f''\geq 0$

If $f:R^n\rightarrow R$, second derivative will be matrix
$$[\nabla^2f(x)]_{ij}= \frac{\partial^2 f(x)}{\partial x_i\partial x_j}$$
## Theorem
Let $f:\mathbb{R}^n\rightarrow \mathbb{R}$ be twice-differentiable.
Then $f$ is convex if and only if $\nabla^2f(x)\succeq 0$ for all $x\in R^n$.
([[Analysis/Positive semi-definite]]).

### Proof
Let $f$ satisfy the second-order condition.
Then
$$
f(y)=f(x)+(y-x)^T\nabla f(x) + \frac{1}{2} (y-x)^T\nabla^2f(x)(y-x) +\dots
$$
[[Analysis/Taylor series for multivariate]]

Take $z$ between $x$ and $y$ s.t.
$$
f(y)=f(x)+(y-x)^T\nabla f(x) + \frac{1}{2} (y-x)^T\nabla^2f(z)(y-x)\geq f(x)+(y-x)^T\nabla f(x)
$$ 
(we used positive-semidefinite here)
Since the first-order condition holds, $f$ must be convex

To prove the converse, consider a new function
$g(y)=f(y)-(y-x)^T\nabla f(x)$ (for some $x$)
Use Taylor series for $g$ at $x$ and take the limit as $y\rightarrow x$.