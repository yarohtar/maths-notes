Suppose $f$ is [[Analysis/Holomorphic]] and $f(x+iy)=u(x,y)+iv(x,y)$
For a fixed $y$, take the derivative in $x$ direction:
$$f'(x+iy) = {\partial u\over \partial x}+ i {\partial v \over \partial x}$$
Similarly, for a fixed $x$, take derivative in $iy$ direction:
$$f'(x+iy)={\partial u\over \partial iy}+i{\partial v \over \partial iy}={\partial v\over \partial y} - i {\partial u\over\partial y}$$
Equating we find the Cauchy-Riemann equations:
$${\partial u\over \partial x} = {\partial v \over \partial y}$$
$${\partial u\over \partial y} = -{\partial v\over \partial x}$$
These are not sufficient conditions for $f$ to be differentiable. 

### Theorem
Suppose $f(x+iy)=u(x,y)+iv(x,y)$. 
Then $f$ is differentiable at $(c+id)$ 
if and only if
$u$ and $v$ are differentiable at $(c,d)$ 
and their partial derivatives satisfy $u_x=v_y$ and $u_y=-v_x$. 
### Corollary
$f$ is differentiable at $z_0$
if and only if 
partial derivatives of $u$ and $v$ exist and are continuous around $z_0$ 
and they satisfy the Cauchy-Riemann equations. 
Proved in [[Analysis/Analysis and Topology]].