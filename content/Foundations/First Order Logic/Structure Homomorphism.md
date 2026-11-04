---
publish: true
aliases:
  - Homomorphism
created: 2026-10-11T21:45:33.297Z
modified: 2026-10-11T21:45:33.297Z
---

Let $\mathcal{M}$ and $\mathcal{N}$ be $\mathcal{L}$-[[Structure]]s.
A function $h:M\to N$ is an $\mathcal{L}$-homomorphism if
for any function symbol $f$ and $a_{1},\dots,a_{n}\in M$:

$$
h(f^{\mathcal{M}}(a_{1},\dots,a_{n})) = f^{\mathcal{N}}(h(a_{1}),\dots,h(a_{n}))
$$

and for any relation symbol $R$ and $a_{1},\dots,a_{n}\in M$:

$$
(a_{1},\dots,a_{n})\in R^{\mathcal{M}} \iff (h(a_{1}),\dots,h(a_{n})) \in R ^{\mathcal{N}}
$$
