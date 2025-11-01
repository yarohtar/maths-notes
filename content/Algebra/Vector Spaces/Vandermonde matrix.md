Matrix of form:
$$
V=\begin{pmatrix}
1 & 1 & \dots & 1 \\
x_{1} & x_{2} & \dots & x_{n}  \\
x_{1}^{2} & x_{2}^{2} & \dots & x_{n}^{2} \\
\vdots & \vdots & \ddots & \vdots \\
x_{1}^{n-1} & x_{2}^{n-1} & \dots & x_{n}^{n-1}
\end{pmatrix}
$$
### Theorem
$$
\det V=\prod_{1\leq j<i\leq n}(x_{i}-x_{j}) 
$$
#### Proof
Making $x_{i}=x_{j}$ makes LHS=0, so $(x_{i}-x_{j})$ are all factors on the RHS. 
But the degree of RHS is $n\choose_{2}$
Also coef of $x_{2}x_{3}^{2}\dots x_{n}^{n-1}$ is 1
### Corollary
$\det V=0$ 
if and only if
$x_{i}=x_{j}$ for some $i\neq j$
