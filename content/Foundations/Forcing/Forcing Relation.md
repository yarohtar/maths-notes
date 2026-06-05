Let $M$ be a [[Foundations/Transitive Model]].
Let $(\mathbb{P},\leq,\mathbb{1})$ be a [[Foundations/Forcing/Forcing Partial Order]]
and denote by $M[G]$ the [[Foundations/Forcing/Model Extension]] of $M$ by some $G\subseteq \mathbb{P}$.
Furthermore, let $\mathcal{L}_{\mathbb{P},M}$ be the [[Foundations/Forcing/Forcing Language]] with the [[Foundations/Forcing/Forcing Sentence]]s $\mathrm{Se nt}_{\mathbb{P},M}$.

A relation $\Vdash$ on $\mathbb{P}\times \mathrm{Se nt}_{\mathbb{P},M}$ is a forcing relation if 
for any $G$ that is a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$,
any formula $\varphi \in \mathcal{L}_{\mathbb{P},M}$ with $k$ [[Foundations/First Order Logic/Free Variable]]s
and any [[Foundations/Forcing/Name]]s $\tau_{1},\dots,\tau_{k}\in \mathrm{Name}^{\mathbb{P}}\cap M$ (i.e. constants in $\mathcal{L}_{\mathbb{P},M}$)
the following equivalence holds:
$$
\begin{gather}
M[G] \models \varphi(\mathrm{val}(\tau_{1},G),\dots,\mathrm{val}(\tau_{k},G)) \\
\iff \\
(\exists p\in G)\, M\models (p \Vdash \varphi(\tau_{1},\dots,\tau_{k}))
\end{gather}
$$
Additionally, we require that $\Vdash$ is downwards closed i.e. 
$$
p\Vdash \varphi \land q\leq p \implies q \Vdash \varphi
$$
