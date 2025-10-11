All eigenvalues of a matrix $A$ are contained 
in the union of [[XNotes/Gershgorin Disc]] in the complex plane.
i.e. any eigenvalue $\lambda$ has:
$$
\lvert \lambda-a_{ii} \rvert \leq \sum_{j\neq i}\lvert a_{ij} \rvert 
$$
for some $i$.
### Proof
Let $\lambda$ be an eigen value of $A$ with eigenvector $x$ st $Ax=\lambda x$. 
Take the largest absolute coordinate in $x$ be $i$ 
and divide through so that $x_{i}=1$ and $|x_{j}|\leq 1$ for $j\neq i$ 
(so WLOG take this $x$ at the start).
Now the $i$-th row of $Ax=\lambda x$ gives 
$$
\sum_{j} a_{ij}x_{j}=\lambda
$$
Rearrange to get 
$$
\lambda - a_{ii} = \sum_{j\neq i}a_{ij}x_{j}
$$
Finally, take absolute values, apply triangle inequality, and $x_j\leq 1$. 