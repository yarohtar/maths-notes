Let $A$ be a square matrix, $L$ be a unitary lower triangular matrix (i.e. $L_{ii}=1$) and $U$ be an upper triangular matrix. If $A=LU$ then this is the $LU$ factorisation of $A$.

$LU$ factorisation exists in most cases - if the algorithm fails, we need to pivot. So we get that there is always a permutation matrix $P$ s.t.
$$PA=LU$$

If $A$ is symmetric, we want to find $A=LDL^T$ where $U=DL^T$. 

A real symmetric matrix $A$ is [[Analysis/Positive definite]] iff all entries in $D$ are positive.

This is all very useful for solving $Ax=b$, or calculating $\det A=\det U$.