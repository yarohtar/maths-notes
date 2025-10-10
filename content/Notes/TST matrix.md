TST stands for tridiagonal, symmetric and [[Notes/Toeplitz matrix\|Toeplitz]]:
$$
B=\begin{pmatrix}
\alpha  & \beta & 0 & \dots & 0 \\
\beta & \alpha & \beta & \ddots & \vdots \\
0  & \ddots & \ddots & \ddots & 0 \\
\vdots & \ddots & \beta & \alpha & \beta \\
0 & \dots & 0 & \beta & \alpha
\end{pmatrix}
$$
### Diagonalisation
The eigenvalues of a TST matrix are $\lambda_{k}=\alpha+2\beta \cos \frac{k\pi}{n+1}$ for $k=1\dots n$. The eigenvectors are $(q_{j})_{l}=\gamma_{n}\sin\left( \frac{jl\pi}{n+1} \right)$ and we find the orthonormal matrix $Q=Q^T=(q_{jl})$. 
Hence $B=QDQ^{-1}=QDQ$ where $D=diag(\lambda_{l})$

### Commutativity
Note that all the TST matrices share the same set of eigenvectors, hence they all commute.