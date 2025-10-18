Suppose we have a graph with nodes labelled $1,2,\dots,n$ and edge capacities $c_{ij}$. 
We want to find the maximum flow from $1$ to $n$ 
i.e. we want to maximize $v$ s.t. $x_{ij}\leq c_{ij}$ and for every $i$:
$$\sum_{j=1}^nx_{ij}-\sum_{j=1}^nx_{ji}=\begin{cases}v&i=1\\0&1<i<n\\-v&i=n\end{cases}$$
This is a [[Numerical/Linear Program\|linear program]].

## The Ford-Fulkerson Algorithm
First assign some initial flow with value $v$ (for example, take $x_{ij}=0$).
Then find an augmented path defined on a sequence of nodes
$$
1=i_1,i_2,\dots,i_{r-1},i_r=n
$$
s.t. for every $k=1,2,\dots r-1$
either $c_{i_ki_{k+1}}>x_{i_ki_{k+1}}$ or $x_{i_{k+1}i_k}>0$. 
Hence we can change the flow along that augmented path by 
$$
\delta=\min_k\max\{c_{i_ki_{k+1}}-x_{i_ki_{k+1}}, x_{i_{k+1}i_k}\}
$$
Repeat this until there are no more such augmented paths.

This is optimal by the [[Combinatorics/Graphs/The max-flow min-cut Theorem]]. 
To prove there are no more augmented paths, 
we just need to find a cut with $c(S)=f(S,\overline S)$. 

Note that the algorithm always terminates for integer (hence also rational) values of $c_{ij}$ 
(because then $\delta\geq 1$), 
but might not terminate if there are some irrational values.

## Dual problem
Calculate the [[Numerical/Lagrangian\|Lagrangian]]
$$
\begin{align}
L(v,x,z,\lambda, \mu)&=v+\sum_{i,\ j}\mu_{ij}(c_{ij}-x_{ij}-z_{ij}) \\
&+\sum_i\lambda_i(\sum_jx_{ij}-\sum_jx_{ji})-\lambda_1v+\lambda_nv\\
&=v(1-\lambda_1+\lambda_n)-\sum_{i,\ j}z_{ij}\mu_{ij}\\
&+\sum_{i,\ j}x_{ij}(\lambda_i-\mu_{ij}-\lambda_j)+\sum_{i,\ j}\mu_{ij}c_{ij}
\end{align}
$$
Now for $\lambda$ and $\mu$ feasible:
- $1-\lambda_1+\lambda_n=0$
- $\mu_{ij}\geq 0$
- $\mu_{ij}\geq \lambda_i-\lambda_j$
Now pick an optimal solution $x$, and pick:
$$\lambda_i=\begin{cases}1&i\in S\\0&i\in\overline S\end{cases}\quad\quad\quad\mu_{ij}=\begin{cases}1&i\in S\text{ and } j\in\overline S\\0&\text{otherwise}\end{cases}$$
(using notation from [[Combinatorics/Graphs/The max-flow min-cut Theorem]])
One can check that [[Numerical/Complimentary Slackness]] holds, 
hence the dual of max-flow problem is indeed the min-cut problem.