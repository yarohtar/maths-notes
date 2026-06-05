Let $W=\{ A_{i}:i\leq k \}$ be a [[Foundations/Computability/Question]] with $k+1$ answers and $f_{i}:\mathbb{B}^{n+1}\dashrightarrow \mathbb{B}^{n+1}$ be [[Foundations/Computability/Partial Function]]s for $i\leq k$. 
If $W$ is answered by a [[Foundations/Computability/Register Machine]] $M$ and $f_{i}$ is performed by register machines $M_{i}\ (i\leq k)$ then we can construct a register machine that performs the operation $g:\mathbb{B}^{n+1}\dashrightarrow \mathbb{B}^{n+1}$ given by 
$$
g(\vec{w})=\begin{cases}
f_{0}(\vec{w}) &  \text{if } \vec{w}\in A_{0} \\
f_{1}(\vec{w})  & \text{if }\vec{w}\in A_{1} \\
\vdots \\
f_{k}(\vec{w}) & \text{if }\vec{w}\in A_{k}
\end{cases}
$$
