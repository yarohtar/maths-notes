Let $\mathcal{L}=\{ +,\cdot,0,1 \}$ be the [[Foundations/First Order Logic/Language]] of fields.
ACF is the [[Foundations/First Order Logic/Theory]] consisting of the [[Algebra/Field]] axioms,
as well as, for every $d\geq 1$, the sentence:
$$
(\forall v_{0},v_{1},\dots,v_{d-1})\ (\exists x)\ x^{d}+v_{d-1}x^{d-1}+\dots+v_{1}x+v_{0}=0
$$
Additionally, let $\chi_{n}$ be the sentence 
$$
\underbrace{1+1+\dots+1}_{n}=0
$$
and set 
$$
\mathrm{ACF}_{0} = \mathrm{ACF} \cup \{ \chi_{n} : n\geq 1 \}
$$
and for every prime $p$, set 
$$
\mathrm{AFC}_{p} = \mathrm{ACF} \cup \{ \chi_{p} \}
$$
## Theorem
Both $\mathrm{ACF}_{0}$ and (for prime $p$) $\mathrm{ACF}_{p}$ are $\kappa$-[[Foundations/First Order Logic/Categorical]] for all $\kappa>\aleph_{0}$.
### Proof
Follows from the properties of [[Algebra/Transcendence Degree]].
## Corollary
Both $\mathrm{ACF}_{0}$ and (for prime $p$) $\mathrm{ACF}_{p}$ are a [[Foundations/First Order Logic/Complete Theory]].
### Proof
[[Foundations/First Order Logic/Vaught's Test]].
