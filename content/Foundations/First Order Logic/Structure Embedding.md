---
publish: true
aliases:
  - Embedding
created: 2026-10-11T21:45:33.296Z
modified: 2026-10-11T21:45:33.297Z
---

An injective [[Structure Homomorphism]] is an embedding.

### Theorem

Let $h:\mathcal{M}\to \mathcal{N}$ be an $\mathcal{L}$-[[Structure Homomorphism|Homomorphism]].
Then $h$ is an embedding
if and only if
For any quantifier free formula $\varphi(x_{1},\dots,x_{n})$ and $a_{1},\dots,a_{n}\in M$:

$$
\mathcal{M}\models \varphi(a_{1},\dots,a_{n}) \iff \mathcal{N} \models \varphi(h(a_{1}),\dots,h(a_{n}))
$$

#### Proof

By formula complexity...
