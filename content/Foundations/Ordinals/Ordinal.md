An ordinal is a well ordered set.
We identify ordinals that are [[Order-isomorphic]] to each-other.

[[Order Type]]

### Proposition

Let $\alpha$ be an ordinal.
Then the ordinals strictly less than $\alpha$ form a [[Well-Ordered]] set of [[Order Type]] $\alpha$.

#### Proof

Let $X$ be a [[Well-Ordered]] set whose [[Order Type]] is $\alpha$
Let $X'=\{ Y\subseteq X:Y \text{ is a proper initial segment of }X \}$
$X'$ is [[Linear order]]ed by '$<$' by ....
The map $X\to X'$, sending $x\to I_{x}$ is an [[Order-isomorphic]]
Hence, $X'$ is [[Well-Ordered]] by $<$ and so is

$$
\{ \text{order-type}(Y):Y\in X' \}
$$

which consists exactly of ordinals $<\alpha$.

### Theorem

Let $S$ be a nonempty set of ordinals. Then $S$ has a least element.

#### Proof

Let $\alpha \in S$. If $\alpha$ is not a least element, then $S\cap I_{\alpha}\neq \emptyset$
By previous, $S\cap I_{\alpha}$ has a least element $\beta$.
Since $I_{\alpha}$ is an [[Initial Segment]] of ordinals ($j<\beta$, $\beta \in I_{\alpha}\implies j\in I_{\alpha}$) it follows that $\beta$ is a least element of $S$.

## Stuff

[[Burali-Forti paradox]]
[[Class of Ordinals]]
[[Supremum of Ordinals]]
[[Epic list of ordinals]]
[[Hartogs' Lemma]]
[[Types of ordinals]]
[[Ordinal Addition]]
[[Ordinal Multiplication]]
[[Ordinal Exponentiation]]
