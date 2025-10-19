Consider a [[Numerical/Linear Program]] in the standard form:
" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to $Ax=b$ and $x\geq 0$ "
where the matrix $A\in \mathbb{R}^{m\times n}$ has rank $m$
and $c\in \mathbb{R}^{n},\ b\in \mathbb{R}^{m}$ are vectors.
Let $x$ be a [[Numerical/Basic Feasible Solution]].
Then $x$ is optimal
if and only if
for some [[Numerical/Basis]] $B$ of $x$:
$$
c-A^{T}((A^{T}_{B})^{-1}c_{B})\geq0
$$
Additionally $\lambda=(A_{B}^{T})^{-1}c_{B}$ is then the optimal solution to the 
[[Numerical/Dual Problem in Linear Programs]]:
" Maximize $\lambda^{T}b$ over $\lambda \in \mathbb{R}^{m}$ subject to $A^{T}\lambda\leq c$ "

We will only prove the following lemma
(which gets us pretty close to the above statement)
### Lemma
Consider a [[Numerical/Linear Program]]:
" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to $Ax=b$ and $x\geq 0$ "
where $A\in \mathbb{R}^{m\times n}$, $c\in \mathbb{R}^{n}$ and $b\in \mathbb{R}^{m}$.
Suppose $x$ is a [[Numerical/Basic Feasible Solution]] with [[Analysis/Support]] $S\subseteq[n]$
Then $x$ is optimal
if and only if
$$
c - A^{T}\lambda \geq 0
$$
for some $\lambda \in \mathbb{R}^{m}$ satisfying $(A_{S}^{T})\lambda=c_{S}$
where $A_{S}$ is $m\times \lvert S \rvert$ submatrix of $A$
obtained by taking $i$-th columns of $A$ for all $i\in S$

Moreover, $\lambda$ is then feasible and optimal solution 
for the [[Numerical/Dual Problem in Linear Programs]]:
" Maximize $\lambda^{T}b$ over $\lambda \in \mathbb{R}^{m}$ subject to $A^{T}\lambda\leq c$ "
### Proof
Start from the [[Numerical/Dual Problem in Linear Programs]]:
" Maximize $\lambda^Tb$ over $\lambda \in \mathbb{R}^{m}$ subject to $A^{T}\lambda\leq c$ "
Note that a feasible $x$ is primal optimal 
and feasible $\lambda$ is dual optimal
if and only if 
[[Numerical/Complimentary Slackness]] holds (due to [[Numerical/Dual Problem in Linear Programs#Lemma]])
i.e. $x^{T}(c-A^{T}\lambda)=0$
i.e. $c_{S} - A_{S}^{T}\lambda=0$ (due to [[Analysis/Support]] of $x$ being $S$)
#### $\implies$
Suppose $x$ is primal optimal.
By [[Numerical/Strong duality in linear programs]], 
there is some feasible $\lambda$ that is dual optimal.
By the observation above, this means 
$$
c_{S}-A_{S}^{T}\lambda=0
$$
By feasibility of $\lambda$:
$$
c-A^{T}\lambda\geq 0
$$
#### $\impliedby$
Suppose some $\lambda$ satisfying $(A_{S}^{T})\lambda=c_{S}$ also satisfies:
$$
c-A^{T}\lambda\geq 0
$$
Then $\lambda$ is feasible, and $(c-A^{T}\lambda)x=0$ so [[Numerical/Complimentary Slackness]] holds.
This happens if and only if $x$ is primal optimal and $\lambda$ is dual optimal.
