We are solving the problem of minimizing $f(x)$ subject to $g(x)=b$, $x\in X$.
$$L(x,\lambda)=f(x)-\lambda^T(g(x)-b)$$
We define the set of feasible Lagrange multipliers:
$$\Lambda=\{\lambda : \inf_{x\in X} L(x,\lambda)>-\infty\}$$
Now we define the dual problem: maximize $h(\lambda)=\inf_{x\in X}L(x,\lambda)$ subject to $\lambda\in \Lambda$.

### Weak duality
$$\sup_{\lambda\in\Lambda}h(\lambda)\leq \inf_{x\in X,\ g(x)=b}f(x)$$
#### Proof
Easy

### Strong duality
We can restate the [[Numerical/Lagrange sufficiency theorem]]: If $x^*$ and $\lambda^*$ are feasible for primal and dual problem respectively, and $h(x^*)=f(x^*)$ then $x^*$ is optimal.

