Let $X\subseteq \mathbb{N}$ be finite.
A $d$-dimensional parameter set $S$ in $X^{n}$ 
is a set of the following form:
$$
S=\left\{ x\in X:\quad %quad
 \begin{array}{l}
x_{i}=a_{i} \text{ for }i\in[n]\setminus(I_{1}\cup\dots \cup I_{d}) \\
x_{i}=x_{j} \text{ whenever }i,j\in I_{\ell} \text{ for some $\ell$}
\end{array} \right\}
$$
where $I_{\ell}\subseteq[n]$ are disjoint, and $a_{i}\in X$ are fixed.

[[Combinatorics/Ramsey/Combinatorial Line]] is a $1$-parameter set.
### Lemma
A [[Combinatorics/Ramsey/Combinatorial Line]] in $(X^{d})^{n}$ with alphabet $X^{d}$ 
is a $d$-parameter set in $X^{nd}$ with alphabet $X$.
#### Proof
Let $I$ be the set of active coordinates of the line in $(X^{d})^{n}$.
Then define
$$
I_{\ell} = \{ id-\ell + 1 : i\in I \}
$$
and note that these are the active coordinates for the $d$-parameter set.
