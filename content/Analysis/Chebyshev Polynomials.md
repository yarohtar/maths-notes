They obey the recurrence:
$$
\begin{gather}
T_{0}(x)=1\\
T_{1}(x)=x\\
T_{n+1}(x)=2xT_{n}(x)-T_{n-1}(x)
\end{gather}
$$
They also satisfy:
$$
T_{n}(x)=\cos(n\theta)
$$
where $x=\cos \theta$.

### Orthogonality
Chebyshev polynomials are orthogonal with respect to the weight function $w=\frac{1}{\sqrt{ 1-x^{2} }}$:
$$
(T_{n},T_{m})_{w}=\int_{-1}^1T_{m}(x)T_{n}(x) \frac{dx}{\sqrt{ 1-x^{2} }}=\begin{cases} 
\pi & m=n=0 \\
\frac{\pi}{2} & m=n\geq 1 \\
0 & m\neq n
\end{cases}
$$

What's more, they will form a complete set of orthogonal functions that will span the space. 

### Algebra
Product:
$$
T_{m}(x)T_{n}(x)=\frac{1}{2}(T_{\lvert m-n \rvert}(x)+T_{m+n}(x))
$$
Derivatives:
$$
T'_{2n}=(2n)\cdot 2\sum_{k=1}^{n}T_{2k-1}(x)
$$
$$
T'_{2n+1}(x)=(2n+1)\left[ T_{0}(x)+2\sum_{k=1}^{n} T_{2k}(x) \right]
$$
