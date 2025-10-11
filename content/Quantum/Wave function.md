Wave function $\psi$ generally obeys the [[Quantum/Schrodinger Equation]] and is normalizable i.e. $$\int|\psi|^2dV=N\in \mathbb R^+$$
The normalized wave function is then ${\psi\over \sqrt N}$.

Note that $N$ doesn't depend on time (just differentiate under integral).

We call $\rho(x,t)=|\psi(x,t)|^2$ the probability density function, where $\rho dV$ is the probability of finding the particle in $dV$. Furthermore, we define the probability current:
$$J=-{i\hbar\over 2m} (\psi^*\nabla\psi - \psi\nabla\psi^*)$$
It follows that
$${\partial\rho \over\partial t} + \nabla\cdot J = 0$$
###### Superposition
Suppose $\psi_1$ and $\psi_2$ are normalizable wave functions. Then so is $\psi = a_1\psi_1+a_2\psi_2$.

### Inner product
For $\psi$ and $\phi$ define
$$(\psi, \phi) = \int \psi^*\phi dV$$
Also write $(\psi,\phi)=\langle \psi|\phi\rangle$. Not in this document tho. 