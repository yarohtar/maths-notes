Let $k,n\in \mathbb{N}$ with $k<n$.
An $(k,n)$-threshold scheme is a method of 
sharing a message $S$ among a set of $n$ participants
such that any subset of $k$ participants 
can reconstruct $S$
but no subset of smaller size can.
### Shamir's method
Let $0\leq S\leq N$ be the secret which can be chosen at random 
by the Leader.
The Leader chooses a prime $p>n,N$.
The Leader chooses independent random coefficients
$a_{1},\dots,a_{k-1}$ with $0\leq a_{j}\leq p-1$ where $a_{0}=S$,
and distinct integers $x_{1},\dots,x_{n}$ with $1\leq x_{j}\leq p-1$
Define:
$$
P(r)=a_{0}+\sum_{j=1}^{k-1}a_{j}x_{r}^{j}\pmod{p}
$$
The $r^{th}$ member receives a shadow pair $(x_{r},P(r))$

Now suppose $k$ members are together.
They have the data $(y_{j},Q(j))$ 
where $x_{r_{j}}=y_{j}$ and $P(x_{r_{j}})=Q(j)$
and can solve:
$$
\begin{pmatrix}
1 & y_{1} & \dots & y_{1}^{k-1} \\
1 & y_{2} & \dots & y_{2}^{k-1} \\
\vdots & \vdots & \ddots & \vdots \\
1 & y_{k} & \dots & y_{k}^{k-1}
\end{pmatrix}
\begin{pmatrix}
z_{0} \\
z_{1} \\
\vdots \\
z_{k}
\end{pmatrix}
=
\begin{pmatrix}
Q(1) \\
Q(2) \\
\vdots  \\
Q(k)
\end{pmatrix}
$$
because the [[Algebra/Vandermonde matrix]] has nonzero determinant 

Then $z_{i}=a_{i}$ so $z_{0}=a_{0}=S$

However, if only $k-1$ members are present then:
$$
\begin{pmatrix}
y_{1} & \dots & y_{1}^{k-1} \\
y_{2} & \dots & y_{2}^{k-1} \\
\vdots & \ddots & \vdots \\
y_{k-1} & \dots & y_{k-1}^{k-1}
\end{pmatrix}
\begin{pmatrix}
z_{1} \\
z_{2}\\
\vdots \\
z_{k}
\end{pmatrix}
=
\begin{pmatrix}
Q(1) -z_{0}\\
Q(2) -z_{0}\\
\vdots  \\
Q(k) -z_{0}
\end{pmatrix}
$$
Which can be solved for any $z_{0}$ 
so we have no idea which one is correct.