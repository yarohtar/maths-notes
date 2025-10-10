See [[Notes/Duality (Optimisation)]]


$$g(\lambda)=\inf_{x\in X}L(x,\lambda)$$
### Weak duality theorem
For every $\lambda\in\Omega$ and $x\in X(b)$, $g(\lambda)\leq f(x)$.
#### Proof
$$
\begin{align*}
g(\lambda)&=\inf_{x\in X} L(x,\lambda) \\
&=\inf_{x\in X} f(x)-\lambda^T(h(x)-b) \\
&\leq\inf_{x\in X(b)} f(x)-\lambda^T(h(x)-b)\\
&=\inf_{x\in X(b)}f(x)
\end{align*}
$$
### Dual problem
The dual problem is finding the maximum of $g(\lambda)$.
[[Notes/Dual problem in linear programs]]

### Strong duality
If we find an $x$ such that $f(x)=g(\lambda)$, we say that strong duality holds.

## When does Strong duality hold?
### Definitions
Define value function $\phi :R^m\rightarrow R$
$$\phi(b)=\inf_{x\in X(b)} f(x)$$

Let $\lambda\in R^m$ be a [[Notes/Supporting hyperplane]] to function $\phi$.

### Theorem 
If there exists a $\lambda$ which is a supporting hyperplane to $\phi$ at $b$, the strong duality holds. Conversely, if $g(\lambda)=\phi(b)$, then $\lambda$ is a [[Notes/Supporting hyperplane]] at $b$.
#### Proof
($\implies$)
$$
\begin{align*}
g(\lambda)&=\inf_{x\in X}L(x,\lambda)\\
&=\inf_c\inf_{x\in X(c)}f(x)-\lambda^T(h(x)-b+c-c)\\
&=\inf_c\inf_{x\in X(c)}f(x)-\lambda^T(h(x)-c)+\lambda^T(b-c)\\
&=\inf_c\phi(c)+\lambda^T(b-c)\\
&\geq\phi(b)
\end{align*}
$$
Last step obtained by supporting hyperplane.

But also $g(\lambda)\leq\phi(b)$ by [[Notes/Dual problem (Optimisation) DEPRECATED#Weak duality theorem]].
So we do have strong duality.

($\impliedby$)
$$
\begin{align*}
\phi(b)&=g(\lambda)\\&=\inf_{x\in X} f(x)-\lambda^T(h(x)-b)\\
&=\inf_{x\in X}f(x)-\lambda^T(h(x)-c)+\lambda^T(b-c)\\
&\leq\inf_{x\in X(c)}f(x)-\lambda^T(h(x)-c)+\lambda^T(b-c)\\
&=\phi(c)+\lambda^T(b-c).
\end{align*}
$$
