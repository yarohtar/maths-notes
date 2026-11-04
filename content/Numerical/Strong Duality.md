Given a problem
" Minimize $f(x)$ subject to $g(x)=b$ "
and its [[Dual Problem]]
" Maximize $h(\lambda)=\inf_{x\in X}L(x,\lambda)$ subject to $\lambda \in \Lambda$ "
where $L$ is the [[Numerical/Lagrangian|Lagrangian]]
and $\Lambda$ is the set of [[Feasible Lagrange Multipliers]]
We say that strong duality holds if

$$
h(\lambda ^{*}) = f(x^{*})
$$

for some feasible $x^{*}$ and $\lambda ^{*}\in \Lambda$

Note that by [[Weak Duality]], this is optimal for both problems.

## Theorem

Strong duality holds for any [[Linear Program]].
