Let $A$ and $B$ are real matrices such that 
both $A$ and $A-B-B^T$ are symmetric positive definite.
Define $H=-(A-B)^{-1}B$.
Then $\rho(H) < 1$
#### Proof
Let $\lambda$ be an eigenvalue of $H$ 
and $w$ a (possibly complex) eigenvector.
Write:
$$
-Bw = \lambda(A-B) w
$$
As $Aw\neq 0$ we find that $\lambda\neq 1$ so:
$$
Bw = \frac{\lambda}{\lambda-1} Aw
$$
By taking the $^{\dagger}$ we also find:
$$
w^{\dagger}B^{T} = \frac{\bar{\lambda}}{\bar{\lambda}-1} w^{\dagger}A^{T}
$$
Note that for a symmetric positive definite matrix $C$:
$$
(u-iv)^{T}C(u+iv) = u^{T}Cu + v^{T}Cv - iv^{T}Cu + i u^{T}Cv
$$
Where:
$$
u^{T}Cv = (u^{T}Cv)^{T} = v^{T}C^{T}u = v^{T}Cu
$$
So if we write $w=u+iv$ for $u$ and $v$ real:
$$
w^{\dagger}Cw = u^{T}Cu + v^{T}Cv >0
$$
Apply this to $(A-B-B^{T})$:
$$
\begin{align}
0 & <w^{\dagger} (A-B-B^{T}) w  \\
 & =\left( 1- \frac{\lambda}{\lambda-1} - \frac{\bar{\lambda}}{\bar{\lambda}-1} \right) w^{\dagger}Aw \\
 & = \frac{1-\lvert \lambda \rvert ^{2}}{\lvert \lambda-1 \rvert ^{2}} w^{\dagger}Aw
\end{align}
$$
As $\lvert \lambda-1 \rvert ^{2}>0$ and $w^{\dagger}Aw>0$ we find $\lvert \lambda \rvert<1$