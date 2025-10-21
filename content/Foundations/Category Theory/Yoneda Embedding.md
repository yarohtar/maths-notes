[[Foundations/Category Theory/Yoneda Lemma]]
The mapping $A\to \mathcal{C}(A,\cdot)$ defines a [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]] [[Foundations/Category Theory/Functor]] $\mathcal{C}^{op}\to[\mathcal{C},\mathrm{Set}]$
[[Foundations/Category Theory/Yoneda Embedding]]
### Proof
Putting $F=\mathcal{C}(B,\cdot)$ in 2.2, we get a bijection from $\mathcal{C}(B,A)$ to the collection of
[[Foundations/Category Theory/Natural Transformation]]s $\mathcal{C}(A,\cdot)\to \mathcal{C}(B,\cdot)$
But this sends $f\in \mathcal{C}(B,A)$ to the mapping $g\to gf$ 
So [[Foundations/Category Theory/Functor]]iality follows from [[Foundations/Category Theory/Associativity]] of composition in $\mathcal{C}$
Dually, we have a [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]] [[Foundations/Category Theory/Functor]] $\mathcal{C}\to[\mathcal{C}^{op},\mathrm{Set}]$ sending $B$ to $\mathcal{C}(\cdot,B)$