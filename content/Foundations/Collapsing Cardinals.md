Let $M$ be a [[Transitive Model]] of $ZFC$.
Let $\mathbb{P}=\mathrm{Fn}(\omega,\alpha)$ be a [[Finite Function Forcing]] where

$$
M\models \alpha = \aleph_{1}^{M}
$$

Let $G$ be a $\mathbb{P}$-[[Generic Filter]] over $M$.
By [[Model Extension by Finite Function Forcing]], we find that

$$
M[G] \models f:\omega\twoheadrightarrow \alpha
$$

for some $f\in M[G]$.
In particular, $\lvert \alpha \rvert<\aleph_{1}^{M[G]}$, so $\alpha$ is not a [[Cardinal]] in $M[G]$.

### Corollary

Being a [[Cardinal]] is [[Downwards Absolute]] but not [[Upwards Absolute]].

#### Proof

Let $M$ be a [[Countable Transitive Model]] of a [[Sufficiently Strong]] finite $T^{*}\subseteq ZFC$
such that the [[Model Extension]] $M[G]\models T$,
where $T$ is again [[Sufficiently Strong]] and finite.
Let $\mathbb{P}$ be as above and find $G$ to be a $\mathbb{P}$-[[Generic Filter]] over $M$
(which exists as $M$ is countable)
By above argument,
being a [[Cardinal]] is not [[Upwards Absolute]] between $M$ and $M[G]$.

However, we can express "$\kappa$ is a [[Cardinal]]" as

$$
(\forall \lambda<\kappa)\, (\forall f:\lambda \to \kappa)\, f \text{ is not surjective}
$$

which is a $\Pi_{1}$ formula in [[Formula Hierarchy]] and thus [[Downwards Absolute]].
