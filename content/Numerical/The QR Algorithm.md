Set $A_{0}=A=Q_{0}R_{0}$ [[Numerical/QR factorisation]]
Then iterate as:
$$
A_{k+1} = R_{k}Q_{k} = Q_{k+1}R_{k+1}
$$
Set
$$
\bar{Q}_{k} = Q_{0}Q_{1}\dots Q_{k}
$$
and 
$$
\bar{R}_{k} = R_{k}R_{k-1}\dots R_{0}
$$
Then 
$$
A_{k+1}=\bar{Q}^{T}_{k} A \bar{Q}_{k}
$$
$$
A^{k+1} = \bar{Q}_{k}\bar{R}_{k}
$$
The first column of $A^{k+1}$ is related to [[Numerical/Power Method for Finding Eigenvalues]] 
The last row of $A^{k+1}$ is related to [[Numerical/Inverse Iteration for Finding Eigenvalues]]
