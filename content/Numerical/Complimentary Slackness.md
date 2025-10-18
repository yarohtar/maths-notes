Given a primal problem
" Minimize $f(x)$ over $x\in X$ subject to $g(x)\leq b$ "
we can rewrite it, by adding slack variables, to:
" Minimize $f(x)$ over $x\in X$ and $s\geq 0$ subject to $g(x)+s=b$ "
This now introduces the [[Numerical/Dual Problem]]
" Maximize $h(\lambda)$ over $\lambda$ subject to $\lambda \in \Lambda$ "
where
$$
h(\lambda) = \inf_{x\in X,\ s\geq 0} L(x,s,\lambda)
$$
and $L$ is the [[Numerical/Lagrangian\|Lagrangian]]:
$$
L(x,s,\lambda) = f(x) - \lambda^{T}(g(x) + s - b)
$$
and $\Lambda$ is the set of [[Numerical/Feasible Lagrange Multipliers]]

Given some feasible $x^{*}\in X$ and $s^{*}\geq 0$
and a feasible $\lambda ^{*} \in \Lambda$
we say that complimentary slackness holds if for any $i$:
$$
\lambda_{i}^{*}s_{i}^{*} = 0
$$

### Intuition
Suppose we are minimizing (over $x$ and $s$) the [[Numerical/Lagrangian\|Lagrangian]]
$$
L(x,s,\lambda)=f(x)-\lambda^T(h(x)-b)-\lambda^Ts
$$
with $s\geq 0$, subject to $\lambda \in \Lambda$ the [[Numerical/Feasible Lagrange Multipliers]]
(which we have to do in order to calculate $h(\lambda)$)

Now suppose $\lambda_{i}>0$ for some $i$.
Then $\lim_{s_{i}\to \infty}L=-\infty$ and thus $\lambda \not\in \Lambda$.

Hence we have to have $\lambda\leq0$ 
and thus $\lambda_{i}s_{i}\leq 0$ for any $i$
But then also $-\lambda^{T}s\geq 0$  
As $s$ is freely chosen, we can always pick it so that $\lambda^{T}s=0$
so either $\lambda_i=0$ or $s_i=0$ for any $i$ (because $\lambda_{i}s_{i}\leq 0$)
This is called complimentary slackness.
