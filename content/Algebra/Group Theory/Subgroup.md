Let $(G,\cdot)$ be a [[Group]] and $H\subseteq G$.
We say that $H$ is a subgroup if $(H,\cdot|_{H\times H\to H})$ is a [[Group]].
We write $H\leq G$

### Proposition

Let $G$ be a [[Group]] and $H\subseteq G$ nonempty.
Suppose for any $a,b\in H$ we have $ab^{-1}\in H$.
Then $H\leq G$.

#### Proof

Firstly, $H$ is nonempty so let $a\in H$
Then $aa^{-1}\in H$ so $e\in H$
Furthermore, for any $a\in H$ we have $ea^{-1}\in H$
so $a^{-1}\in H$
Finally, $\cdot|_{H\times H\to H}$ is a well defined function
as for any $a,b\in H$ we have $b^{-1}\in H$ thus $a(b^{-1})^{-1}\in H$
so $ab\in H$
[[Associativity]] is then inherited.
