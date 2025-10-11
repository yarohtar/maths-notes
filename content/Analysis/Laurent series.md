Let $f$ be analytic on an annulus $R_1<|z-z_0|<R_2$. Then $f$ has a Laurent series:
$$f(z)=\sum_{n=-\infty}^\infty a_n(z-z_0)^n$$
If $f$ is analytic at $z_0$, it has a Taylor series.

Furthermore, the coefficients are given by:

$$a_n=\frac 1{2\pi i} \int_{\partial D_\rho}{f(z)\over (z-a)^{n+1}}dz$$
for any $R_1<\rho<R_2$.

#### Proof
Let $w\in D$. Integrate $f(z)/(z-w)$ around a sector of annulus by $\gamma_1$ and the complimentary sector of the annulus by $\gamma_2$. Hence get that:

$$f(w)=\frac 1{2\pi i} \left(\int_{\partial D_{\rho_1}} {f(z)\over z-w}-\int_{\partial D_{\rho_2}} {f(z)\over z-w}\right)$$
Hence expand each of these $1/(z-w)$ in the appropriate way around $z=a$. 