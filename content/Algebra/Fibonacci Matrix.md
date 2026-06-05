Let
$$
S=\begin{pmatrix}
0 & 1 \\
1 & 1
\end{pmatrix}
$$
Then
$$
S^{n} = \begin{pmatrix}
F_{n-1} &  F_{n} \\
F_{n}  & F_{n+1}
\end{pmatrix}
$$
for $F_{n}$ the [[Algebra/Fibonacci Sequence]].
## Theorem
If $p$ prime and $p\equiv \pm 1\pmod{5}$ then 
$$
S^{p-1}\equiv I\pmod{p}
$$
### Proof
Follows from [[Algebra/Fibonacci Sequence#Theorem (Wall, 1960)\|Wall's Theorem]].
## Theorem
If $p$ prime and $p\equiv\pm 2\pmod{5}$ then 
$$
S^{p+1}\equiv-I\pmod{p}
$$
So the period $k(p)\not\mid p+1$ but $k(p)\mid 2p+2$.
### Proof
Notice if $A_{0}=a$ and $A_{1}=b$ with 
$$
\begin{pmatrix}
A_{n} \\
A_{n+1}
\end{pmatrix}
 = \begin{pmatrix}
b-a & a \\
a & b
\end{pmatrix}
\begin{pmatrix}
F_{n} \\
F_{n+1}
\end{pmatrix}
$$
so if $F_{n}\pmod{p}$ has period $k(p)$
then $A_{n}$ has period dividing $k(p)$.
Conversely if $\begin{pmatrix}b-a & a \\ a & b\end{pmatrix}$ is invertible
then the period of $F_{n}$ must divide that of $A_{n}$ $\pmod{p}$.
It is invertible so long as $b^{2}-ab-a^{2}\not\equiv 0\pmod{p}$
$$
b^{2}-ab-a^{2}\equiv 0\pmod{p} \iff b = \frac{ a\pm \sqrt{ a^{2}+4a^{2} } }{ 2 } \equiv a\left( \frac{ 1\pm \sqrt{ 5 } }{ 2 } \right) \pmod{p}
$$
which is impossible for $p\equiv \pm 2\pmod{5}$.
Then all starting points $(a,b)$ must have the same period.
Let $m>0$ be minimal such that $F_{m}\equiv 0\pmod{p}$.
Then 
$$
\{ \lambda S^{r}\pmod{p} : \lambda \in \mathbb{F}_{p}^{x}, 1\leq r\leq m \}
$$
is a [[Algebra/Group Theory/Group]] $G\cong C_{p-1}\times C_{m}$ which acts on
$$
X=\left\{ \begin{pmatrix}
b-a & a  \\
a & b
\end{pmatrix} 
(a,b)\in \mathbb{F}_{p}^{2} \setminus(0,0)
\right\}
$$
by left multiplication sending
$$
\begin{pmatrix}
A_{k-1} & A_{k} \\
A_{k}  & A_{k+1}
\end{pmatrix}
\to
\lambda \begin{pmatrix}
A_{k+r-1}  & A_{k+r} \\
A_{k+r} & A_{k+r+1}
\end{pmatrix}
$$
But as all elements of $X$ are invertible,
no $g\in G$ has any fixpoints except for the identity which has $p^{2}-1$.
All equivalence classes under multiplication by $G$ have size $(p-1)m$
Therefore
$$
(p-1)m\mid (p^{2}-1)
$$
so $m\mid p+1$ and thus $F_{p+1}\equiv 0\pmod{p}$
We know that:
$$
p\mid F_{p+1} + F_{p-1} -1 
$$
so 
$$
F_{p-1}\equiv 1 \pmod{p}
$$
and we finally get $F_{p}\equiv-1\pmod{p}$ thus:
$$
S^{p+1}\equiv -I \pmod{p}
$$
 