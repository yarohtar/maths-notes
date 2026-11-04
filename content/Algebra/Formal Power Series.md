Let $R$ be a [[Algebra/Ring Theory/Ring|Ring]].
We define $R[[x]]$ to be the ring of power series, with elements

$$
a(x) = a_{0} + a_{1}x + a_{2} x^{2} + \dots
$$

for any sequence $a_{0},a_{1},\dots \in R$
and with operations defined as:

$$
f(x)+g(x) = (f_{0}+g_{0}) + (f_{1}+g_{1})x + \dots
$$

$$
f(x)\cdot g(x) = \sum_{n\geq 0} \left(\sum_{i=0}^{n} f_{i}g_{n-i} \right) x^{n}
$$

where $\sum_{n\geq 0}$ should be viewed as just a shorthand, and not an actual sum.

We will write $[x^{n}]a$ to mean $a_{n}$ when $a(x)=a_{0}+a_{1}x+\dots$
We also define $\deg a=n$ for the smallest $n\geq 0$ such that $a_{n}\neq0$.

[[Series in a Ring]]
[[Formal Infinite Sum]]
[[Formal Infinite Product]]
[[Formal Composition]]
[[Formal Inverse]]
[[Formal Derivative]]
[[Formal Maclaurin]]
[[Formal Exponential]]
[[Formal Logarithm]]
[[Formal Binomial Power]]
[[Formal Binomial Theorem]]
[[Rogers-Ramanujan Identities]]
