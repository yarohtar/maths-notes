Let 
$$
\begin{align}
A_{1}(x)  = &  a_{10} + a_{11} x + a_{12} x^{2} + \dots \\
A_{2}(x)   = &  a_{20} + a_{21}x + a_{22} x^{2} + \dots \\
A_{3}(x)   =  & a_{30} + a_{31}x + a_{32}x^{2} + \dots  \\
 & \vdots
\end{align}
$$
be an infinite family of [[Algebra/Formal Power Series]] in $R[[x]]$.
Suppose for any $j$, we have a [[Algebra/Series in a Ring]]:
$$
\sum_{i=1}^{\infty} a_{ij}
$$
i.e. column elements above are all eventually $0$.
Then we define
$$
\left( \sum_{n=0}^{\infty} A_{n} \right)(x) = \sum_{j\geq 0} \left(\sum_{i=1}^{\infty}a_{ij} \right)x^{j}
$$
where $\sum_{j\geq 0}$ is just a shorthand notation.
### Remark
In particular, setting
$$
A_{i}(x) = a_{i}x^{i}
$$
we find:
$$
A(x)=\left( \sum_{n=0}^{\infty} A_{i}  \right)(x) = a_{0}+a_{1}x+a_{2}x^{2}+\dots
$$
so we are now justified in saying 
$$
A(x) = \sum_{i=0}^{\infty} a_{i} x^{i}
$$
