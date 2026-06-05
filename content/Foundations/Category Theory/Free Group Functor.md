For any set $A$, there is a [[Algebra/Group Theory/Group]] $FA$ (namely the [[Algebra/Group Theory/Free Group]])
which contains (a copy of) $A$ 
and each function $A\to G$ where $G$ is a group
extends uniquely to a homomorphism $FA\to G$
We can make this into a [[Foundations/Category Theory/Functor]] $\mathrm{Set}\to \mathrm{Gp}$.
Given $A\xrightarrow{f}B$
define $Ff$ as the unique homomorphism $FA\to FB$
extending the composite $A\xrightarrow{f}B\to FB$
This is functorial:
Given $B\xrightarrow{g}C$,
both $F(gf)$ and $(Fg)(Ff)$ are unique homomorphisms
that extend $A\xrightarrow{f}B\xrightarrow{g}C\to FC$ so they're equal