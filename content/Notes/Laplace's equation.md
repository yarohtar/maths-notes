$$\Delta u=0$$
where $\Delta=\nabla^2$.

Suppose $f(x+iy)=u(x,y)+iv(x,y)$ is analytic. Then by [[Notes/Cauchy-Riemann Equations]]:
$${\partial^2 u\over \partial x^2} = {\partial^2 v\over\partial x\partial y}=-{\partial^2 u\over \partial y^2}$$
hence $\Delta u=0$.

We want to solve the Laplace equation on $U$ with some boundary conditions on $\partial U$. 
- Find nice $V$ and $f:U\to V$ conformal, with $f(x+iy)=u(x,y)+iv(x,y)$
- Translate the boundary conditions on $\partial U$ to $f(\partial U)=\partial V$
- Then find a solution $g(u,v)$ satisfying the boundary conditions and $\Delta g=0$ on $V$.
- Hence $g(u(x,y),v(x,y))$ is a solution on $U$.