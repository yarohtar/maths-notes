Let $x_{0},x_{1},\dots$ be the output of a [[Information Theory/Linear Feedback Shift Register]]
We aim to find the unknown $d$ and $a_{0},\dots,a_{d-1}$ such that
$$
x_{n}+\sum_{i=1}^{d} a_{d-i}x_{n-i} =0
$$
for all $n\geq d$.
In this case:
$$
\begin{pmatrix}
x_{d} & x_{d-1} & \dots & x_{1} & x_{0} \\
x_{d+1} & x_{d} & \dots & x_{2} & x_{1} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
x_{2d} & x_{2d-1} & \dots & x_{d+1} & x_{d}
\end{pmatrix}
\begin{pmatrix}
1 \\
a_{d-1} \\
\vdots \\
a_{0}
\end{pmatrix}
=
\begin{pmatrix}
0 \\
0 \\
\vdots \\
0
\end{pmatrix}
$$
We look successively at the matrices 
$$
A_{0}=(x_{0}), \quad %quad
A_{1}=\begin{pmatrix}
x_{1} & x_{0} \\
x_{2} & x_{1}
\end{pmatrix},\quad %quad
A_{2}=\begin{pmatrix}
x_{2} & x_{1} & x_{0} \\
x_{3} & x_{2} & x_{1} \\
x_{4} & x_{3} & x_{2}
\end{pmatrix},\quad %quad
\dots
$$
For each $A_{i}$ if $\det(A_{i})\neq 0$ then just continue
If $\det(A_{i})=0$, we try $d=i$, 
solve for $a_{0},\dots,a_{d-1}$ and check the stream.
