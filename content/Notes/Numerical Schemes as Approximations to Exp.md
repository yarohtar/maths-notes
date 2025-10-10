Suppose we reach a system:
$$
u' = Au
$$
where $u(0)=u_{0}$ and $A$ is a matrix.
(For example, by [[Notes/Semidiscretization]])
The solution is given by:
$$
u(t) = e^{tA} u_{0}
$$
If $A$ can be diagonalized as $A=VDV^{-1}$, 
then $e^{tA}=Ve^{tD}V^{-1}$ where $e^{tD}=\operatorname{diag}(e^{tD_{ii}})$
Computing such an eigenvalue decomposition can be expensive
We have a couple approximations
### Euler
$e^{z} = 1+z+O(z^{2})$ gives [[Notes/Euler method]]
$$
u^{n+1} = (I+kA) u^{n}
$$
### Implicit Euler
$e^{z}=\frac{1}{1-z} + O(z^{2})$ gives [[Notes/Reverse-Euler Method]]
$$
u^{n+1}=(I-kA)^{-1}u^{n}
$$
### Trapezoidal
$e^{z}= \frac{1+z /2}{1- z /2} + O(z^{3})$ gives [[Notes/Trapezoidal rule (ODEs)]]
$$
u^{n+1}=\left( I-\frac{1}{2}kA \right)^{-1}\left( I+\frac{1}{2} kA \right)u^{n}
$$
