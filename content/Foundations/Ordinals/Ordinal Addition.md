For [[Foundations/Ordinals/Ordinal]]$s$ $\alpha$, $\beta$ we define $\alpha+\beta$ by recursion on $\beta$ with $\alpha$ fixed as follows:
$\alpha+0=\alpha$
$\alpha+\beta^{+}=(\alpha+\beta)^{+}$
$\alpha+\lambda=sup \{ \alpha+\beta:\beta<\lambda \}$ for $\lambda$ limit

This is NOT commutative in general, eg $\omega+1=\omega^{+}$ but $1+\omega=\omega$
[[Foundations/Ordinals/Synthetic Definition of Ordinal Addition]]

#### Remark
Technically, we should fix an ordinal $\gamma$ and define $\alpha+\beta$ by recursion on $\beta$ in the [[Foundations/Ordinals/Well-ordered]] set $I_{\gamma}$. By uniqueness in recursion, this gives a well-defined $\alpha+\beta$ for all $\alpha,\beta$. In general, this justifies recursive definition on all ordinals like the one above.

Similarly, proof by induction on all ordinals works;
Let $p(\alpha)$ be some property of an ordinal $\alpha$. Then
$$
(\forall \alpha)((\forall \beta)((\beta<\alpha)\implies p(\beta))\implies p(\alpha))\implies(\forall \alpha)p(\alpha)
$$
Indeed, assume otherwise. Then there is an ordinal $\gamma$ such that $\neg p(\gamma)$. Then there is also a least ordinal $\alpha\leq \gamma$ such that $\neg p(\alpha)$. If $\beta<\alpha$, then $\beta\leq \gamma$ and so $p(\beta)$ holds. By assumption $p(\alpha)$ holds.

### Proposition
$$
\beta\leq \gamma \implies \alpha+\beta\leq \alpha+\gamma
$$
#### Proof
By induction on $\gamma$ ($\alpha$ fixed). Consider three cases:
$\gamma=0$ if $\beta\leq \gamma$ then $\beta=\gamma=0$ so $\alpha+\beta\leq \alpha+\gamma$
$\gamma=\delta^{+}$ if $\beta\leq \gamma$ then WLOG $\beta<\gamma$, and so $\beta\leq \delta$. So by induction 
$$
\alpha+\beta\leq \alpha+\delta<(\alpha+\delta)^{+}=\alpha+\gamma
$$
$\gamma\neq 0$ is a limit. WLOG $\beta<\gamma$. Then there is some $\delta$ such that $\beta<\delta<\gamma$. By induction 
$$
\alpha+\beta\leq \alpha+\delta\leq\alpha+\gamma=sup \{ \alpha+\eta: \eta<\gamma \}
$$

### Lemma
Let $S$ be a nonempty set of ordinals. Then for any ordinal $\alpha$,
$$
\alpha+supS=sup \{ \alpha+\beta:\beta \in S \}
$$
#### Proof
Cases on whether $S$ has a greatest element. 

### Proposition
$$
\alpha+(\beta+\gamma)=(\alpha+\beta)+\gamma
$$
#### Proof
By induction on $\gamma$ with $\alpha$, $\beta$ fixed. We consider three cases:
$\gamma=0$ 
$\gamma=\delta^{+}$
$\gamma$ a limit