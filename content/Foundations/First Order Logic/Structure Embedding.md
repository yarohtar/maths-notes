---
{"publish":true,"aliases":"Embedding","created":"2026-02-03T16:29:28.624+00:00","modified":"2026-02-03T16:40:00.757+00:00","cssclasses":""}
---

An injective [[Foundations/First Order Logic/Structure Homomorphism]] is an embedding.
### Theorem
Let $h:\mathcal{M}\to \mathcal{N}$ be an $\mathcal{L}$-[[Foundations/First Order Logic/Structure Homomorphism\|Homomorphism]].
Then $h$ is an embedding 
if and only if 
For any quantifier free formula $\varphi(x_{1},\dots,x_{n})$ and $a_{1},\dots,a_{n}\in M$:
$$
\mathcal{M}\models \varphi(a_{1},\dots,a_{n}) \iff \mathcal{N} \models \varphi(h(a_{1}),\dots,h(a_{n}))
$$
#### Proof
By formula complexity...