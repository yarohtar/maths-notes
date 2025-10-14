Given a problem 
" Minimize $f(x)$ subject to $g(x)=b$ "
and its [[Numerical/Dual Problem]]
" Maximize $h(\lambda)=\inf_{x\in X}L(x,\lambda)$ subject to $\lambda \in \Lambda$ "
where $L$ is the [[Numerical/Lagrangian\|Lagrangian]] 
and $\Lambda$ is the set of [[Numerical/Feasible Lagrange Multipliers]]
The following holds:
$$
\sup_{\lambda\in\Lambda}h(\lambda)\leq \inf_{x\in X,\ g(x)=b}f(x)
$$
#### Proof
Note:
$$
\inf_{x\in X}L(x,\lambda) \leq \inf_{x\in X, g(x)=b}L(x,\lambda)=\inf_{x\in X,g(x)=b}f(x)
$$
Thus
$$
\sup_{\lambda \in \Lambda}h(\lambda)\leq \inf_{x\in X,g(x)=b}f(x)
$$
