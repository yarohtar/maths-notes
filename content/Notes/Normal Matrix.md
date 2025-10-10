We say that a matrix $A$ is normal if $A=QDQ^{*}$
where $D$ is diagonal, and $Q$ is [[Notes/Unitary]]
Alternatively, $A$ is normal if it has a complete set of 
orthonormal eigenvectors.

### Examples
- Symmetric matrices $A=A^{T}$
- Skew-symmetric $A=-A^{T}$

### Proposition
If $A$ is normal then $\lVert A \rVert_{2}=\rho(A)$
where $\rho(A)=\lvert \lambda_{\text{max}} \rvert$
#### Proof
Let $u$ be any vector.
We can expand it in the basis of orthonormal eigenvectors:
$$
u=\sum_{i}a_{i}q_{i}
$$
Then $Au=\sum_{i}\lambda _ia_{i}q_{i}$ and thus
$$
\lVert A \rVert _{2}=\sup_{u} \frac{\lVert Au \rVert _{2}}{\lVert u \rVert _{2}}
=\sup_{u} \left( \frac{\sum_{i}\lvert \lambda_{i}a_{i} \rvert ^{2}}{\sum_{i}\lvert a_{i} \rvert ^{2}} \right)^{1/2}
=\lvert \lambda_{\text{max}} \rvert 
$$
