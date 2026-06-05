Let $M$ be a [[Foundations/Transitive Model]] of $ZFC$.
Let $\mathbb{P}=\mathrm{Fn}(\omega,\alpha)$ be a [[Foundations/Forcing/Finite Function Forcing]] where
$$
M\models \alpha = \aleph_{1}^{M}
$$
Let $G$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$.
By [[Foundations/Forcing/Model Extension by Finite Function Forcing]], we find that 
$$
M[G] \models f:\omega\twoheadrightarrow \alpha
$$
for some $f\in M[G]$.
In particular, $\lvert \alpha \rvert<\aleph_{1}^{M[G]}$, so $\alpha$ is not a [[Foundations/Set Theory/Cardinal]] in $M[G]$.
### Corollary
Being a [[Foundations/Set Theory/Cardinal]] is [[Foundations/Downwards Absolute]] but not [[Foundations/Upwards Absolute]].
#### Proof
Let $M$ be a [[Foundations/Countable Transitive Model]] of a [[Foundations/Sufficiently Strong]] finite $T^{*}\subseteq ZFC$
such that the [[Foundations/Forcing/Model Extension]] $M[G]\models T$,
where $T$ is again [[Foundations/Sufficiently Strong]] and finite.
Let $\mathbb{P}$ be as above and find $G$ to be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$
(which exists as $M$ is countable)
By above argument, 
being a [[Foundations/Set Theory/Cardinal]] is not [[Foundations/Upwards Absolute]] between $M$ and $M[G]$.

However, we can express "$\kappa$ is a [[Foundations/Set Theory/Cardinal]]" as 
$$
(\forall \lambda<\kappa)\, (\forall f:\lambda \to \kappa)\, f \text{ is not surjective}
$$
which is a $\Pi_{1}$ formula in [[Foundations/Formula Hierarchy]] and thus [[Foundations/Downwards Absolute]].
