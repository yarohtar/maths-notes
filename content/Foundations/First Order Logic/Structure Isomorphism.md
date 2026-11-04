---
publish: true
aliases:
  - Isomorphism
created: 2026-10-11T21:45:33.297Z
modified: 2026-10-11T21:45:33.297Z
---

A bijective [[Structure Homomorphism]] is an isomorphism.
We write $\mathcal{M}\cong\mathcal{N}$ if there is an isomorphism $h:\mathcal{M}\to \mathcal{N}$.

### Theorem

Suppose $h:\mathcal{M}\to \mathcal{N}$ is an $\mathcal{L}$-isomorphism.
Then for any $\mathcal{L}$-formula $\varphi(x_{1},\dots,x_{n})$ and $a_{1},\dots,a_{n}\in M$,

$$
\mathcal{M}\models \varphi(a_{1},\dots,a_{n}) \iff \mathcal{N} \models \varphi(h(a_{1}),\dots,h(a_{n}))
$$

#### Proof

By formula complexity.

### Corollary

Isomorphism implies [[Elementary Equivalent Structures|Elementary Equivalence]]:

$$
\mathcal{M}\cong\mathcal{N}\implies \mathcal{M}\equiv \mathcal{N}
$$
