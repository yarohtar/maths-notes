[[Numerical/Power Method for Finding Eigenvalues]]
[[Numerical/Inverse Iteration for Finding Eigenvalues]]
[[Numerical/The QR Algorithm]]
## Deflation
Given an eigenvalue $\lambda$ with eigenvector $w$ of $A$, 
we want to deflate $A$ to a smaller matrix and find the next eval.
Use a [[Numerical/Householder Reflection]] 
$$
H_{u} = I - 2\frac{uu^{T}}{\lVert u \rVert ^{2}}
$$
with $u=w\pm \lVert w \rVert e_{1}$
Then
$$
H_{u}w=\mp \lVert w \rVert e_{1}
$$
