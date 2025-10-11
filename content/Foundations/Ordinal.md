An ordinal is a well ordered set.
We identify ordinals that are [[Foundations/Order-isomorphic]] to each-other. 

[[Foundations/Order Type]]

### Proposition
Let $\alpha$ be an ordinal. Then the ordinals strictly less than $\alpha$ form a [[Foundations/Well-ordered]] set of [[Foundations/Order Type]] $\alpha$.
#### Proof
Let $X$ be a [[Foundations/Well-ordered]] set whose [[Foundations/Order Type]] is $\alpha$ 
Let $X'=\{ Y\subseteq X:Y \text{ is a proper initial segment of }X \}$
$X'$ is [[Foundations/Linear order]]ed by '$<$' by ....
The map $X\to X'$, sending $x\to I_{x}$ is an [[Foundations/Order-isomorphic]]
Hence, $X'$ is [[Foundations/Well-ordered]] by $<$ and so is 
$$
\{ \text{order-type}(Y):Y\in X' \}
$$
which consists exactly of ordinals $<\alpha$.

### Theorem
Let $S$ be a nonempty set of ordinals. Then $S$ has a least element.
#### Proof
Let $\alpha \in S$. If $\alpha$ is not a least element, then $S\cap I_{\alpha}\neq \emptyset$
By previous, $S\cap I_{\alpha}$ has a least element $\beta$. 
Since $I_{\alpha}$ is an [[Foundations/Initial Segment]] of ordinals ($j<\beta$, $\beta \in I_{\alpha}\implies j\in I_{\alpha}$) it follows that $\beta$ is a least element of $S$. 

## Stuff
[[Foundations/Burali-Forti paradox]]
[[Foundations/Class of Ordinals]]
[[Foundations/Supremum of Ordinals]]
[[Foundations/Epic list of ordinals]]
[[Foundations/Hartogs' Lemma]]
[[Foundations/Types of ordinals]]
[[Foundations/Ordinal Addition]]
[[Foundations/Ordinal Multiplication]]
[[Foundations/Ordinal Exponentiation]]
