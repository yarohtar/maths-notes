Let $\mathcal{M}$ and $\mathcal{N}$ be $\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s with $M\subseteq N$.
Let $h:\mathcal{M}\to \mathcal{N}$ be the inclusion map.
Suppose $h$ is an $\mathcal{L}$-[[Foundations/First Order Logic/Elementary Embedding]].
Then $\mathcal{M}$ is an elementary substructure of $\mathcal{N}$ written $\mathcal{M}\preceq\mathcal{N}$

We also say $\mathcal{N}$ is the elementary extension of $\mathcal{M}$. 

### Lemma
If $\mathcal{M}\preceq \mathcal{N}$ then they are [[Foundations/First Order Logic/Elementary Equivalent Structures\|Elementary Equivalent]].
### Example
The converse doesn't hold, e.g. $\mathcal{M}=(2\mathbb{Z},<)$ and $\mathcal{N}=(\mathbb{Z},<)$.
They are [[Foundations/First Order Logic/Elementary Equivalent Structures\|Elementary Equivalent]], but they don't agree on the sentence:
$$
\varphi = (\exists x)\, 0<x<2
$$
so the inclusion map cannot be an [[Foundations/First Order Logic/Elementary Embedding]].

