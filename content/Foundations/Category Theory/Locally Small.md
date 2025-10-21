A [[Foundations/Category Theory/Category]] $\mathcal{C}$ is locally small if, for any two [[Foundations/Category Theory/Object]]s $A$ and $B$,
the [[Foundations/Category Theory/Morphism]]s $A\to B$ in $\mathcal{C}$ are parametrized by a set $\mathcal{C}(A,B)$.

For example, $\mathrm{Set}$, $\mathrm{Gp}$, $\mathrm{Top}$ are all locally small
but [[Foundations/Category Theory/Functor]] category $[\mathcal{C},\mathcal{D}]$ needn't be.

### Lemma
For any object $A$ of a locally small [[Foundations/Category Theory/Category]] $\mathcal{C}$ 
we have a [[Foundations/Category Theory/Functor]] $\mathcal{C}(A,\cdot):\mathcal{C}\to \mathrm{Set}$
sending $B$ to $\mathcal{C}(A,B)$ and $B\xrightarrow{f}C$ to $(g\to fg):\mathcal{C}(A,B)\to \mathcal{C}(A,C)$ 
[[Foundations/Category Theory/Functor]]iality follows from the [[Foundations/Category Theory/Associativity]] law in $\mathcal{C}$

Dually, we have [[Foundations/Category Theory/Functor]]s $\mathcal{C}(\cdot,B):\mathcal{C^{op}}\to \mathrm{Set}$ for each $B\in \operatorname{ob}\mathcal{C}$.