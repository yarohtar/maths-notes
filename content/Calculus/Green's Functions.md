The general idea of Green's functions is to find the solution with $\delta$ forcing on the RHS 
(ie if the forcing is applied at only one point), 
and then superposition all of those solutions to get a complete function. 

In practice:
Let $D_{x}$ be some linear operator only dependent on $x$. 
If $G(x;\xi)$ solves $D_{x}G(x;\xi)=\delta(x-\xi)$ for every fixed $\xi$, 
then $u(x)=\int f(\xi)G(x;\xi)d\xi$ solves $D_{x}u=f(x)$
### Heat equation
$$u_t-\kappa\nabla^2u=F(x,t)$$
$$u(x,0)=f(x)$$
We split the problem into two:
1. $F=0$
2. $f=0$
Then the solution is given by superposition.
First problem is easily solved by taking Fourier transform in $x\to \lambda$ and then using convolution theorem.
Second problem has the same approach:
$$\hat u_t+\kappa|\lambda|^2\hat u=\hat F$$
$$\partial_t(\hat ue^{\kappa|\lambda|^2t})=e^{\kappa|\lambda|^2t}\hat F$$
Hence, by $0$ initial conditions, we can obtain 
$$\hat u=\int_0^te^{-\kappa|\lambda|^2(t-s)}\hat F(\lambda,s)ds$$
And now apply convolution theorem UNDER the integral (so the final sol has a double integral).
### Laplace equation
We can solve $\nabla^2u=F(x)$ on some domain $\Omega$ by finding the Green's function $\nabla^2G=\delta(x-y)$ for every $y\in \Omega$. With some trouble we get:
$$G(x;y)=\begin{cases}\log|x-y|&n=2\\|x-y|^{2-n}&n>2\end{cases}$$
up to some constants. Hence $u=\int_\Omega G(x;y)F(y)dy$
If we further want $u=0$ on $\partial\Omega$ we first find $G_1$ for $y\in \Omega$, and then for each $y$ find $y'\not\in\Omega$ s.t. $G(x;y)=G_2(x;y')+G_1(x;y)=0$ on $\partial\Omega$. Think of this as placing charges s.t. the electrical potentials cancel out. Now $\nabla^2G=\nabla^2G_1+\nabla^2G_2=\delta(x-y)+\delta(x-y')=\delta(x-y)$ inside $\Omega$ because $\delta(x-y')$ is always zero because $y'\not\in\Omega$.
### Wave equation
$$\begin{cases}u_{tt}-c^2\nabla^2u=F(x,t)\\u(x,0)=f(x)\\ u_t(x,0)=g(x)\end{cases}$$
Solved very similar to Heat equation, by separating the problem into bits with 0 forcing and 0 initial data. The inverse Fourier is UGLY to compute generally ... but it involves some $H$ in 1 dimension or some $\delta$ in 3 dimensions.
#### Wave on halfline
$$\begin{cases}v_{tt}-c^2v_{xx}=P(x,t)&x,t>0\\ v(0,t)=p(t)\\v(x,0)=q(t)\\ v_t(x,0)=r(t)\end{cases}$$
Firstly, by appropriate substitution, transform this problem into
$$\begin{cases}u_{tt}-c^2u_{xx}=F(x,t)&x,t>0\\
u(0,t)=0\\u(x,0)=f(x)\\u_t(x,0)=g(x)\end{cases}$$
Now consider the odd extensions $F_{odd}, f_{odd}, g_{odd}$ defined for $x\in R$. Because they are odd, they should cancel out at $x=0$ at give appropriate initial condition $u(0,t)=0$. Hence solve the wave on full line.
