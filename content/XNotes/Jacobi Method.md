[[XNotes/Iterative Methods for Linear Algebraic Systems]]
Let $A=L_{0}+D+U_{0}$ where they are respectively: lower triangle, diagonal and upper triangle. 
Set $A-B=D$
We obtain the next iteration by solving
$$
Dx^{k+1}=-(L_{0}+U_{0})x^{k}+b
$$
so $H_{J}=-D^{-1}(L_{0}+U_{0})$

### Theorem
If $A$ is [[XNotes/Strictly diagonally dominant]], then the Jacobi method converges.
#### Proof
Note $e^{k+1}=He^{k}$ so $e^{k}=H^{k}e^{0}$
Thus we need to prove $\rho(H)<1$
Let $\lambda$ be an eigenvalue of $H$.
Then 
$$
\det(H-\lambda I)=0
$$
$$
\det(L_{0}+U_{0}+\lambda D) = 0
$$
where the second line is obtained by multiplying by $D$
Let $A_{\lambda}=L_{0}+U_{0}+\lambda D$
Suppose $\lvert \lambda \rvert\geq 1$
Then $A_{\lambda}$ is also strictly diagonally dominant.
So $A_{\lambda}$ has evals with strictly positive real part by [[XNotes/Gershgorin Theorem]].
This is a contradiction, thus $\lvert \lambda \rvert<1$
So $\rho(H)<1$.
### Theorem
If both $A$ and $2D-A$ are symmetric positive definite, then Jacobi method converges
#### Proof
$H=-D^{-1}(L_{0}+U_{0})=-(A-L_{0}-U_{0})(L_{0}+U_{0})$ 
So setting $B=L_{0}+U_{0}$ we find $A-B-B^{T}=2D-A$
Now use [[XNotes/The Householder-John Theorem]] to find $\rho(H)<1$
