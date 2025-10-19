Consider the [[Numerical/Linear Program]]:
" Minimize $(c^T\quad 0^T)x$ over $x\in \mathbb{R}^{n}$, $x\geq 0$ subject to $(A\quad I)x=b$ "
where $I$ is an $m\times m$ identity matrix
$A$ is an $m\times(n-m)$ matrix
and $c\in \mathbb{R}^{n-m}$, $b\in \mathbb{R}^{m}$ are vectors and $b\geq 0$

Consider a vector $x^{T}=(0^{T}\quad b^{T})$
It has a [[Numerical/Basis]] $B=\{ n-m+1, \dots, n \}$
The corresponding columns in $(A\quad I)$ is the matrix $I$
Thus $x$ is a [[Numerical/Basic Solution]] and $x\geq 0$ so $x$ is a [[Numerical/Basic Feasible Solution]].

Now apply the [[Numerical/Optimality Condition in Linear Programming]]
which simplifies to:
$x$ is optimal
if and only if
$$
c\geq 0
$$

Otherwise, find an index such that $c_j$ is negative 
(usually the most negative one). 
Then find $i$ s.t. $b_i/A_{ij}$ is the smallest possible positive value. 
If they are all negative the problem is unbounded.

Now pivot around $A_{ij}$, 
i.e. use row operations to make the $j$-th column be $e_i$. 
Note that these operations will preserve $b\geq 0$. 
Now by swapping columns we have arrived at the same form as the starting problem.
Repeat these steps until done.

## Two-phase algorithm
If our initial problem is not of the desired form, we do two phases, as follows.
### Phase 1
Suppose we are given the problem of minimizing $c^Tx$ s.t. $x\geq 0$ and $Ax=b$. 
We can WLOG take $b\geq 0$.
First consider the problem of minimizing $\sum_i y_i$ s.t. $Ax+y=b$, with $x,\ y\geq 0$. 
Now this is of the form $(A\quad I)y=b$, 
so we can apply the [[Numerical/Simplex method]]. 
This *has to* terminate at a solution $(x_0^T\quad 0^T)$ if the original problem is feasible. 
But now $x_0$ is a [[Numerical/Basic Solution\|BFS]] of the original problem. 
Now, given that we also tracked the $c^Tx$ function in this algorithm, 
we are sure to have a good setup for Phase 2.
### Phase 2
We can remove $y$ from our consideration and apply the [[Numerical/Simplex method]] again, 
now only looking at $c^Tx$.