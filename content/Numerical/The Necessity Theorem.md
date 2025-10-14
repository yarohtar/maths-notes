For some $b$ let:
$$\phi(b)=\inf_{x\in X,\ g(x)=b}f(x)$$
If $\phi$ is defined and [[Analysis/Convex Function]], 
then there is a $\lambda=\lambda(b)$ with:
$$
\phi(b)=\inf_{x\in X,\ g(x)=b}f(x)=\inf_{x\in X}L(x,\lambda)
$$
where $L$ is the [[Numerical/Lagrangian\|Lagrangian]]
Furthermore, if $\phi$ is differentiable, 
then $\lambda(b)$ can be taken to be $D\phi(b)$

Hence if $\phi$ is convex, 
we are sure to find $\lambda$ in [[Numerical/Lagrange sufficiency theorem]].

### Proof
Suppose $\phi$ is convex. 
Then find [[Analysis/Supporting hyperplane]] $\lambda$ of $\phi$ at $b$ and write:
$$\begin{align*}
\phi(b)&=\inf_{c}(\phi(c)+\lambda^T(b-c))\\
&=\inf_c(\inf_{x\in X,\ g(x)=c}(f(x)+\lambda^T(b-c)))\\
&=\inf_c(\inf_{x\in X,\ g(x)=c}(f(x)+\lambda^T(b-g(x))))\\
&=\inf_{x\in X}(f(x)+\lambda^T(b-g(x)))\\
&=\inf_{x\in X}L(x,\lambda)
\end{align*}$$
## Helpful fact
Suppose $X$ is convex, 
$f$ is convex, 
and all functional constraints are convex. 
Then $\phi$ is convex.