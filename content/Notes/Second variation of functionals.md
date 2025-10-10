Second variation turns out to be 

$$\delta^2 F[x](\eta) = \frac 1 2 \int (Q\eta^2 + P \dot \eta^2)dt$$
With
$$Q={\partial^2f\over \partial x^2} -{d\over dt}\left({\partial^2f\over \partial x \partial \dot x}\right)$$
$$P={\partial^2 f\over \partial \dot x^2}$$
If $x$ is a stationary point of $F$ and $Q\eta^2 + P \dot \eta ^2>0$ for all nonzero $\eta$, then $x$ is a local minimiser of $F$.

### Legendre condition
If $x$ is a local minimiser of $F$, then $P\geq 0$. 

This is not a sufficient condition.

Integrating by parts, we find 

$$\delta^2F[x](\eta) = \frac 1 2 \int \eta \left(-{d\over dt}(P\dot\eta)+Q\eta\right)dt$$
This is a [[Notes/Sturm-Liouville operator]] $\mathcal L$, so if $\mathcal L(\eta)=-\omega^2\eta$ has a solution for some real $\omega$, we find $\delta^2F[x](\eta)<0$. Note that $\eta$ here still HAS to satisfy the 0 boundary conditions.
### Example
$$\delta^2F[x](\eta)=\frac 1 2 \int_0^{2\pi}(\dot \eta^2-\eta^2)dt$$
So find $\eta(t)=\sin(\frac t 2)$, with $\mathcal L(\eta)=-\frac 3 4\eta$. 

## Jacobi condition
Let $\phi$ be a differentiable function.
Then $$0=\int_\alpha^\beta(\phi\eta^2)'dt=\int_\alpha^\beta (\dot \phi\eta^2+2\eta\dot\eta\phi)dt$$
Add this to the expression for second variation to get
$$\delta^2 F[x](\eta) = \frac 1 2 \int ((Q+\dot\phi)\eta^2 + 2\eta\dot\eta\phi + P \dot \eta^2)dt$$
Complete the square:
$$\delta^2 F[x](\eta) = \frac 1 2 \int (P(\dot\eta+\frac\phi P\eta)^2+\eta^2(Q+\dot\phi - \frac{\phi^2}P))dt$$
Hence if $P>0$, we just need to find solution to $\phi^2=P(Q+\phi)$ and we guarantee the positivity of the integrand. 
##### Ricatti equation
$$\phi^2=P(Q+\phi)$$
Set $\phi=-P\frac{\dot u}u$ to get
##### Jacobi equaiton
$$(Pu')'=Qu$$
Related to the kernel problem for $\mathcal L$ where solution never vanishes.

## Ashton alternative
Let $\mathcal L=-{d\over dt}(P{d\over dt})+Q$ be a [[Notes/Sturm-Liouville operator]] and find it's eigenvalues $\lambda_n$ with eigenfunctions $\psi_n$. Then for any $\eta$ satisfying boundary conditions we can write:
$$\eta = \sum_n c_n\psi_n$$
Now note that
$$\begin{align*}
\delta^2F[x](\eta)&=\frac 1 2 \int\eta\mathcal L\eta dx\\
&=\frac 1 2 \int \eta \sum_nc_n\lambda_n\psi_ndx\\
&=\frac 1 2 \int \sum_{n,\ m}c_nc_m\lambda_n\psi_n\psi_mdx\\
&=\frac 1 2 \sum_{n,\ m} c_nc_m\lambda_n \int \psi_n\psi_mdx\\
&=\frac 1 2 \sum_nc_n^2\lambda_n
\end{align*}$$
As we can choose $c_n$ freely, this is always positive if and only if $\lambda_n> 0$ for all $n$. So we only need to find eigenvalues of $\mathcal L$ in order to figure out the second variation.