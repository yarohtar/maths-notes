Fix an [[Foundations/Ordinals/Ordinal]] $\lambda$ and a [[Foundations/Forcing/Forcing Partial Order]] $\mathbb{P}$.
Define $\mu=\lvert \mathbb{P} \rvert$.
Let $\kappa$ be such that $\mathbb{P}$ has the $\kappa$-[[Foundations/Forcing/Chain Condition]].
Thus there are at most $\mu^{<\kappa}$ many [[Foundations/Poset/Antichain]]s.
Thus there are at most 
$$
\left\lvert (\mu^{<\kappa})^{\lambda} \right\rvert
$$
many [[Foundations/Forcing/Nice Name]]s.
### Corollary
If $\mathbb{P}\in M$ and 
$$
M\models \mathbb{P}\text{ has }\kappa\text{-c.c.} \land \lvert \mathbb{P} \rvert =\mu
$$
then define $\nu$ to be such that 
$$
M\models (\mu^{<\kappa})^{\lambda} =\nu
$$
Then the [[Foundations/Forcing/Model Extension]] has:
$$
M[G] \models 2^{\lambda} \leq \nu
$$
#### Proof
Every subset of $\lambda$ in $M[G]$ has a [[Foundations/Forcing/Nice Name]] in $M$.
Also there are at most $\nu$ [[Foundations/Forcing/Nice Name]]s.
