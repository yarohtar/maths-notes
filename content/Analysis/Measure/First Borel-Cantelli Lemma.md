Let $\mu:\mathcal{A}\to[0,\infty]$ be a [[Analysis/Measure/Measure]].
Let $(A_{n})$ be a sequence of sets in $\mathcal{A}$
Suppose:
$$
\sum_{n} \mu(A_{n}) <\infty
$$
Then:
$$
\mu(\limsup A_{n} ) = 0
$$
[[Analysis/lim sup]]
#### Proof
It is easy to show:
$$
\sum_{m\geq n} \mu(A_{m}) \to 0
$$
as $n\to \infty$.
Also note that for any $k$:
$$
\limsup_{n\to \infty} A_{n} = \bigcap_{n} \bigcup_{m\geq n} A_{m}\subseteq \bigcup_{m\geq k} A_{m}
$$
Now:
$$
\mu(\lim\sup A_{n})\leq \mu\left( \bigcup_{m\geq n}A_{m} \right)\leq \sum_{m\geq n}\mu(A_{m})\to 0
$$
