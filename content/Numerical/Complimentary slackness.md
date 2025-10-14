Suppose we are minimizing the [[Numerical/Lagrangian\|Lagrangian]]
$$
L(x,s,\lambda)=f(x)-\lambda^T(h(x)-b)-\lambda^Ts
$$
with $s\geq 0$, 
subject to $\lambda \in \Lambda$ the [[Numerical/Feasible Lagrange Multipliers]]

Now if $\lambda_{i}> 0$ then we can make $L$ go to $-\infty$ so $\lambda\not\in\Lambda$.
Hence we have to have $\lambda\leq0$. 
But then, as $s\geq 0$, 
the minimum of $-\lambda^Ts$ is 0
so either $\lambda_i=0$ or $s_i=0$ for any $i$.
This is called complimentary slackness.
