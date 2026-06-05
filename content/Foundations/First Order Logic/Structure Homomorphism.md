---
{"publish":true,"aliases":"Homomorphism","created":"2026-02-03T16:25:59.820+00:00","modified":"2026-02-03T16:32:06.930+00:00","cssclasses":""}
---

Let $\mathcal{M}$ and $\mathcal{N}$ be $\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s.
A function $h:M\to N$ is an $\mathcal{L}$-homomorphism if 
for any function symbol $f$ and $a_{1},\dots,a_{n}\in M$:
$$
h(f^{\mathcal{M}}(a_{1},\dots,a_{n})) = f^{\mathcal{N}}(h(a_{1}),\dots,h(a_{n}))
$$
and for any relation symbol $R$ and $a_{1},\dots,a_{n}\in M$:
$$
(a_{1},\dots,a_{n})\in R^{\mathcal{M}} \iff (h(a_{1}),\dots,h(a_{n})) \in R ^{\mathcal{N}}
$$
