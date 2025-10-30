The Catalan number $C_{n}$ is the number of 
unlabelled plane rooted binary trees with $n$ internal nodes.

Also, $C_{n}$ counts the number of [[Combinatorics/Dyck Path]] between $(0,0)$ and $(2n,0)$

Also, $C_{n}$ counts trinagulations of $(n+2)$-gon into $n$ triangles.

### Theorem
$$
C_{n+1} = \sum_{i+j=n} C_{i} C_{j} 
$$
with $C_{0}=1$.
#### Proof
With $(n+1)$ internal nodes, excluding the roots, 
there must  be $i$ internal nodes in the left branch and $(n-i)$ in the right branch
giving $C_{i}C_{n-i}$ possible trees.
Now sum over $i$.
### Theorem
They have a [[Algebra/Ordinary Generating Function\|Generating Function]]:
$$
C(x)=\sum_{n\geq 0} C_{n} x^{n} = \frac{ 1-\sqrt{ 1-4x } }{ 2x }
$$
#### Proof 1
$$
\begin{align}
C(x) & = 1 + (C_{0}\cdot C_{0}) x + (C_{0}\cdot C_{1}+C_{1}\cdot C_{0}) x^{2} + \dots  \\
 & =1+x\left( \sum_{n\geq 0}C_{n}x^{n} \right)^{2}\\
  & = 1+xC(x)^{2}
\end{align}
$$
Multiply through by $4x$ to find
$$
(2xC(x)-1)^{2} = 1-4x
$$
Since $2xC(x)-1$ has constant term $-1$,
it equals 
$$
-\sqrt{ 1-4x } = -\exp\left( \frac{1}{2} \log(1-4x) \right)
$$
so
$$
C(x) = \frac{ 1-\sqrt{ 1-4x } }{ 2x }
$$
#### Proof 2
Let $\mathcal{C}$ be a [[Combinatorics/Combinatorial Structure\|Structure]] of building a plane binary tree on $n$ internal nodes.
Then it satisfies:
$$
\mathcal{C} = \varepsilon + \{ \cdot \} \times \mathcal{C} \times \mathcal{C}
$$
which immediately gives 
$$
C(x) = 1 + x C(x) ^{2}
$$
### Theorem
$$
C_{n} = \frac{1}{n+1} \binom{ 2n }{ n } = \binom{ 2n }{ n } - \binom{ 2n }{ n+1 }
= \frac{1}{2n+1} \binom{ 2n+1 }{ n }
$$
#### Proof
Apply [[Algebra/Formal Binomial Theorem]] to find
$$
\begin{align}
C_{n}  & = [x^{n+1}]\left( -\frac{1}{2} \right)(1-4x)^{1/2} \\
 & =-\frac{1}{2} (-4)^{n+1} \binom{ \frac{1}{2} }{ n+1 } \\
 & = -\frac{1}{2} (-1)^{n+1} 4^{n+1} \frac{ \frac{1}{2} (-1) \dots (-2n+1) }{ 2^{n} (n+1)! } \\
 & = 2^{n} \frac{ 1 \cdot 2 \cdot \dots \cdot (2n-1) }{ (n+1)! } \\
 & = \frac{ (2n)! }{ n!(n+1)! } \\
 & = \frac{1}{n+1} \binom{ 2n }{ n }
\end{align}
$$

