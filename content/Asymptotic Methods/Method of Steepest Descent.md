We want to find [[Asymptotic Methods/Asymptotic Approximation]] of:
$$
F(x) = \int_{C} f(z) e^{x\phi(z)} dz
$$
where $C$ is a curve in $\mathbb{C}$.
The size of the integrand $e^{x\phi(z)}$ is determined by $\mathrm{Re}\phi(z)$
Write $\phi(p+iq)=u(p,q)+iv(p,q)$
We want $u$ to be small
Path of steepest descent is the one where $u$ decreases rapidly 
So we look for the direction $-\nabla u$ i.e. curves parallel to $\nabla u$
Due to [[Analysis/Cauchy-Riemann Equations]]
$$
\nabla u \cdot \nabla v = u_{p} v_{p} + u_{q} v_{q} = 0
$$
so we are looking for curves perpendicular to $\nabla v$
But these are curves of constant $v$.

# The Method
## Analyse $\phi$
### Separate
$$
\phi(p+iq) = u(p,q) + iv(p,q)
$$
### Stationary points
We find the stationary points of $\phi$, 
similar to [[Asymptotic Methods/Laplace Method]]
### Wells / valleys
We need places where $u\to-\infty$ as $p^{2}+q^{2}\to \infty$
We can freely deform the contour in here
as long as we stay in the same well/valley
## Steepest descent contours
Find all the contours where $v=const$
Note that these are parallel to $\nabla u$ 
We specifically want the ones passing through 
the end points of our integration contour $C$
as well as the ones passing through stationary points of $\phi$

Note that at stationary points, we will have two possible choices
We want the one that makes the real part go to $-\infty$
## Deform $C$
We want to deform $C$ into a combination of the above contours
such that it passes through some stationary points
## Parametrise
Around each stationary point, parametrise $p,q$ 
For lowest order, the first order approx is sufficient
## Expand
After substituting our parametrisation, 
evaluate the integral around each stationary point 
similar to [[Asymptotic Methods/Laplace Method]]
