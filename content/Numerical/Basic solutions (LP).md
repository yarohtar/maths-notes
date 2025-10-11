### Definition (Basic solution)
Let $A$ be a $m\times n$ matrix. A point $x$ such that $Ax=b$ is called basic solution if $x$ has at most $m$ non-zero entries.

### Definition (BFS)
A basic feasible solution (BFS) is a basic solution $x$ such that $x\geq 0$.

### Theorem
A point $x$ is an [[XNotes/Extreme point of convex set\|extreme point]] of $\{x| Ax=b, x\geq 0\}$ if and only if $x$ is a BFS.
#### Proof
Let $x$ be a BFS and suppose $x=\delta y + (1-\delta)z$, $y\neq z$ and $y,z$ feasible.
If $x_i=0$, then $y_i=z_i=0$, so both $y$ and $z$ are BFS corresponding to the same $B$ as $x$ so $y=z=x$. Hence $x$ has to be an extreme point.

Suppose $x$ is not a BFS. We show it cannot be an extreme point. Let $i_1,\dots i_r$ ($r>m$) be indices where $x$ is non-zero.

As $A$ is a $m\times n$ matrix, it's columns $A_{i_1},\dots A_{i_r}$ have to be linearly dependent, so we can write $Aw=0$ for some non-zero vector $w$ which has zero entries everywhere except on $i_1\dots i_r$.

Now take $\epsilon$ small enough such that $y=x+\epsilon w\geq 0$ and $z=x-\epsilon w\geq 0$ (can do this, as $x$ has non-zero entries at same indices as $w$). Now $y$ and $z$ are both feasible and also $x=\frac 1 2 y + \frac 1 2 z$, so not an extreme point.