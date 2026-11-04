Let $G$ be a [[Group]] and $Syl_{p}(G)$ the set of [[Sylow Subgroup]]s.
The number $n_p=|Syl_p(G)|$ satisfies $n_p\equiv 1\pmod{p}$ and $n_p\mid m$.

#### Proof

By the [[Second Sylow Theorem]], $G$ acts [[Foundations/Set Theory/Transitive|Transitively]] on $Syl_p(G)$,
so $n_p\mid |G|$
so it suffices to show $n_p\equiv 1\pmod p$.
Let $P$ be a Sylow $p$-subgroup.
Consider the [[Conjugation]] [[Group Action]] of $P$ on $Syl_p(G)$.
Note that all [[Orbit|orbits]] of this action are divisors of $|P|=p^a$.
Also $Orb_P(P)=\{P\}$.
Suppose another orbit has order 1,
i.e. orbit of $Q$ is of size 1 for some $Q$
Then $P\leq N_G(Q)$,
so $P$ and $Q$ are Sylow $p$-subgroups of $N_G(Q)$.
So for some $g\in N_G(Q)$ we have $P=gQg^{-1}=Q$.
Hence there is exactly one orbit of size $1$,
but $n_p$ is the sum of orbit sizes so it has to be $n_p\equiv 1\pmod p$.

### Corollary

If $n_p=1$ then there is a [[Normal]] Sylow $p$-subgroup of $G$.

#### Proof

$Syl_p(G)$ is closed under [[Conjugation]] by [[Second Sylow Theorem]]
