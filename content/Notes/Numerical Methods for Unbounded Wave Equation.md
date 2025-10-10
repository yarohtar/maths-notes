Consider the wave equation:
$$
\frac{\partial^{2}u}{\partial t^{2}} = \frac{\partial^{2}x}{\partial x^{2}}
$$
for $t\geq 0$, given initial conditions $u(x,0)$ and $u_{t}(x,0)$
The usual approximation is as follows:
$$
u_{m}^{n+1} - 2u_{m}^{n} + u_{m}^{n-1} = \mu(u_{m+1}^{n} - 2u_{m}^{n} + u_{m-1}^{n})
$$
with $\mu=\frac{k^{2}}{h^{2}}$
[[Notes/Fourier Analysis of Stability]] gives:
$$
\hat{u}^{n+1}(\theta) -2\hat{u}^{n}(\theta) +\hat{u}^{n-1}(\theta) = -4\mu \sin ^{2} \frac{\theta}{2} \hat{u}^{n}(\theta)
$$
with characteristic equation
$$
\lambda^{2}-2\left( 1-2\mu \sin ^{2} \frac{\theta}{2} \right) \lambda +1 =0
$$
The product of roots is $1$, 
so they need to be complex conj for stability:
$$
\left( 1-2\mu \sin ^{2} \frac{\theta}{2} \right) ^{2} \leq 1
$$
This gives $\mu\leq 1$
