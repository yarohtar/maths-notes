An ordinal is a well ordered set.
We identify ordinals that are [[Foundations/Ordinals/Order-isomorphic]] to each-other. 

[[Foundations/Set Theory/Order Type]]
### Proposition
Let $\alpha$ be an ordinal. 
Then the ordinals strictly less than $\alpha$ form a [[Foundations/Ordinals/Well-ordered]] set of [[Foundations/Set Theory/Order Type]] $\alpha$.
#### Proof
Let $X$ be a [[Foundations/Ordinals/Well-ordered]] set whose [[Foundations/Set Theory/Order Type]] is $\alpha$ 
Let $X'=\{ Y\subseteq X:Y \text{ is a proper initial segment of }X \}$
$X'$ is [[Foundations/Ordinals/Linear order]]ed by '$<$' by ....
The map $X\to X'$, sending $x\to I_{x}$ is an [[Foundations/Ordinals/Order-isomorphic]]
Hence, $X'$ is [[Foundations/Ordinals/Well-ordered]] by $<$ and so is 
$$
\{ \text{order-type}(Y):Y\in X' \}
$$
which consists exactly of ordinals $<\alpha$.

### Theorem
Let $S$ be a nonempty set of ordinals. Then $S$ has a least element.
#### Proof
Let $\alpha \in S$. If $\alpha$ is not a least element, then $S\cap I_{\alpha}\neq \emptyset$
By previous, $S\cap I_{\alpha}$ has a least element $\beta$. 
Since $I_{\alpha}$ is an [[Foundations/Ordinals/Initial Segment]] of ordinals ($j<\beta$, $\beta \in I_{\alpha}\implies j\in I_{\alpha}$) it follows that $\beta$ is a least element of $S$. 

## Stuff
[[Foundations/Ordinals/Burali-Forti paradox]]
[[Foundations/Set Theory/Class of Ordinals]]
[[Foundations/Ordinals/Supremum of Ordinals]]
[[Foundations/Ordinals/Epic list of ordinals]]
[[Foundations/Ordinals/Hartogs' Lemma]]
[[Foundations/Ordinals/Types of ordinals]]
[[Foundations/Ordinals/Ordinal Addition]]
[[Foundations/Ordinals/Ordinal Multiplication]]
[[Foundations/Ordinals/Ordinal Exponentiation]]
