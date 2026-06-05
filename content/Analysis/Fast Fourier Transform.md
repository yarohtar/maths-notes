We want to find discrete [[Analysis/Fourier Transform]]
$$
y_{j}=(\mathcal{F}_{n}x)_{j}=\frac{1}{n}\sum_{l=0}^{n-1} \omega_{n}^{-jl}x_{l}
$$
where $\omega_{n}=e^{2\pi i/n}$ and $j=0,\dots n-1$.
Add zeros at the end of $x$ sequence to make $n=2^p$ and set $m=2^{p-1}$
Now denote by $E$ the set of even vertices, 
and by $O$ the set of odd vertices and assume we found
$$
y^E=\mathcal{F}_{m}x^E\quad \quad y^O=\mathcal{F}_{m}x^O
$$
Note that $\omega_{n}^{2k}=\omega_{2m}^{2k}=\omega_{m}^k$ and also $x^O_{l}=x_{2l+1}$ and $x^E_{l}=x_{2l}$.
We can now rewrite the original sum to get:
$$
\begin{align}
y_{j}&=\frac{1}{2m}\sum_{l=0}^{m-1}\omega_{2m}^{-2jl}x_{2l}+\frac{1}{2m}\sum_{l=0}^{m-1}\omega_{2m}^{-(2l+1)j}x_{2l+1}  \\
 & =\frac{1}{2} \frac{1}{m}\sum_{l=0}^{m-1} \omega_{m}^{-jl}x^E_{l}+\frac{1}{2} \frac{1}{m}\omega_{2m}^{-j}\sum_{l=0}^{m-1} \omega_{m}^{jl}x^O_{l} \\
 & =\frac{y^E_{j}+\omega_{n}^{-j}y^O_{j}}{2}
\end{align}
$$
So we only take $O(n)$ operations to find $y$ !
Now if we do this recursively, we will only need $O(n\log n)$ operations 
which is much faster than the naive approach. 
## Inverse
Basically the same idea but now we have:
$$
x_{l}=(F^{-1}_{n}y)_{l}=\sum_{j=0}^{n-1} \omega_{n}^{jl}y_{j}
$$
so the recursive formula will be:
$$
x_{l}=x^E_{l}+\omega_{n}^lx^O_{l}
$$
