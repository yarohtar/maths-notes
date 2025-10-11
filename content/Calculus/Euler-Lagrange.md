To minimize:

$$F[x]=\int f(t, x, \dot x) dt$$
over $x(t)$, need to solve Euler-Lagrange:

$${\partial f \over \partial x} - {d \over dt}\left({\partial f \over \partial\dot x}\right)=0$$
If $x$ is a vector (or there are multiple functions of $t$ involved), then get multiple equations:

$${\partial f \over \partial x_i} - {d \over dt}\left({\partial f \over \partial\dot x_i}\right)=0$$

# First integrals
If ${\partial f \over \partial t}=0$:

$$f-\dot x {\partial f \over \partial \dot x}=\text{const}$$
If ${\partial f\over \partial x}=0$:

$${\partial f\over\partial \dot x} = \text{const}$$

# Multivariable case

Suppose we now have $f(x_1,\dots x_n, \phi, \phi_1,\dots, \phi_n)$ where $\phi_i={\partial \phi\over \partial x_i}$. The equation becomes:

$${\partial f \over \partial \phi} - \sum_{i=1}^n {\partial\over \partial x_i}\left({\partial f\over \partial \phi_i}\right)=0$$

# Higher derivative case

Suppose now $f(t, x, x', \dots x^{(n)})$:

$$\sum_{i=0}^n (-1)^i {d^i \over dt^i}\left(\partial f\over \partial x^{(i)}\right)=0$$
Note that we can rewrite:
$${\partial f\over \partial x}+\sum_{i=1}^n (-1)^i {d^i \over dt^i}\left(\partial f\over \partial x^{(i)}\right)=0$$
