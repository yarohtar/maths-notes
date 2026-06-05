Consider the primal problem:
" Minimize $c^Tx$ over $x\geq 0$ subject to $Ax=b$ "
where $x,c\in \mathbb{R}^{n}$, $b\in \mathbb{R}^{m}$ and $A$ is an $m\times n$ matrix.
Now the [[Numerical/Lagrangian\|Lagrangian]] is:
$$
L(x,\lambda)=c^Tx-\lambda^T(Ax-b)=(c^T-\lambda^TA)x+\lambda^T b
$$
The set of [[Numerical/Feasible Lagrange Multipliers]] is:
$$
\Lambda=\{c^T-\lambda^TA\geq 0\}=\{\lambda:\lambda^TA\leq c^T\}
$$
and finally, the [[Numerical/Dual Problem]] function is:
$$
h(\lambda)=\inf_{x\geq 0}(c^T-\lambda^TA)x+\lambda^Tb=\lambda^Tb
$$
So the dual problem is:
" Maximize $\lambda^Tb$ over $\lambda$ subject to $\lambda^TA\leq c^T$ "
where $\lambda \in \mathbb{R}^{m}$.

Note that this is a [[Numerical/Linear program]] in [[Numerical/Forms of linear programs#General form\|General Form]].

If we try to find the dual problem of the dual problem, 
we should end up with the primal problem. 

## Lemma
In a [[Numerical/Linear program]] and its [[Numerical/Dual Problem]] (as above)
Let $x$ be primal feasible,
and let $\lambda$ be dual feasible

Then $x$ and $\lambda$ are optimal 
if and only if 
[[Numerical/Complimentary slackness]] holds.
### Proof
[[Numerical/Complimentary slackness]] is equivalent to:
$$
(c^T-\lambda^TA)x=0
$$
#### $\implies$
Suppose $x$ and $\lambda$ are optimal (feasible) solutions.
Due to [[Numerical/Strong duality in linear programs]]:
$$
c^{T}x-\lambda^{T}b=0
$$
Then substitute $b=Ax$ to find $(c^{T}-\lambda^{T}A)x=0$ 
Hence [[Numerical/Complimentary slackness]] holds.
#### $\impliedby$
Let $x$ be primal feasible, and $\lambda$ dual feasible
and suppose $(c^{T}-\lambda^{T}A)x=0$
Then substitute $b=Ax$ to find $c^{T}x=b^{T}\lambda$
Due to [[Numerical/Weak Duality]], 
this can only happen if $x$ and $\lambda$ are optimal.
