There exist uncountable ordinals.
##### Idea
If there's an uncountable ordinal then there's a least $\alpha$
Then $I_{\alpha}$ is the set of all countable ordinals, ie, [[Notes/Order Type]] of [[Notes/Well-ordered]] of subsets of $\mathbb{N}$

#### Proof
$$
A=\{ (M,R)\in P\mathbb{N}\times P(\mathbb{N}\times \mathbb{N}): R \text{ is well ordering of }M \}
$$
Then the set $B=\{ \text{order-type}(X):X\in A \}$ consists of all countable ordinals.

Let $\omega_{1}=sup B$. If $\omega_{1}$ is countable, then $\omega_{1}^{+}$ is also countable and so $\omega_{1}^{+}\in B$. Hence $\omega_{1}^{+}\leq \omega_{1}$ which is a contradiction.

