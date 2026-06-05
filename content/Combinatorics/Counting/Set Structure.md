The [[Combinatorics/Counting/Combinatorial Structure]] defined by 
$$
\mathrm{Set}(S) = \{ S \}
$$
### Lemma
[[Algebra/Ordinary Generating Function]] is:
$$
f_{\mathrm{Set}}(x) = \frac{1}{1-x}
$$
[[Combinatorics/Counting/Exponential Generating Function]] is:
$$
\tilde{f}_{\mathrm{Set}}(x) = \exp(x)
$$
### Lemma
Let $F$ be a [[Combinatorics/Counting/Combinatorial Structure]]. 
The [[Combinatorics/Counting/Combinatorial Composition]] $\mathrm{Set}\circ F(A)$ 
is building the structure $F$ on each class of every partition $\pi$ of $A$.
#### Proof
As in the definition of [[Combinatorics/Counting/Combinatorial Composition]], 
let $S_{1}\sqcup S_{2}\sqcup\dots \sqcup S_{k}=A$ and $\alpha_{i}\in F(S_{i})$.
Each of these contributes $\mathrm{Set}(\{ \alpha_{1},\dots,\alpha_{k} \})=\{ \{ \alpha_{1},\dots,\alpha_{k} \} \}$
to the disjoint union, i.e. one unique element.
Thus every partition $\pi$ of $A$ contributes exactly $\prod_{B\in \pi}\lvert F(B) \rvert$ elements. 
This is exactly what we needed. 
