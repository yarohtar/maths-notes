Let $\mathcal{C}$ be [[Foundations/Category Theory/Locally Small]].
Then $\mathcal{C}(A,\cdot):\mathcal{C}\to \mathrm{Set}$ called the [[Foundations/Category Theory/Covariant]] hom-functor 
is defined by sending $B\in \operatorname{ob}\mathcal{C}$ to the [[Foundations/Category Theory/Hom-Set]] $\mathcal{C}(A,B)$
and sending [[Foundations/Category Theory/Morphism]]s $g:B\to C$ (i.e. $g\in \mathcal{C}(B,C)$)
to mappings $f:\mathcal{C}(A,B)\to \mathcal{C}(A,C)$ given by $f(h)=gh$.

Similarly, the [[Foundations/Category Theory/Contravariant]] hom-functor $\mathcal{C}(\cdot,B):\mathcal{C}\to \mathrm{Set}$ 
sends $A$ to $\mathcal{C}(A,B)$ and $g:C\to A$ to the map $f:\mathcal{C}(A,B)\to \mathcal{C}(C,B)$
given by $h\to hg$
### Lemma
The [[Foundations/Category Theory/Covariant]] hom-functor $\mathcal{C}(A,\cdot)$ is a [[Foundations/Category Theory/Functor]].
Similarly, the [[Foundations/Category Theory/Contravariant]] hom-functor $\mathcal{C}(\cdot,B)$ is a [[Foundations/Category Theory/Contravariant]] [[Foundations/Category Theory/Functor]].
### Proof
[[Foundations/Category Theory/Functor]]iality follows from the [[Foundations/Category Theory/Associativity]] law in $\mathcal{C}$

