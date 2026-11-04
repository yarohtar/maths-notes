Let $\mathcal{C}$ be a [[Small Category]].
The collection of [[Covariant]] [[Hom-Functor]]s $\mathcal{C}(A,-):\mathcal{C}\to \mathrm{Set}$
and [[Natural Transformation]]s

$$
\mathcal{C}(f,-): \mathcal{C}(B,-) \to \mathcal{C}(A,-)
$$

when $f:A\to B$
define a [[Functor]]:

$$
\mathcal{C}(\bullet,-): \mathcal{C}^{op} \to [\mathcal{C},\mathrm{Set}]
$$

called the Yoneda embedding.

Dually, the [[Contravariant]] [[Hom-Functor]]s $\mathcal{C}(-,A):\mathcal{C}\to \mathrm{Set}$
together with [[Natural Transformation]]s

$$
\mathcal{C}(-,f) : \mathcal{C}(-,A) \to \mathcal{C}(-,B)
$$

when $f:A\to B$
define a [[Functor]]:

$$
\mathcal{C}(-,\bullet) : \mathcal{C}\to[\mathcal{C}^{op}, \mathrm{Set}]
$$

which we also call the Yoneda embedding.

### Lemma

Yoneda embedding is a [[Functor]].

#### Proof

Follows from [[Associativity]] of composition in $\mathcal{C}$.

### Lemma

The Yoneda embedding defines a [[Full]] and [[Faithfull]] [[Functor]] $\mathcal{C}^{op}\to[\mathcal{C},\mathrm{Set}]$

### Proof

Putting $F=\mathcal{C}(B,-)$ in [[Yoneda Lemma]],
we find that the Yoneda embedding is a bijection from the set $\mathcal{C}(B,A)$
to the collection of [[Natural Transformation]]s $\mathcal{C}(A,-)\to \mathcal{C}(B,-)$
Thus this will automatically be [[Full]] and [[Faithfull]].
