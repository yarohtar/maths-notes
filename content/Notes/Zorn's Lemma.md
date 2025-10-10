Let $X$ be a (nonempty) [[Notes/Poset]].
Suppose every [[Notes/Chain]] in $X$ has an [[Notes/Upper Bound]]. 
Then $X$ has a [[Notes/Maximal]] element.
#### Proof
Assume $X$ has no maximal element. For each $x\in X$ fix $x'\in X$ s.t. $x<x'$ (by [[Notes/Axiom of Choice]])
Also, for each chain $C\subseteq X$, let $u(C)$ be an upper bound for $C$ (by [[Notes/Axiom of Choice]])
Let $\gamma=\gamma(X)$ ([[Notes/Hartogs' Lemma]])
Define $f:\gamma \to X$ by recursion:
$$
\begin{gather}
f(0)=u(\emptyset)\\
f(\alpha^{+})=f(\alpha)'\\
f(\lambda)=u(\{ f(\alpha):\alpha<\lambda \}) \quad %quad
\text{ for }\lambda\neq 0 \text{ limit}
\end{gather}
$$
An easy induction (on $\beta$ with $\alpha$ fixed) shows that $\alpha<\beta \implies f(\alpha)<f(\beta)$
Hence $f$ is injective which is a contradiction by [[Notes/Hartogs' Lemma]].
