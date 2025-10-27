Let $\mathcal{C}$ be a [[Foundations/Category Theory/Small Category]].
The collection of [[Foundations/Category Theory/Covariant]] [[Foundations/Category Theory/Hom-Functor]]s $\mathcal{C}(A,-):\mathcal{C}\to \mathrm{Set}$
and [[Foundations/Category Theory/Natural Transformation]]s 
$$
\mathcal{C}(f,-): \mathcal{C}(B,-) \to \mathcal{C}(A,-)
$$
when $f:A\to B$
define a [[Foundations/Category Theory/Functor]]:
$$
\mathcal{C}(\bullet,-): \mathcal{C}^{op} \to [\mathcal{C},\mathrm{Set}]
$$
called the Yoneda embedding.

Dually, the [[Foundations/Category Theory/Contravariant]] [[Foundations/Category Theory/Hom-Functor]]s $\mathcal{C}(-,A):\mathcal{C}\to \mathrm{Set}$
together with [[Foundations/Category Theory/Natural Transformation]]s
$$
\mathcal{C}(-,f) : \mathcal{C}(-,A) \to \mathcal{C}(-,B)
$$
when $f:A\to B$
define a [[Foundations/Category Theory/Functor]]:
$$
\mathcal{C}(-,\bullet) : \mathcal{C}\to[\mathcal{C}^{op}, \mathrm{Set}]
$$
which we also call the Yoneda embedding.
### Lemma
Yoneda embedding is a [[Foundations/Category Theory/Functor]].
#### Proof
Follows from [[Foundations/Category Theory/Associativity]] of composition in $\mathcal{C}$.
### Lemma
The Yoneda embedding defines a [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]] [[Foundations/Category Theory/Functor]] $\mathcal{C}^{op}\to[\mathcal{C},\mathrm{Set}]$
### Proof
Putting $F=\mathcal{C}(B,-)$ in [[Foundations/Category Theory/Yoneda Lemma]], 
we find that the Yoneda embedding is a bijection from the set $\mathcal{C}(B,A)$ 
to the collection of [[Foundations/Category Theory/Natural Transformation]]s $\mathcal{C}(A,-)\to \mathcal{C}(B,-)$
Thus this will automatically be [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]].

