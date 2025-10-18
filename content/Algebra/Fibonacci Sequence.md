Sequence defined by 
$$
F_{n+2}=F_{n+1}+F_{n}
$$
and initial condition $F_{1}=F_{2}=1$

## Theorem
The number of ways of tiling $1\times n$ rectangle 
with $1\times 1$ and $1\times 2$ tiles is $F_{n+1}$.
This has generating function
$$
\sum_{n=0}F_{n+1}x^{n} = \frac{1}{1-x-x^{2}} \in \mathbb{C}[[x]]
$$
and 
$$
F_{n} = \frac{1}{\sqrt{ 5 }} \left( \left( \frac{ 1+\sqrt{ 5 } }{ 2 } \right)^{n} + \left( \frac{ 1-\sqrt{ 5 } }{ 2 } \right)^{n} \right)
$$
### Proof
First bit by same recurrence relation
Note that $(x+x^{2})^{i}$ is the generating function for tiling with precisely $i$ tiles
So:
$$
\sum_{n\geq 0} F_{n+1} x^{n} = 1 + (x+x^{2}) + (x+x^{2})^{2} + \dots
$$
Thus the generating function is:
$$
\sum_{n\geq 0} F_{n+1}x^{n+1} = \frac{ x }{ 1-x-x^{2} }
$$
## Theorem
$$
F_{n+1} = \sum_{i=0}^{\lfloor n/2 \rfloor } \binom{ n-i }{ i }
$$
### Proof
Count tillings with $i$ $1\times 2$ tiles.
## Theorem
Given prime $p>2$
$$
p|F_{p+1} + F_{p-1} -1 
$$
### Proof
It turns out that $F_{n+1}+F_{n-1}$ is the number of ways of tilling a $1\times n$ cycle 
So the number of cyclically distinct tilings of a $1\times p$ cycle,
when $p$ is prime, is:
$$
1+ \left( \frac{ F_{p+1} + F_{p-1} - 1 }{ p } \right) \in \mathbb{N}
$$
Phrase this as a [[Combinatorics/Counting/Burnside's Lemma (Orbit-Counting Lemma)]]

Thus $p$ has to divide $F_{p+1}+F_{p-1}-1$

$\sqrt{ 5 }$ exists $\pmod{p}$ 
if and only if
$$
\left( \frac{ 5 }{ p } \right) = \frac{ p }{ 5 } = 1
$$
if and only if
$$
p \equiv \pm 1 \pmod{5}
$$
## Theorem (Wall, 1960)
If $p$ is prime and $p\equiv \pm 1\pmod{5}$, then $F_{p-1}\equiv 0\pmod{p}$ and $F_{p+1}\equiv 1\pmod{p}$
and $F_{n}\pmod{p}$ has period $k(p)|p-1$
### Proof
Apply previous theorems, and use [[Algebra/Fermat's Little Theorem]]
## Theorem
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
## Theorem
If $p$ prime and $p\equiv \pm 1\pmod{5}$ then $S^{p-1}\equiv I\pmod{p}$
## Theorem
If $p$ prime and $p\equiv\pm 2\pmod{5}$ then $S^{p+1}\equiv-I\pmod{p}$
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
then $A_{n}$ has period dividing $k(p)$ 
and conversely if $\begin{pmatrix}b-a & a \\ a & b\end{pmatrix}$ is invertible
which it is so long as $b^{2}-ab-a^{2}\not\equiv 0\pmod{p}$
$$
b^{2}-ab-a^{2}\equiv 0\pmod{p} \iff b = \frac{ a\pm \sqrt{ a^{2}+4a^{2} } }{ 2 } \equiv a\left( \frac{ 1\pm \sqrt{ 5 } }{ 2 } \right) \pmod{p}
$$
Let $m$ be minimal such that $F_{m}\equiv 0\pmod{p}$

Then 
$$
\{ \lambda S^{r}\pmod{p} : \lambda \in \mathbb{F}_{p}^{x}, 1\leq r\leq m \}
$$