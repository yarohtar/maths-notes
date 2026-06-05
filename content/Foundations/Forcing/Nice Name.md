Let $\mathbb{P}$ be a [[Foundations/Forcing/Forcing Partial Order]].
Let $\lambda$ be an [[Foundations/Ordinals/Ordinal]] 
and let $\mathcal{R}=\{ A_{\alpha} : \alpha<\lambda \}$ be a collection of [[Foundations/Poset/Strong Antichain]]s.
Define 
$$
\tau_{\mathcal{R}}=\{ (\check{\alpha},p) : \alpha < \lambda \land p\in A_{\alpha} \}
$$
We say that a [[Foundations/Forcing/Name]] $\tau$ is a nice name if $\tau=\tau_{\mathcal{R}}$ for some $\mathcal{R}$.
### Lemma
Let $\lvert \mathbb{P} \rvert=\mu$ and assume that $\mathbb{P}$ has $\kappa$-[[Foundations/Forcing/Chain Condition]]. 
Then there are at most 
$$
\left\lvert (\mu^{<\kappa})^{\lambda} \right\rvert 
$$
nice names for subsets of $\lambda$.
#### Proof
Each [[Foundations/Poset/Strong Antichain]] in $\mathbb{P}$ has at most $<\kappa$ elements, 
so there are at most $\lvert \mu^{<\kappa} \rvert$ antichains.
But then there are at most $\lvert (\mu^{<\kappa})^{\lambda} \rvert$ families of antichains,
so at most that many nice names.
### Theorem
Let $G$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over a [[Foundations/Transitive Model]] $M\models ZFC$.
Then every subset of $\lambda$ in $M[G]$ has a nice name in $M$.
#### Proof
Fix $\mu^{G}\subseteq \lambda$ for some [[Foundations/Forcing/Name]] $\mu \in M$.
Suppose that $\mu$ is not a nice name.
Fix $\alpha<\lambda$.
Then $\alpha^{G}\in \mu^{G}$ if and only if some $p\in G$ forces $\alpha \in \mu$.
Using [[Foundations/Ordinals/Zorn's Lemma]] in $M$, 
build a maximal [[Foundations/Poset/Strong Antichain]] $A_{\alpha}\subseteq \{ p\in \mathbb{P}: p\Vdash \check{\alpha}\in \mu \}$.
Thus we find 
$$
\mathcal{R}=\{ A_{\alpha} : \alpha<\lambda \}\in M
$$
We now prove that
$$
\tau_{\mathcal{R}}^{G}= \mu^{G}
$$
which will finish the proof as $\tau_{\mathcal{R}}$ is a nice name.
##### $\subseteq$
If $\alpha \in \tau_{\mathcal{R}}^{G}$ then by definition there is $p\in G$ such that 
$$
(\check{\alpha},p)\in \tau_{\mathcal{R}}
$$
We conclude that $p\in A_{\alpha}$ so $p\Vdash \check{\alpha}\in \mu$.
Thus $\alpha \in \mu^{G}$.
##### $\supseteq$
If $\alpha \in \mu^{G}$, by [[Foundations/Forcing/Forcing Relation]] find $q\in G$ 
$$
q\Vdash \check{\alpha} \in \mu
$$
By the lemma in [[Foundations/Poset/Dense Below]], if $G\cap A_{\alpha}=\varnothing$ 
then there is some $p\in G$ with $p\operatorname{\bot}s$ for all $s \in A_{\alpha}$.
So find $r\in G$ with $r\leq p,q$.
Then $A_{\alpha}\cup \{ r \}$ is a larger antichain with $(\forall s \in A_{\alpha})\,s\Vdash \check{\alpha}\in \mu$.
Therefore, we could have WLOG taken $q\in G\cap A_{\alpha}$.
But then $(\check{\alpha},q)\in \tau_{\mathcal{R}}$ so 
$$
\alpha \in \tau_{\mathcal{R}}^{G}
$$
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
Also there are at most $\lvert \nu \rvert$ [[Foundations/Forcing/Nice Name]]s in $M$. 
