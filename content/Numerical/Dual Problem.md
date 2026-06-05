Given a primal problem:
" Minimize $f(x)$ subject to $g(x)=b$, $x\in X$ "
Define the [[Numerical/Lagrangian\|Lagrangian]]:
$$
\begin{align}
L(x,b,\lambda) & =f(x)-\lambda^T(g(x)-b) \\
 & =-\lambda^{T} g(x)  + f(x) + \lambda^{T}b
\end{align}
$$
Now we define the dual problem: 
" Maximize $h(\lambda)=\inf_{x\in X}L(x,\lambda)$ subject to $\lambda\in \Lambda$ "
where $\Lambda$ is the set of [[Numerical/Feasible Lagrange Multipliers]]

[[Numerical/Weak Duality]]
[[Numerical/Strong Duality]]
