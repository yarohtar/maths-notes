A funciton $f:R^n\rightarrow R$ is said to be $\beta-smooth$ if $\nabla^2f(x)\preceq \beta I$.

All eigenvalues of $\nabla^2 f(x)$ are $\leq\beta$

### Theorem:
Let $f$ be $\beta-smooth$. Then
$f(x)+(y-x)^T\nabla f(x)\leq f(y)\leq f(x)+(y-x)^T\nabla f(x)+\frac{\beta}{2}||x-y||^2$
#### Proof:
Apply Taylor and $\beta-smooth$.

### Corollary:
$f(x-\frac{1}{\beta} \nabla f(x))\leq f(x)-\frac{||\nabla f(x)||^2}{2\beta}$
#### Remark
$x_{t+1}=x_t-\frac{1}{\beta}\nabla f(x)$
so we always make progress while making a step - but not necessarily fast enough.
#### Proof of Corollary:
Minimise the righthandside of the theorem with respect to $y$ by taking the gradient.