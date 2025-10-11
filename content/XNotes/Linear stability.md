We are considering the problem $y'=\lambda y$. 
Suppose we have a [[XNotes/Numerical methods for ODEs]] with some step size $h$. We define the linear stability domain:
$$D=\{z=h\lambda :\ \lim_{n\to\infty}y_n=0\}$$
### A-stability
We say the method is A-stable when $\mathbb C^-\subseteq D$.

Usually when applying the numerical method to this problem, we find that $y_n=(r(\lambda h))^n$ for some (hopefully) analytic function $r$. Then we just need $|r|<1$ on $\mathbb C$.

Using the [[XNotes/Maximum principle]], we find that it is enough to check
$$\lim_{z\to\infty}|r(z)|\leq1$$ and for real $t$:
$$|r(it)|\leq 1$$
