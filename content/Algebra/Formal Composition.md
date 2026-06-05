Given [[Algebra/Formal Power Series]] in a [[Algebra/Ring Theory/Ring\|Ring]] $R$:
$$
A(x)=\sum_{n\geq 0}a_{n}x^{n}
$$
$$
B(x)=\sum_{n\geq 0}b_{n}x^{n}
$$
with $a_{0}=0$, define the composition 
$$
B(A(x)) = \sum_{k\geq 0} b_{k} A(x)^{k}
$$
as a [[Algebra/Formal Infinite Sum]].
Note that $a_{0}=0$ was necessary but also sufficient for convergence.
### Lemma
Suppose $a_{0}=0$ and $b_{0}=1$.
Let $\mathcal{A}$ be a [[Combinatorics/Counting/Combinatorial Structure\|Structure]] with $a_{0}=0$ 
and $\mathcal{B}$ a [[Combinatorics/Counting/Combinatorial Structure\|Structure]] with $b_{0}=1$.
Let $g_{n}$ be the number of ways to split $[n]$ into disjoint nonempty intervals
and build $\mathcal{A}$ in each interval 
and build $\mathcal{B}$ on the set of intervals.
Set $g_{0}=1$.
Then
$$
G(x)=\sum_{n\geq 0} g_{n}x^{n} = B(A(x))
$$
