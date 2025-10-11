The unique solution to interpolation of $f$ at points $x_0,\dots x_n$ is given by:
$$p(x)=\sum_{k=0}^n f(x_k)l_k(x)$$
where $l_k$ are [[Numerical/Lagrange Cardinal Polynomials]].

#### Divided difference
$f[x_0,\dots x_n]$ is the coefficient next to $x^n$ in the polynomial which interpolates $f$ at points $x_0,\dots x_n$.

Suppose $p$ interpolates $f$ at $x_0,\dots x_n$, while $q$ interpolates $f$ at $x_1,\dots x_{n+1}$. Then 
$${q(x)(x-x_0) - p(x)(x-x_{n+1})\over x_{n+1}-x_0}$$
interpolates $f$ at $x_0,\dots x_{n+1}$. Hence the recurrence formula holds:
$$f[x_0\dots x_{n+1}]={f[x_1\dots x_{n+1}]-f[x_0\dots x_n]\over x_{n+1}-x_0}$$
### The Newton formula
$$p_n(x)=f[x_0]+f[x_0,x_1](x-x_0)+\dots+f[x_0,\dots x_n]\prod_{k=0}^{n-1}(x-x_k)$$
interpolates $f$ at $x_0,\dots x_n$.
##### Proof 
By induction: 
$f(x_0)=f[x_0]$
Suppose $p$ interpolates $f$ at $x_0,\dots, x_n$. Then $p-p_n$ has degree (at most) $n-1$ and roots at $x=x_k$ for $k=0,1,\dots, n-1$ (by induction hypothesis). So it has to be $p-p_n=0$.

# Errors
Define the error functions $e=f-p$. It has $n+1$ roots in $(a,b)$, hence $e^{(n)}$ has at least one root $\xi$. Then $p^{(n)}(\xi)=f^{(n)}(\xi)$ or $f[x_0,\dots, x_n]=\frac 1 {n!}f^{(n)}(\xi)$ for some $\xi$ in the interval.
Furthermore, $$\begin{align*}e(x)&=f(x)-p(x)\\&=(f(x)-p_{n+1}(x))-(p(x)-p_{n+1}(x)) \\&= f[x_0,\dots,x_n,x]\prod_{k=0}^n(x-x_k)\\&=\frac1{(n+1)!}f^{(n+1)}(\xi)w(x)\end{align*}$$
where $p_{n+1}$ interpolates at $x_0,\dots,x_n, x$.
So certainly:
$$|e(x)|\leq \frac 1{(n+1)!}||f^{(n+1)}||_\infty|w(x)|$$

On interval $[-1,1]$, $||w||_\infty$ is minimized for (scaled) Chebyshev polynomials (proof by contradiction, using that roots alternate in sign), so
$$x_k=\cos\left({2k+1\over 2n+2}\pi\right)$$
and we have
$$|e|\leq \frac 1 {2^n}\frac 1 {(n+1)!}||f^{(n+1)}||_\infty$$