Let $X$ be a (nonempty) [[Foundations/Ordinals/Poset]].
Suppose every [[Foundations/Ordinals/Chain]] in $X$ has an [[Foundations/Ordinals/Upper Bound]]. 
Then $X$ has a [[Foundations/Ordinals/Maximal]] element.
#### Proof
Assume $X$ has no maximal element. For each $x\in X$ fix $x'\in X$ s.t. $x<x'$ (by [[Foundations/Set Theory/Axiom of Choice]])
Also, for each chain $C\subseteq X$, let $u(C)$ be an upper bound for $C$ (by [[Foundations/Set Theory/Axiom of Choice]])
Let $\gamma=\gamma(X)$ ([[Foundations/Ordinals/Hartogs' Lemma]])
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
Hence $f$ is injective which is a contradiction by [[Foundations/Ordinals/Hartogs' Lemma]].
