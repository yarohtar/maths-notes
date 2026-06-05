Let $U\subseteq \mathbb{R}$ and $[a,b]\subseteq U$ (with $a\leq b$)
Let $f:U\to \mathbb{R}$ be a function.
Suppose $f$ is [[Analysis/Riemann Integrable]] on $[a,b]$
with [[Analysis/Upper Integral]] and [[Lower Integral]] equal to $I$ 
Then we say that the Riemann integral of $f$ is $I$ 
We write:
$$
\int_{a}^{b} f = I
$$
Additionally, define:
$$
\int_{b}^{a} f = -I
$$

## Improper integrals
If the domain $U$ contains $[N, b)$ for some $N\in \mathbb{R}$ and $b\in(N,\infty]\setminus U$
(note the inclusion of $b=\infty$)
define for all $a\geq N$:
$$
\int_{a}^{b} f = \lim_{x \to b} \int_{a}^{x} f
$$
if the limit exists.
we do a similar thing for $(a,N]\subseteq U$ and $a\in[-\infty,N)\setminus U$

If both $(a,b)\subseteq U$ and $a,b\not\in U$ (where $a<b$) 
let $c\in(a,b)$ and define:
$$
\int_{a}^{b} f = \int_{a}^{c}f + \int_{c}^{b}f
$$
(if $\int_{a}^{c}f$ and $\int_{c}^{b}f$ exist as improper integrals for all $c\in(a,b)$)
It can be shown that this is well defined 
i.e. the result doesn't depend on $c$.
