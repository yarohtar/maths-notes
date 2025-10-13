Suppose we are minimizing
$$
L(x,s,\lambda)=f(x)-\lambda^T(h(x)-b)-\lambda^Ts
$$
with $s\geq 0$. 
Now if $\lambda> 0$ then we can make $L$ go to $-\infty$ so $\lambda\not\in\Lambda$.
Hence we have to have $\lambda\leq0$. 
But then, as $s\geq 0$, 
the minimum of $-\lambda^Ts$ is 0, 
so either $\lambda_i=0$ or $s_i=0$ for any $i$.
This is called complimentary slackness.
