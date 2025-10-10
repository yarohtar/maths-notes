Suppose we have a functional
$$F[x]=\int f(t,x,\dot x) dt$$
And some family of transformations
$$x(t)\to X(s;t)$$ where $s\in\mathbb R$ satisfying $x(t)=X(0;t)$ and:
$${d\over ds} f(t,X,\dot X) = 0$$
Then there is a first integral of Euler-Lagrange equations:
$${\partial f\over \partial \dot x}{\partial X\over \partial s}\bigg\rvert_{s=0}=\text{const}$$
Summation is implied with $x$ a vector of variables.

#### Example
If there is no $x$ dependence, we can try $X(s;t)=x(t)+s$. The theorem then gives:
${\partial f\over \partial \dot x} = \text{const}$ which is a First integral in [[Notes/Euler-Lagrange#First integrals]].
