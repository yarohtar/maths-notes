Let $\mathcal{H}_{1}$ and $\mathcal{H}_{2}$ be [[Analysis/Hilbert Space/Hilbert Space]]s.
Let $\mathcal{B}(\mathcal{H}_{1})$ and $\mathcal{B}(\mathcal{H}_{2})$ be their [[Analysis/Space of Linear Operators]].
A [[Analysis/Linear Operator]] $T:\mathcal{B}(\mathcal{H}_{1})\to \mathcal{B}(\mathcal{H}_{2})$ is completely positive if 
for any $n\in \mathbb{N}_{0}$ and any $S\in \mathcal{B}(\mathcal{H}_{1})\otimes \mathbb{C}^{n \times n}$
$$
T\otimes \operatorname{id}_{n}(S)\geq 0
$$
i.e. the operator $T\otimes \operatorname{id}_{n}$ is positive.

### (non)example
Let $T:\mathbb{C}^{2\times 2}\to \mathbb{C}^{2 \times 2}$ be the transpose. 
Consider 
$$
S=\begin{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}  &  \begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix} \\
\begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix}  & \begin{pmatrix}
0 & 0 \\
0 & 1 
\end{pmatrix}
\end{pmatrix}
$$
which is positive in $\mathbb{C}^{2\times 2}\otimes \mathbb{C}^{2 \times 2}$
However 
$$
T\otimes \operatorname{id}_{2}(S) = \begin{pmatrix}
\begin{pmatrix}
1 & 0 \\
0 & 0
\end{pmatrix}  &  \begin{pmatrix}
0 & 0 \\
1 & 0
\end{pmatrix} \\
\begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix}  & \begin{pmatrix}
0 & 0 \\
0 & 1 
\end{pmatrix}
\end{pmatrix}
$$
is not positive.
