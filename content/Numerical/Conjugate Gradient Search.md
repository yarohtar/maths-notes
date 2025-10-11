[[Numerical/Iterative Methods for Linear Algebraic Systems]]
[[Numerical/Exact Line Search]]
## Theorem
Let $d^{0},d^{1},\dots,d^{n-1}$ be $n$ [[Numerical/Conjugate Directions]]
and consider the sequence of iterates:
$$
x^{k+1}= x^{k} + \alpha_{k} d^{k}
$$
where 
$$
\alpha_{k} = \frac{(r^{k},d^{k})}{(d^{k},Ad^{k})}
$$
Then $r^{k}$ is orthogonal to $d^{0},\dots,d^{k-1}$.
In particular $r^{n}=0$.
#### Proof
Nothing special, just check.

# The method
See [[Numerical/Standard Conjugate Gradient Method]] for the optimized algorithm.
### Initial conditions
For any initial $x^{0}$, set $d^{0}=r^{0}=b-Ax^{0}$
### Iterate
For $k\geq 0$ find $x^{k+1}$ and $r^{k+1}$ by the usual formula (above)
### Next direction
The next conjugate direction is:
$$
d^{k+1} = r^{k+1} +\beta_{k} d^{k}
$$
with
$$
\beta_{k} = - \frac{(r^{k+1},Ad^{k})}{(d^{k},Ad^{k})}
$$
i.e. the value that makes $d^{k+1}$ normal to $Ad^{k}$
## Theorem (properties)
For every $m\geq 0$, the conjugate gradient satisfies:
1. For every $k$:
$$
\operatorname{span}\{ r_{i} : i<k\}=\operatorname{span}\{ d_{i} : i<k\}=\operatorname{span}\{ A^{i}r^{0}:i<k \}
$$
2. For $i<k$, we have orthogonality conditions:
$$
(r^{k},r^{i})=(r^{k},d^{i}) = 0
$$
3. The directions are conjugate, for $i<k$:
$$
(d^{k},d^{i})_{A} = 0
$$
### Proof
Prove all three claims by one induction on $k$.
## Corollary (simplification)
$$
\alpha_{k} = \frac{\lVert r^{k} \rVert^{2} }{(d^{k},Ad^{k})}
$$
Also $Ad^{k}$ is a multiple of $r^{k+1}-r^{k}$ so:
$$
\beta_{k} = -\frac{(r^{k+1},r^{k+1}-r^{k})}{(d^{k},r^{k+1}-r^{k})} =  \frac{\lVert r^{k+1} \rVert ^{2}}{\lVert r^{k} \rVert ^{2}}
$$
## Corollary (number of iterations)
Let $s$ be the number of distinct eigenvalues of $A$
Then the method terminates in at most $s$ steps.
### Proof
[[Algebra/The Krylov Subspaces]]

# Preconditioning
The method converges the fastest if the [[Numerical/Condition Number]] is close to $1$
To that end, we introduce a change of variables $x=P^{T}\hat{x}$,
where $P$ is some nonsingular preconditioner. 
We now solve:
$$
PAP^{T}\hat{x}=Pb
$$
Note that similarity transformations preserve the spectrum so:
$$
\kappa(PAP^{T}) = \kappa(P^{-1}PAP^{T}P) = \kappa(AP^{T}P)
$$
Now if $S$ is an approximation to $A$ such that $S=QQ^{T}$ we can set $P=Q^{-1}$ 