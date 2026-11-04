---
publish: true
aliases:
  - functor
  - functorial
  - functorially
  - functors
created: 2026-10-11T21:45:33.291Z
modified: 2026-10-11T21:45:33.291Z
---

Let $\mathcal{C}$ and $\mathcal{D}$ be [[Category|categories]].
A functor $F:\mathcal{C}\to \mathcal{D}$ consists of mappings

$$
\operatorname{ob}\mathcal{C}\xrightarrow{F}\operatorname{\mathcal{D}}
$$

$$
\operatorname{mor}\mathcal{C}\xrightarrow{F}\operatorname{mor}\mathcal{D}
$$

Satisfying:

$$
\begin{gather}
F(\operatorname{dom}f)=\operatorname{dom}(Ff)\\
F(\operatorname{cod}f)=\operatorname{cod}(Ff) \\
F(1_{A}) = 1_{FA} \\
F(fg)=(Ff)(Fg) \text{ whenever }fg \text{ is defined}
\end{gather}
$$

[[Covariant]]
[[Contravariant]]
[[Forgetful Functor]]
[[Free Group Functor]]
[[Power Set Functor]]
[[Dual Space Functor]]
[[Opposite Functor]]
[[Monoid Homomorphism]]
[[Order Preserving Map]]
[[Group Action]]

[[Faithfull]]
[[Full]]
[[Essentially Injective]]
[[Essentially Surjective]]
