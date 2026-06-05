Let $M$ be a [[Foundations/Transitive Model]] of $ZFC$.
Let $(\mathbb{P},\leq,\mathbb{1})$ be a [[Foundations/Forcing/Forcing Partial Order]].
If $x\in M$ define 
$$
\check{x} = \{ (\check{y},\mathbb{1}) : y\in x \}
$$
the canonical name for $x$.

Furthermore, define 
$$
\Gamma=\{ (\check{p},p) : p\in \mathbb{P} \}
$$
the canonical name for the generic object.
### Lemma
Suppose $\mathbb{1}\in F$. Then 
$$
\mathrm{val}(\check{x},F) = x
$$
### Corollary
If $\mathbb{1}\in F$ then $M\subseteq M[F]$, the [[Foundations/Forcing/Model Extension]].
### Lemma
If $\mathbb{1}\in F$ then 
$$
\mathrm{val}(\Gamma,F) = F
$$
### Corollary
If $\mathbb{1}\in F$ then $F\in M[F]$, the [[Foundations/Forcing/Model Extension]].


