### Example 1
The [[Algebra/Fibonacci Sequence]] has a formal generating functions $F(x)\in \mathbb{C}[[x]]$ 
defined by:
$$
F(x)= x + x^2 + 2x^{3}+ 3x^4  + 5 x^5 + \dots = \frac{x}{1-x-x^{2}}
$$
Hence
$$
F_{n} = \frac{1}{\sqrt{ 5 }}\left( \left( \frac{1+\sqrt{ 5 }}{2} \right)^{n} - \left(\frac{1-\sqrt{ 5 }}{2} \right)^n \right)
$$
#### Proof
$$
xF(x)=x^{2}+x^{3}+2x^4+3x^5 +\dots
$$
$$
x^2F(x) = x^{3}+x^4+2x^5
$$
Thus
$$
F(x)(1-x-x^{2})=x+\sum_{n\geq 2}(F_{n}-F_{n-1}-F_{n-2})=x
$$
Alternatively:
$$
\begin{align}
F(x)&=\sum F_{n}x^n = x + (F_{1}+F_{0})x^{2} + (F_{2}+F_{1})x^{3} + \dots  \\
&=x + xF(x) + x^{2}F(x)
\end{align}
$$
Now use decomposition:
$$
F(x) = \frac{x}{1-x-x^{2}} = \frac{\alpha}{1-\phi x} + \frac{\beta}{1-\bar{\phi}x}
$$
where $\phi$ and $\bar{\phi}$ are roots of $x^{2}-x-1=0$
Thus:
$$
F(x)=\sum_{n\geq 0}\alpha (\phi x)^{n} + \beta (\bar{\phi}x)^{n}
$$
and now substitute back to the original formal power series

### Example 2
The vector space $V$ over $\mathbb{C}$ of all infinite sequences $(A_{0},A_{1},A_{2},\dots)$ s.t. $A_{n+2}=A_{n+1}+A_{n}$ 
has dimension $2$ and is spanned by 
$$
\{ (1,\phi,\phi^{2},\dots), (1,\bar{\phi},\bar{\phi}^{2},\dots) \}
$$
where $\phi$ and $\bar{\phi}$ satisfy $1+x=x^{2}$

### Example 3
Let $p$ be prime. 
Then there exists a subset of size $p$ in $\mathbb{F}_{p}^{2}$ with no $3$ in a line.
#### Proof
Define $S=\{ (n\pmod{p}, n^{2}\pmod{p}) : 1\leq n\leq p \}$
Suppose for contradiction $(k,k^{2}),(l,l^{2}),(m,m^{2})$ are in a line in $\mathbb{F}_{p}^{2}$
Then 
$$
\det \begin{pmatrix}
1 & 1 & 1 \\
k & l & m \\
k^{2} & l^{2} & m^{2}
\end{pmatrix}
=0
$$
but this is the [[Algebra/Vector Spaces/Vandermonde matrix]] so some of $k,l,m$ are the same.
