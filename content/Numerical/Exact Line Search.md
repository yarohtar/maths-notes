[[Numerical/Iterative Methods for Linear Algebraic Systems]]
Solving 
$$
Ax=b
$$
is equivalent to minimizing:
$$
F(x)=x^{T}Ax-x^{T}b
$$
because 
$$
\nabla F(x) = Ax - b
$$
### Search direction
Given some search direction $d^{k}$ we want to find
$$
x^{k+1}=x^{k}+\alpha d^{k}
$$
such that $F(x^{k+1})$ is minimal.
The optimal $\alpha$ is such that $x^{k+1}$ minimizes $A$-distance to $x^{*}$ i.e. 
$$
x^{k+1}-x^{*}\bot_{A} d^{k}
$$
Thus we find:
$$
\alpha=\frac{(r^{k},d^{k})}{(Ad^{k},d^{k})}
$$
where $r^{k}=b-Ax^{k}$
[[Numerical/Exact Line Search with Steepest Descent]]
[[Numerical/Conjugate Gradient Search]]
