Let $\mathcal{A}$ be any set of subsets of $E$ containing $\emptyset$.
A set function is a function $\mu:\mathcal{A}\to[0,\infty]$ with $\mu(\emptyset)=0$.

### Properties
- $\mu$ is increasing if for all $A,B\in \mathcal{A}$ with $A\subseteq B$
$$
\mu(A)\leq \mu(B)
$$
- $\mu$ is additive if, for all disjoint sets $A,B\in \mathcal{A}$ with $A\cup B\in \mathcal{A}$
$$
\mu(A\cup B)=\mu(A)+\mu(B)
$$
- $\mu$ is countably additive if, for all sequences of disjoint sets $(A_{n})$ in $\mathcal{A}$ with $\bigcup_{n}A_{n}\in \mathcal{A}$
$$
\mu\left( \bigcup_{n}A_{n} \right)=\sum_{n}\mu(A_{n})
$$
- $\mu$ is countably subadditive if, for all sequences $(A_{n})$ in $\mathcal{A}$ with $\bigcup_{n}A_{n}\in \mathcal{A}$
$$
\mu\left( \bigcup_{n}A_{n} \right)\leq \sum_{n}\mu(A_{n})
$$
