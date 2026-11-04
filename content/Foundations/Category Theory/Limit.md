A limit for a [[Diagram]] $D:J\to \mathcal{C}$
is a [[Terminal]] object of the [[Cone]] $\operatorname{Cone}\mathcal{D}$ if it exists.

Dually we have a [[Colimit]].

### Example

Let $D:J\to \mathcal{C}$ be a [[Diagram]].
We have a functor $\Delta:\mathcal{C}\to[J,\mathcal{C}]$ sending $A$ to the constant [[Diagram]]
with vertices $A$ and edges $1_{A}$.
A [[Cone]] over $D$ with apex $A$ is a [[Natural Transformation]] $\Delta A\to D$
In fact $\operatorname{Cone}D$ is another name for the [[Comma Category]] $(\Delta\downarrow D)$

So $\mathcal{C}$ has limits for all diagrams of shape $J$
if and only if

$$
\Delta:\mathcal{C}\to[J,\mathcal{C}]
$$

has a right [[Adjunction|Adjoint]].
