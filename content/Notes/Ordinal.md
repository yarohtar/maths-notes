An ordinal is a well ordered set.
We identify ordinals that are [[Notes/Order-isomorphic]] to each-other. 

[[Notes/Order Type]]

### Proposition
Let $\alpha$ be an ordinal. Then the ordinals strictly less than $\alpha$ form a [[Notes/Well-ordered]] set of [[Notes/Order Type]] $\alpha$.
#### Proof
Let $X$ be a [[Notes/Well-ordered]] set whose [[Notes/Order Type]] is $\alpha$ 
Let $X'=\{ Y\subseteq X:Y \text{ is a proper initial segment of }X \}$
$X'$ is [[Notes/Linear order]]ed by '$<$' by ....
The map $X\to X'$, sending $x\to I_{x}$ is an [[Notes/Order-isomorphic]]
Hence, $X'$ is [[Notes/Well-ordered]] by $<$ and so is 
$$
\{ \text{order-type}(Y):Y\in X' \}
$$
which consists exactly of ordinals $<\alpha$.

### Theorem
Let $S$ be a nonempty set of ordinals. Then $S$ has a least element.
#### Proof
Let $\alpha \in S$. If $\alpha$ is not a least element, then $S\cap I_{\alpha}\neq \emptyset$
By previous, $S\cap I_{\alpha}$ has a least element $\beta$. 
Since $I_{\alpha}$ is an [[Notes/Initial Segment]] of ordinals ($j<\beta$, $\beta \in I_{\alpha}\implies j\in I_{\alpha}$) it follows that $\beta$ is a least element of $S$. 

## Stuff
[[Notes/Burali-Forti paradox]]
[[Notes/Class of Ordinals]]
[[Notes/Supremum of Ordinals]]
[[Notes/Epic list of ordinals]]
[[Notes/Hartogs' Lemma]]
[[Notes/Types of ordinals]]
[[Notes/Ordinal Addition]]
[[Notes/Ordinal Multiplication]]
[[Notes/Ordinal Exponentiation]]
