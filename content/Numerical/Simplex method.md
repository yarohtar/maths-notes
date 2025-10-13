## Simplex algorithm
Have the problem:
Minimize $(c^T\quad 0^T)x$ s.t. $(A\quad I)x=b$ and $x\geq 0$.
where $I$ is $m\times m$ identity matrix, and $b\geq 0$.

Hence try a [[Numerical/Basic solutions (LP)\|BFS]] $x^T=(0^T\quad b^T)$ 
(which of course has exactly $m$ nonzero indices)
Now apply [[Numerical/Optimality conditions in LPs#Optimality condition\|the optimality condition]], 
noting that (in that notation) $c_B=0$ (and $B=I$), 
hence we only need to check $c\geq 0$. 
If so, we are done.
Otherwise, find an index s.t. $c_j$ is negative 
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
so we can apply the [[Numerical/Simplex method#Simplex algorithm\|simplex algorithm]]. 
This *has to* terminate at a solution $(x_0^T\quad 0^T)$ if the original problem is feasible. 
But now $x_0$ is a [[Numerical/Basic solutions (LP)\|BFS]] of the original problem. 
Now, given that we also tracked the $c^Tx$ function in this algorithm, 
we are sure to have a good setup for Phase 2.
### Phase 2
We can remove $y$ from our consideration and apply the [[Numerical/Simplex method#Simplex algorithm\|simplex algorithm]] again, 
now only looking at $c^Tx$.