$$\sum_nf(x+n)=\sum_n\hat f(2\pi n)e^{2\pi i n x}$$
#### Proof
Note that both sides are 1-periodic so just calculate the [[Analysis/Fourier Series]].
RHS immediately gives coeffs $\hat f(2\pi n)$ 
LHS will conveniently become a Fourier transform after substitution $y=x+n$:
$$
\sum_n\int_0^1\longrightarrow 
\sum_n\int_n^{n+1}=\int_{-\infty}^\infty
$$
