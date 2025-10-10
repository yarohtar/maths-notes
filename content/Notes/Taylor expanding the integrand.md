### Example
Consider $I(x)=\int_{0}^\infty \frac{e^{-t}}{1+xt}dt$
We want to understand the integral behaviour as $x\to 0^+$.

Taylor series of $\frac{1}{1+xt}$ is $\sum_{n=0}^{\infty}(-1)^nx^nt^n$ ehhhh
Better to consider:
$$
\sum_{n=0}^{N} (-xt)^n=\frac{1}{1+xt} - r_{N}
$$
where $r_{N}=\frac{(-xt)^{N+1}}{1+xt}$.

$$
\begin{align}
I(x) & =\int _{0}^\infty\left( \sum ^N(-1)^nx^nt^n+r_{N} \right)e^{-t} \, dt  \\
 & =\sum_{n=0}^N(-1)^nx^n\left[ \int_{0}^\infty t^ne^{-t}dt \right]+\int_{0}^\infty r_{N}e^{-t}dt \\
 & =\sum_{n=0}^N (-1)^nn!x^n+R_{N} \\
 & =\sum^Nc_{n}\phi_{n}(x) +\dots
\end{align}
$$
where $\phi_{n}=x^n$ is an [[Notes/Asymptotic Sequence]] as $x\to 0$
But we need to show $R_{N}=o(x^N)$ as $x\to 0^+$

$\frac{R_{N}}{x^N}=x \int_{0}^\infty \frac{t^{n+1}e^{-t}}{1+xt}dt\leq x \int_{0}^\infty t^{N+1}e^{-t}dt=x(N+1)!$

So $I(x)\sim \sum_{n=0}^\infty(-1)^nn!x^n$ as $x\to 0^+$
This clearly doesn't converge for any $x>0$, but if we [[Notes/Optimal Truncation\|truncate]] it, we should get a really good approximation.

