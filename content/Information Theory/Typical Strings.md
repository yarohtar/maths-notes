Let $A$ be a discreet set.
Let $\{ X_{n} \}_{n\in \mathbb{N}}$ be [[Probability/Random Variable]]s taking values in $A$
Let $H\geq 0$.
Then the sets of typical strings of length $n\in \mathbb{N}$ with entropy $H$
are defined for each $\epsilon>0$ by:
$$
B_{n}^{*}(\epsilon)= \{ x_{1}^{n}\in A^{n} : 2^{-n(H+\epsilon)} \leq P^{n}(x_{1}^{n}) \leq 2^{-n(H-\epsilon)} \}
$$
where $P^{n}$ is the joint probability density function for $X_{1}^{n}=(X_{1},\dots,X_{n})$

i.e. $B_{n}^{*}$ is the set of strings that occur with probability close to $2^{-nH}$
## Lemma
For any $H\geq 0$, any $\epsilon>0$, and any $n\geq 1$:
$$
\lvert B_{n}^{*}(\epsilon) \rvert \leq 2^{n(H+\epsilon)}
$$
### Proof
Each $x_{1}^{n}\in B_{n}^{*}(\epsilon)$ has $P^{n}(x_{1}^{n})\geq 2^{-n(H+\epsilon)}$
Thus:
$$
1\geq \sum_{x_{1}^n\in B_{n}^{*}(\epsilon)} P^{n}(x_{1}^{n}) \geq \lvert B_{n}^{*}(\epsilon) \rvert 2^{-n(H+\epsilon)}
$$
## Lemma (AEP)
Let $\{ X_{n} \}$ be a [[Information Theory/Source]] taking values in a discreet set $A$
It satisfies the [[Information Theory/Asymptotic Equipartition Property]] with entropy $H\geq 0$
if and only if
for all $\epsilon>0$:
$$
\lim_{n\to \infty}\mathbb{P}(X_{1}^{n}\in B_{n}^{*}(\epsilon)) = 1
$$
### Proof
Let $\epsilon>0$.
Note that $X_{1}^{n}\in B_{n}^{*}(\epsilon)$ 
if and only if:
$$
2^{-n(H+\epsilon)} \leq P^{n}(X_{1}^{n}) \leq 2^{-n(H-\epsilon)}
$$
which happens if and only if:
$$
H-\epsilon\leq -\frac{1}{n} \log P^{n}(X_{1}^{n}) \leq H + \epsilon 
$$
Also, $\{ X_{n} \}$ satisfies AEP iff (by definition):
$$
\lim_{n\to \infty} \mathbb{P}\left( \left\lvert  \frac{1}{n} \log P^{n}(X_{1}^{n}) +H  \right\rvert > \epsilon \right) \to 0
$$
Thus the equivalence follows.