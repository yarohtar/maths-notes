The number of ways of tiling $1\times n$ rectangle 
with $1\times 1$ and $1\times 2$ tiles is $F_{n+1}$ for $F_{n}$ the [[Algebra/Fibonacci Sequence]].
This has generating function
$$
\sum_{n=0}F_{n+1}x^{n} = \frac{1}{1-x-x^{2}} \in \mathbb{C}[[x]]
$$
and 
$$
F_{n} = \frac{1}{\sqrt{ 5 }} \left( \left( \frac{ 1+\sqrt{ 5 } }{ 2 } \right)^{n} - \left( \frac{ 1-\sqrt{ 5 } }{ 2 } \right)^{n} \right)
$$
### Proof
First bit by having the same recurrence relation.
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