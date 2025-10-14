We are solving the problem 
" Minimize $f(x)$ subject to $g(x)=b$, $x\in X$ "
Define [[Numerical/Lagrangian\|Lagrangian]]:
$$L(x,\lambda)=f(x)-\lambda^T(g(x)-b)$$
Now we define the dual problem: 
" Maximize $h(\lambda)=\inf_{x\in X}L(x,\lambda)$ subject to $\lambda\in \Lambda$ "
where $\Lambda$ is the set of [[Numerical/Feasible Lagrange Multipliers]]

[[Numerical/Weak Duality]]
[[Numerical/Strong Duality]]
