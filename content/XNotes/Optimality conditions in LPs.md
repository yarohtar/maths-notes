[[XNotes/Strong duality in linear programs]]

### Theorem
Let $x$ be primal feasible, $\lambda$ be dual feasible and suppose complimentary slackness holds. Then $x$ and $\lambda$ are optimal. Conversely, if $x$ and $\lambda$ are optimal, then complimentary slackness holds.
#### Proof
[[Numerical/Dual problem in linear programs]]
````col
```col-md
flexGrow=1
===
Primal problem
Minimize $c^Tx$
s.t. $Ax=b$
$x\geq 0$
```
```col-md
flexGrow=1
===
Dual problem
Maximize $\lambda^Tb$
s.t. $\lambda^TA\leq c^T$
```
````

[[Numerical/Complimentary slackness]] means that
$$(c^T-\lambda^TA)x=0$$
Let $x$ be primal feasible, and $\lambda$ dual feasible.
Observe 
$$\begin{align*}
(c^T-\lambda^TA)x&=c^Tx-\lambda^TAx\\
&=c^Tx-\lambda^Tb\\
&=0

\end{align*}$$
So indeed $c^Tx=\lambda^Tb$ and they are optimal. 
The other direction is similar.

### Optimality condition
Suppose  is a BFS with non-zero indices among $B(1),\dots B(m)$.
Now suppose we can find $\lambda$ s.t.
- $(c^T-\lambda^TA)_{B(i)}=0$ complimentary slackness
- $\lambda^TA\leq c^T$ feasibility of $\lambda$
Hence write:
$$\lambda^TB=c_B^T$$
$$B^T\lambda=c_B$$
$$\lambda=(B^T)^{-1}c_B$$
So as long as:
$$(c^T-c_B^TB^{-1}A)\geq 0$$
we can find such $\lambda$ and hence use [[XNotes/Optimality conditions in LPs#Theorem\|the theorem]] to finish.