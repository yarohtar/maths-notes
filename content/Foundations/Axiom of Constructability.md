For $L$ the [[Foundations/Constructible Hierarchy]]:
$$
\forall x\,\exists \alpha\,(\alpha \in \mathrm{Or d} \land x\in L_{\alpha})
$$
We abbreviate this as $V=L$, where $V$ is the [[Foundations/Von Neumann Hierarchy]]
(though this is misleading).
Note that 
$$
L\models V=L
$$
### Proposition
Let $T$ be [[Foundations/Sufficiently Strong]]
Let $X$ be a [[Foundations/Transitive Model]] such that $X\models T\land (V=L)$.
Then:
$$
\bigcup_{\alpha \in X} L_{\alpha} = X
$$
#### Proof
By minimality of $L$, we know that 
$$
\bigcup_{\alpha \in X} L_{\alpha} \subseteq X
$$
But also by $V=L$: 
$$
X\subseteq \bigcup_{\alpha \in X} L_{\alpha}
$$

