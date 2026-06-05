---
{"publish":true,"aliases":"Elementary Equivalent","created":"2026-02-03T15:45:53.063+00:00","modified":"2026-02-03T16:11:56.194+00:00","cssclasses":""}
---

$\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s $\mathcal{M}$ and $\mathcal{N}$ are elementary equivalent 
if [[Foundations/First Order Logic/Theory of a Structure\|Theory of]] $\mathcal{M}$ is the same as [[Foundations/First Order Logic/Theory of a Structure\|Theory of]] $\mathcal{N}$: 
$$
\mathrm{Th}(\mathcal{M}) = \mathrm{Th}(\mathcal{N})
$$
We write $\mathcal{M}\equiv_{\mathcal{L}} \mathcal{N}$.
We may drop $\mathcal{L}$ if the language is clear.
### Lemma
Let $T$ be an $\mathcal{L}$-[[Foundations/First Order Logic/Theory]]. 
Then $T$ is a [[Foundations/First Order Logic/Complete Theory]] 
if and only if
Any two models of $T$ are elementary equivalent.
### Example
Let $\mathcal{L}=\varnothing$ and $T=\{ \varphi_{n}:n\geq 2 \}$ where 
$$
\varphi_{n} := \exists x_{1}\dots \exists x_{n} \bigwedge_{i\neq j} x_{i} \neq x_{j}
$$
Then $T$ is complete.
Thus any two $\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s are equivalent.