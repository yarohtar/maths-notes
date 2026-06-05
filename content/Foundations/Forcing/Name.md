Let $(\mathbb{P},\leq,\mathbb{1})$ be a [[Foundations/Forcing/Forcing Partial Order]].
We define the $\mathbb{P}$-names by recursion: 
$$
\begin{gather}
\mathrm{Name}^{\mathbb{P}}_{0} = \varnothing  \\
\mathrm{Name}^{\mathbb{P}}_{\alpha+1} = \{ \tau : \tau \subseteq \mathrm{Name}^{\mathbb{P}}_{\alpha} \times \mathbb{P} \} \cup \mathrm{Name}^{\mathbb{P}}_{\alpha} \\
\mathrm{Name}^{\mathbb{P}}_{\lambda} = \bigcup_{\alpha<\lambda} \mathrm{Name}^{\mathbb{P}}_{\alpha} \\
\mathrm{Name}^{\mathbb{P}}=\bigcup_{\alpha \in \mathrm{Or d}} \mathrm{Name}^{\mathbb{P}}_{\alpha}
\end{gather}
$$
Furthermore, fix some $F\subseteq \mathbb{P}$ and define by $\in$-recursion:
$$
\mathrm{val}(\tau,F) = \{ \mathrm{val}(\sigma,F) : (\exists p\in F)\, (\sigma,p)\in \tau \} 
$$
We may write $\tau^{F}$ for $\mathrm{val}(\tau,F)$.
### Interpretation
If $(\sigma,p)\in \tau$ then $p$ guarantees that the set named by $\sigma$ is in the set named by $\tau$.
### Remark
When $\mathbb{P}=\{ \mathbb{1} \}$ then this is the [[Foundations/Von Neumann Hierarchy]].
### Lemma
$\mathrm{Name}^{\mathbb{P}}$ is [[Foundations/Absolute]] for [[Foundations/Transitive Model]]s of a [[Foundations/Sufficiently Strong]] $T\subseteq ZFC$.
In other words, there is an [[Foundations/Absolute]] [[Foundations/Set Theory/Function Class]] $\phi$ 
such that 
$$
\phi(\alpha,s) \iff \alpha \in \mathrm{Or d} \land s=\mathrm{Name}_{\alpha}^{\mathbb{P}}
$$
Furthermore, $\mathrm{val}$ is also [[Foundations/Absolute]] for [[Foundations/Transitive Model]]s of a [[Foundations/Sufficiently Strong]] $T\subseteq ZFC$.
