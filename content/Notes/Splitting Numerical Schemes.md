Suppose we have a numerical scheme 
$$
u'=Au
$$
for some matrix $A$.
Often, $A$ is naturally represented as $A=B+C$.
In [[Notes/Numerical Schemes as Approximations to Exp]],
we want to find $e^{tA}=e^{t(B+C)}$
Using [[Notes/Product of matrix exponentials]]:
$$
e^{tA} = e^{tB}e^{tC} + \frac{1}{2} t^{2}(CB-BC)+O(t^{3})
$$
and if $B$ and $C$ commute:
$$
e^{tA}=e^{tB}e^{tC}
$$
### Inhomogeneous case
The above works for zero boundary conditions. 
If that was not the case, we would have something like:
$$
u'=Au+b
$$
where $b(t)$ originates from the boundary conditions.
The exact solution for this is:
$$
u(t)=e^{tA}u(0)+\int_{0}^te^{(t-s)A}b(s)ds
$$
we can approximate this by:
$$
u^{n+1}=e^{kA}u^{n}+\int_{t_{n}}^{t_{n+1}} e^{(t_{n+1}-s)A}b(s)ds
$$
Then for example use (integral) trapezoidal rule to find:
$$
u^{n+1}=e^{kA}u^{n}+\frac{1}{2}k[e^{kA}b(t_{n})+b(t_{n+1})]
$$
and then use the splitting.