Sequence defined by 
$$
F_{n+2}=F_{n+1}+F_{n}
$$
and initial condition $F_{1}=F_{2}=1$
It has a formula
$$
F_{n} = \frac{1}{\sqrt{ 5 }} \left( \left( \frac{ 1+\sqrt{ 5 } }{ 2 } \right)^{n} - \left( \frac{ 1-\sqrt{ 5 } }{ 2 } \right)^{n} \right)
$$
[[Algebra/Tiling a One-Dimensional Rectangle]]
[[Algebra/Fibonacci Matrix]]
## Theorem
Given prime $p>2$:
$$
p\mid F_{p+1} + F_{p-1} -1 
$$
### Proof
It turns out that $F_{n+1}+F_{n-1}$ is the number of ways of tilling a $1\times n$ cycle 
Now let $C_{p}$ act on the set of tilings of $1\times p$ cycle by rotation.
As $p>2$, every tiling has an orbit of size $p$ except the tiling with only $1\times 1$ tiles. 
But then the number of tilings up to permutation is:
$$
1+ \left( \frac{ F_{p+1} + F_{p-1} - 1 }{ p } \right) \in \mathbb{N}
$$
Thus $p$ has to divide $F_{p+1}+F_{p-1}-1$
## Theorem (Wall, 1960)
If $p$ is prime and $p\equiv \pm 1\pmod{5}$, 
then $F_{p-1}\equiv 0\pmod{p}$ and $F_{p+1}\equiv 1\pmod{p}$
and $F_{n}\pmod{p}$ has period $k(p)\mid p-1$
### Proof
Using [[Algebra/Quadratic Reciprocity]]
$\sqrt{ 5 }$ exists $\pmod{p}$ 
if and only if
$$
\left( \frac{ 5 }{ p } \right) = \frac{ p }{ 5 } = 1
$$
if and only if
$$
p \equiv \pm 1 \pmod{5}
$$
Now use 
$$
F_{p-1} = \frac{1}{\sqrt{ 5 }} \left( \left( \frac{ 1+\sqrt{ 5 } }{ 2 } \right)^{p-1} - \left( \frac{ 1-\sqrt{ 5 } }{ 2 } \right)^{p-1} \right)
$$
and apply [[Algebra/Fermat's Little Theorem]] to find
$$
F_{p-1} \equiv 0 \pmod{p}
$$
The previous theorem implies $F_{p+1}\equiv 1\pmod{p}$ so $F_{p}\equiv 1\pmod{p}$.
Also $F_{0}\equiv 0\pmod{p}$ so the period is $k(p)\mid p-1$.
