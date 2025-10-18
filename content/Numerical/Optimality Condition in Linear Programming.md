Consider a [[Numerical/Linear Program]] in the standard form:
" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to $Ax=b$ and $x\geq 0$ "
where $A\in \mathbb{R}^{m\times n}$, $c\in \mathbb{R}^{n}$ and $b\in \mathbb{R}^{m}$.
Suppose $x$ is a [[Basic Feasible Solution]] with [[Support]] $B\subseteq[n]$
Then $x$ is optimal
if and only if
$$
c - A^{T}\lambda \geq 0
$$
for some $\lambda \in \mathbb{R}^{m}$ satisfying $(A_{B}^{T})\lambda=c_{B}$
where $A_{B}$ is $m\times \lvert B \rvert$ submatrix of $A$
obtained by taking $i$-th columns of $A$ for all $i\in B$

Moreover, $\lambda$ is then feasible and optimal solution for the [[Numerical/Dual Problem]].
### Proof
Start from the [[Numerical/Dual Problem in Linear Programs]]:
" Maximize $\lambda^Tb$ over $\lambda \in \mathbb{R}^{m}$ subject to $A^{T}\lambda\leq c$ "
Note that a feasible $x$ is primal optimal 
and feasible $\lambda$ is dual optimal
if and only if 
[[Numerical/Complimentary Slackness]] holds (due to [[Numerical/Dual Problem in Linear Programs#Lemma]])
i.e. $(c-A^{T}\lambda)x=0$
i.e. $c_{B} - A_{B}^{T}\lambda=0$ (due to [[Support]] of $x$ being $B$)
#### $\implies$
Suppose $x$ is primal optimal.
By [[Numerical/Strong duality in linear programs]], 
there is some feasible $\lambda$ that is dual optimal.
By the observation above, this means 
$$
c_{B}-A_{B}^{T}\lambda=0
$$
By feasibility of $\lambda$:
$$
c-A^{T}\lambda\geq 0
$$
#### $\impliedby$
Suppose some $\lambda$ satisfying $(A_{B}^{T})\lambda=c_{B}$ also satisfies:
$$
c-A^{T}\lambda\geq 0
$$
Then $\lambda$ is feasible, and $(c-A^{T}\lambda)x=0$ so [[Numerical/Complimentary Slackness]] holds.
This happens if and only if $x$ is primal optimal and $\lambda$ is dual optimal.

