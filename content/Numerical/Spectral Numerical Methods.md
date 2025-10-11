Consider a PDE of the form:
$$
\mathcal{L}u=f
$$
Consider the finite dimensional space of functions 
$V$ spanned by $\psi_{1},\psi_{2},\dots,\psi_{N}$.
We seek a solution of the form 
$$
u_{N}=\sum_{n=1}^Nc_{n}\psi_{n}
$$
In general, this does not exist, 
because there is no reason for $u$ to be in this span. 
So we only seek an approximation which satisfies:
$$
\sum_{n=1}^Nc_{n}\braket{ \mathcal{L}\psi_{n} | \psi_{m} } =\braket{ f | \psi_{m} }
$$
Now we just need to pick our $\psi_{m}$ 
and ideally an inner product where they are orthogonal. 
We can use [[Analysis/Fourier Series]] or [[Analysis/Chebyshev Polynomials]]

LECTURE 15 GIVES PDE EXAMPLES

For Chebyshev expansion, in general, boundary conditions may be a problem. We might need to use $T_{n}(x)-1$ if $u(1)=0$. If there is time dependence on boundary conditions, we may run into serious stability issues.