Given prime $p$, integer $k\geq 2$, and $L=\{ l_{1},\dots,l_{s} \}\subseteq \{ 0,1,\dots,p-1 \}$
Suppose $\{ S_{1},\dots,S_{m} \}$ is a family of subsets of $[n]$ 
such that $\lvert S_{i} \rvert \not\in L$ for all $i$; and $\lvert S_{i_{1}}\cap\dots \cap S_{i_{k}} \rvert \in L$ for all distinct $k$-subfamilies.
Then 
$$
m\leq(k-1)\left( \sum_{i=0}^{s} \binom{ n }{ i } \right)
$$
### Proof
Repeat the following until our family is empty.
At stage $j$, choose one of the remaining subsets $S_{i}$,
and denote it by $A_{j}$, choose another remaining subset $S_{i_{2}}$ 
such that $\lvert S_{i_{1}}\cap S_{i_{2}} \rvert \not\in L$ if possible, then $S_{i_{3}}$...
Thus we find 
$$
\lvert S_{i_{1}}\cap S_{i_{2}}\cap\dots \cap S_{i_{d}} \rvert \not\in L
$$
but adding any new set from our remaining family,
the intersection must be in $L$.
By assumption $d\leq k-1$.
Set $B_{j}=S_{i_{1}}\cap\dots \cap S_{i_{d}}$
and remove all these sets
and proceed to stage $j+1$.
We end up with subfamily $A_{1},\dots,A_{m'}$ with $m'\geq \frac{m}{k-1}$
and $B_{1},\dots,B_{m'}$ such that $\lvert A_{i}\cap B_{i} \rvert=\lvert B_{i} \rvert \not\in L\pmod{p}$
but for any $j>i$ we have:
$$
\lvert A_{j}\cap B_{i} \rvert \in L\pmod{p}
$$
Now define $f_{i}:\{ 0,1 \}^{n}\to \mathbb{F}_{p}$ by 
$$
f_{i}(x) = f(x,\chi_{B_{i}}) = \prod_{l\in L} (x\cdot \chi_{B_{i}}-l)
$$
Note $f_{i}(\chi_{A_{i}})\neq 0$ but $f_{i}(\chi_{A_{i}})=0$ for all $j>i$.
Define linear functionals 
$$
u_{j}(f) = f(\chi_{A_{j}})
$$
and observe they satisfy the conditions of [[Combinatorics/Diagonal Principle]];
so the $f_{i}$ must be linearly independent.
But the $f_{i}$ are polynomials of degree $\leq s$ in $x_{1},\dots,x_{n}$,
so spanned by 
$$
\sum_{i=0}^{s} \binom{ n+i-1 }{ i }
$$
monomials.
However, over $\{ 0,1 \}$, $x_{i}^{k}=x_{i}$ for all $k\geq 1$.
So $f_{i}=\overline{f_{i}}$ where the $\overline{f_{i}}$ can be obtained from $f_{i}$ by reducing all exponents to $1$.
So they are also linearly independent, but spanned by 
$$
\left\{ \prod_{i\in S}x_{i} : S\subseteq[n], \lvert S \rvert \leq s \right\}
$$
of size 
$$
\sum_{i=0}^{s} \binom{ n }{ i }
$$
Therefore 
$$
m\leq(k-1) \sum_{i=0}^{s} \binom{ n }{ i }
$$
