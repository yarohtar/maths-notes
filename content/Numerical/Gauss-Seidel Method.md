[[Numerical/Iterative Methods for Linear Algebraic Systems]]

Let $A=L_{0}+D+U_{0}$ where they are respectively: lower triangle, diagonal and upper triangle. 
We take $A-B=L_{0}+D$
We obtain the next iteration by solving:
$$
(L_{0}+D)x^{k+1}=-U_{0}x^k+b
$$
So $H_{GS}=-(L_{0}+U)^{-1}U_{0}$

Note that there is no need to calculate the inverse explicitly, 
because we can calculate the components of $x^{k+1}$ by forward substitution.
### Theorem
If $A$ is [[Analysis/Strictly diagonally dominant]], then the Gauss-Seidel method converges.
#### Proof
Note $e^{k+1}=He^{k}$ so $e^{k}=H^{k}e^{0}$
Thus we need to prove $\rho(H)<1$
Let $\lambda$ be an eigenvalue of $H$.
Then 
$$
\det(H-\lambda I)=0
$$
$$
\det(U_{0}+\lambda L_{0}+\lambda D) = 0
$$
where the second line is obtained by multiplying by $L_{0}+D$
Let $A_{\lambda}=U_{0}+\lambda L_{0}+\lambda D$
Suppose $\lvert \lambda \rvert\geq 1$
Then $A_{\lambda}$ is also strictly diagonally dominant.
So $A_{\lambda}$ has evals with strictly positive real part by [[Analysis/Gershgorin Theorem]].
This is a contradiction, thus $\lvert \lambda \rvert<1$
So $\rho(H)<1$.

### Theorem
If $A$ is symmetric positive definite, then the Gauss-Seidel method converges.
#### Proof
$H=-(A-U_{0})^{-1}U_{0}$
Note $A-U_{0}-U_{0}^{T}=D$ 
Now $D$ is also symmetric positive definite as $e_{i}^{T}Ae_{i}>0$
Use [[Numerical/The Householder-John Theorem]] to find $\rho(H)<1$

