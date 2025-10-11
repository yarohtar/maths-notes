The Gamma function is an analytic way to represent factorials.
$$
\Gamma(\xi)=\int_{0}^\infty t^{\xi-1}e^{-t}dt
$$
This is analytic for $\mathrm{Re}(\xi)>0$.
It satisfies the functional equation:
$$
z\Gamma(z)=\Gamma(z+1)
$$
(as expected)
Also $\Gamma(1)=1$ so $\Gamma(n+1)=n!$ for $n\in \mathbb{N}$
For $x>0$, by simple substitution we find:
$$
\int_{0}^\infty t^{\xi-1}e^{-xt}dt=\frac{\Gamma(\xi)}{x^{\xi}}
$$
### Reflexion formula
$$
\Gamma(z)\Gamma(1-z)= \frac{\pi}{\sin \pi z}
$$
### Duplication formula
$$
\Gamma(z)\Gamma\left( z+\frac{1}{2} \right) = 2^{1-2z} \sqrt{ \pi } \Gamma(2z)
$$
### Useful integral
For $\mathrm{Re}(a)>0$ and $p>0$:
$$
\int_{0}^{\infty} e^{-ax^{p}}dx = a^{-1 /p} \Gamma\left( 1+ \frac{1}{p} \right)
$$
### Binomial coefficient
$$
{\xi \choose k}=\frac{1}{k!} \frac{\Gamma(\xi+1)}{\Gamma(\xi-k+1)} 
$$
It also works with:
$$
(1+t)^{\xi}=\sum_{k=0}^{\infty}{\xi \choose k}t^k
$$


