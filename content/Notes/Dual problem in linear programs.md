Consider the primal problem:
Minimize $c^Tx$
s.t. $Ax=b$
$x\geq 0$

Now $$L(x,\lambda)=c^Tx-\lambda^T(Ax-b)=(c^T-\lambda^TA)x+\lambda^T b$$
$$\Omega=\{c^T-\lambda^TA\geq 0\}=\{\lambda|\lambda^TA\leq c^T\}$$
$$g(\lambda)=\inf_{x\geq 0}(c^T-\lambda^TA)x+\lambda^Tb=\lambda^Tb$$

So the dual problem is:
Maximize $\lambda^Tb$
s.t. $\lambda^TA\leq c^T$

Note that this is a linear program in [[Notes/Forms of linear programs#General form]].

If we try to find the dual problem of the dual problem, we should end up with the primal problem. This means that [[Notes/Strong duality in linear programs]] holds.