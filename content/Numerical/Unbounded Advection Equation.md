We consider 
$$
u_{t}=u_{x}
$$
for $t\geq 0$ and $x\in \mathbb{R}$
with initial condition $u(x,0)=\phi(x)$.
Note that this has exact solution $u(x,t)=\phi(x+t)$

## Downward instability
Consider the [[Numerical/Semidiscretization]]:
$$
\frac{\partial u_{m}(t)}{\partial t} = \frac{1}{h} (u_{m}(t)-u_{m-1}(t))
$$
using the [[Numerical/Euler method]]:
$$
u_{m}^{n+1}=u_{m}^{n}+\mu(u_{m}^{n}-u_{m-1}^{n})
$$
for $n\in \mathbb{Z}_{+}$
We use [[Numerical/Fourier Analysis of Stability]]:
$$
H(\theta)=1+\mu-\mu e^{-i\theta}
$$
But then $\left\lvert  H\left( \frac{\pi}{2} \right)  \right\rvert ^{2} =(1+\mu)^{2}+\mu^{2}>1$ 
so the method is unstable for all $\mu>0$
## Upwind scheme
Consider the [[Numerical/Semidiscretization]]:
$$
\frac{\partial u_{m}(t)}{\partial t} = \frac{1}{h} (u_{m+1}(t)-u_{m}(t))
$$
using the [[Numerical/Euler method]]:
$$
u_{m}^{n+1} = u_{m}^{n} + \mu(u_{m+1}^{n}-u_{m}^{n})
$$
for $n\in \mathbb{Z}_{+}$
This is veery similar to the previous bit, but now:
$$
H(\theta)=1-\mu+\mu e^{i\theta}
$$
So $\lvert H(\theta) \rvert =\lvert 1-\mu+\mu e^{i\theta} \rvert \leq \lvert 1-\mu \rvert+\mu=1$ for $\mu \in[0,1]$.
Hence we have stability for $\mu\leq 1$, but instability for $\mu>1$
## Leap-frog method
We [[Numerical/Semidiscretization]] as
$$
\frac{\partial u_{m}}{\partial t} = \frac{1}{2h} (u_{m+1}(t)- u_{m-1}(t))
$$
But now we solve the ODE using the midpoint rule:
$$
y_{n+1}=y_{n-1}+2kf(t_{n},y_{n})
$$
We find the two-step leapfrog method:
$$
u_{m}^{n+1}=\mu(u_{m+1}^{n}-u_{m-1}^{n}) + u_{m}^{n-1}
$$
The local error is $O(k^{3}+kh^{2})=O(h^{3})$
We use [[Numerical/Fourier Analysis of Stability#Multi-step]]:
$$
\hat{u}^{n+1}(\theta) = \mu(e^{i\theta} - e^{-i\theta}) \hat{u}^{n}(\theta) + \hat{u}^{n-1}(\theta)
$$
This is a difference equation $w_{n+1}+bw_{n}+cw_{n-1}=0$ 
with general solution $w_{n}=c_{1}\lambda_{1}^{n}+c_{2}\lambda_{2}^{n}$ 
where $\lambda_{1 /2}$ are roots of $\lambda^{2}+b\lambda+c=0$
In our case:
$$
\lambda_{1,2}(\theta) = i\mu \sin \theta \pm \sqrt{ 1- \mu^{2} \sin ^{2}\theta }
$$
We have stability iff $\lvert \lambda_{1,2} \rvert\leq 1$ for all $\theta$, 
which is true iff $\mu\leq 1$

