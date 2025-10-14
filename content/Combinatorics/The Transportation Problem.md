Suppose we have suppliers having supplies $s_1,s_2\dots s_n$ 
and buyers having demands $d_1,d_2\dots d_m$. 
(WLOG assume their sums are the same). 
The transportation cost from $s_i$ to $d_j$ is $c_{ij}$.
Hence, this is a [[Numerical/Linear programs\|linear program]]:
minimise $\sum_{i,\ j}x_{ij}c_{ij}$ s.t. $\sum_j x_{ij}=s_i$ and $\sum_ix_{ij}=d_j$.
Calculate the [[Numerical/Lagrangian\|Lagrangian]]:
$$\begin{align}L(x,\lambda,\mu)&=\sum_{i,j}x_{ij}c_{ij}-\sum_i\lambda_i(\sum_jx_{ij}-s_i)-\sum_j\mu_j(\sum_ix_{ij}-d_j)\\&=\lambda^Ts+\mu^Td-\sum_{i,\ j}x_{ij}(c_{ij}-\lambda_i-\mu_j)\end{align}$$
Now, as $x_{ij}\geq 0$ we certainly need $c_{ij}-\lambda_i-\mu_j\leq 0$. 
Also, by [[Numerical/Complimentary slackness]], 
whenever $x_{ij}>0$, we need $c_{ij}=\lambda_i+\mu_j$.

## The transportation algorithm
Firstly, find any feasible $x_{ij}$ 
(with not too many nonzero $x_{ij}$ - achieve this by being greedy). 
This will give $n+m-1$ equations of form $c_{ij}=\lambda_i+\mu_j$. 
Solve them (taking $\lambda_1=0$ for example). 
If now $c_{ij}\leq \lambda_i+\mu_j$ for all $i,j$, we are done 
because we have a feasible [[Numerical/Dual Problem]] and [[Numerical/Complimentary slackness]]
([[Numerical/Optimality conditions in LPs]]). 
Otherwise, find the largest $c_{ij}-\lambda_i-\mu_j>0$ 
Change $x_{ij}$ to $x_{ij}+\epsilon$ while also redistributing the values in the initial flow (by $\pm\epsilon$ each) 
so that $x_{ij}$ remains feasible. 
Find the largest such $\epsilon$ where this is possible 
(i.e. one of the $x_{ij}$ will become 0). 
Note that we have made the Lagrangian smaller by $\epsilon(c_{ij}-\lambda_i-\mu_j)$. 
But for a feasible $x$ (which it is), 
the Lagrangian only depends on $x$
so we can shuffle the $\lambda$ and $\mu$ again.
Now we have a new set of $n+m-1$ equations for $\lambda$ and $\mu$ so recalculate them, 
check if they are feasible, 
if not, repeat the algorithm, 
making the Lagrangian (and hence the cost) smaller every time.