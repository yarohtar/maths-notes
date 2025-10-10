$$
\int_{a}^b fg^{(n)}dt=\sum_{k=1}^n(-1)^{k-1}[f^{(k-1)}g^{(n-k)}]+(-1)^n\int_{a}^b f^{(n)}gdt
$$
the boundary terms can give an [[Notes/Asymptotic Approximation]] under certain circumstances
### Example
$F(x)=\int_{x}^\infty e^{-t^2/2}dt$ as $x\to \infty$.
$$
\begin{align}
F(x) & =\int_{x}^\infty \frac{te^{-t^2/2}}{t}dt \\
 & =\left[ -\frac{1}{t}e^{-t^2/2} \right]_{x}^\infty+\int_{x}^\infty \frac{e^{-t^{2}/2}}{t^{2}}dt \\
 & =\frac{e^{-x^{2}/2}}{x}+\dots
\end{align}
$$
Need to show that $\text{error}=o\left( \frac{e^{-x^{2}/2}}{x} \right)$
Can show $\text{error}\leq \frac{e^{-x^{2}/2}}{x^{3}}$ as $x\to \infty$
So $F(x)\sim \frac{e^{-x^{2}/2}}{x}$ as $x\to \infty$

We can keep integrating by parts to find
$$
F(x)\sim \frac{e^{-x^{2}/2}}{x}\sum_{n}(-1)^n \frac{(2n-1)!!}{x^{2n}}
$$
(this diverges, but that is okay as we can [[Notes/Optimal Truncation]])
### Example
Find the behaviour of $I(x)=\int_{a}^b f{(t)e^{xt}dt}$ as $x\to \infty$, for $f(b)\neq 0$.
As $x\to \infty$, the integrand is dominated by a small region near $x=b$. 
$$
I(x)\approx f(b)\int_{a}^be^{xt}dt\sim f(b)\frac{e^{xb}}{x}
$$
Repeated integration by parts:
$$
I=e^{xb}\left( \sum_{k=1}^N(-1)^{k-1}f^{(k-1)}(b)x^{-k}-e^{-x(b-a)}\sum_{k=1}^N(-1)^{k-1}f^{(k-1)}(a)x^{-k}+ \frac{(-1)^{N}}{x^N}\int_{a}^b f^{(N)}e^{x(t-b)}dt \right)
$$
The first sum is an $N$ term approximation of $I$, with $\phi_{k}=\frac{1}{x^{k}}$ as $x\to \infty$, but we need to show that the other two are $o(x^{-N})$.

If $f$ is infinitely differentiable we have
$$
I(x)\sim \sum_{k=1}^{\infty} (-1)^{k-1} \frac{f^{(k-1)}(b)}{x^k}e^{xb}
$$
