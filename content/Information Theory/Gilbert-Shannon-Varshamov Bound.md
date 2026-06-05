The [[Information Theory/Size of Largest Code]] satisfies:
$$
\frac{2^{n}}{V(n,d-1)}\leq A(n,d)
$$
#### Proof
Let $C$ be a code of length $n$ and minimum distance $d$ 
of largest possible size. 
Then there is no string $x\in \mathbb{F}_{2}^{n}$ s.t. $d(x,c)\geq d$ for all $c\in C$. 
Otherwise we would replace $C$ with $C\cup \{ x \}$
Then
$$
\mathbb{F}^{n}_{2}\subseteq \bigcup_{c\in C}B(c,d-1)
$$
Thus 
$$
2^{n}\leq \lvert C \rvert V(n,d-1)
$$
$$
\frac{2^{n}}{V(n,d-1)}\leq \lvert C \rvert
$$

