We say
$$
\Omega^{[i,j]} = \begin{pmatrix}
1 &  \\
 & \ddots &  \\
 &  & c & \dots  & s \\
 &  & \vdots & \ddots & \vdots \\
 &  & -s & \dots & c \\
 &  &  &  &  & \ddots \\
 &  &  &  &  &  & 1
\end{pmatrix}
$$
is a givens rotation, where $c^{2}+s^{2}=1$ and they appear at columns / rows $i<j$
Given a column vector $a$ we can set
$$
c=\frac{a_{i}}{\sqrt{ a_{i}^{2}+a_{j}^{2} }}
$$
$$
s= \frac{a_{j}}{a_{i}^{2}+a_{j}^{2}}
$$
To find:
$$
\Omega^{[i,j]}a = \begin{pmatrix}
a_{1} \\
\vdots \\
r \\
\vdots \\
0 \\
\vdots \\
a_{n}
\end{pmatrix}
$$
Where $r$ appears at index $i$ and $0$ appears at index $j$ and all other values are intact. 