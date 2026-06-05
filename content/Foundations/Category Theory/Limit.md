A limit for a [[Foundations/Category Theory/Diagram]] $D:J\to \mathcal{C}$ 
is a [[Foundations/Category Theory/Terminal]] object of the [[Foundations/Category Theory/Cone]] $\operatorname{Cone}\mathcal{D}$ if it exists.

Dually we have a [[Foundations/Category Theory/Colimit]].

### Example
Let $D:J\to \mathcal{C}$ be a [[Foundations/Category Theory/Diagram]].
We have a functor $\Delta:\mathcal{C}\to[J,\mathcal{C}]$ sending $A$ to the constant [[Foundations/Category Theory/Diagram]]
with vertices $A$ and edges $1_{A}$.
A [[Foundations/Category Theory/Cone]] over $D$ with apex $A$ is a [[Foundations/Category Theory/Natural Transformation]] $\Delta A\to D$
In fact $\operatorname{Cone}D$ is another name for the [[Foundations/Category Theory/Comma Category]] $(\Delta\downarrow D)$ 

So $\mathcal{C}$ has limits for all diagrams of shape $J$
if and only if
$$
\Delta:\mathcal{C}\to[J,\mathcal{C}]
$$
has a right [[Foundations/Category Theory/Adjunction\|Adjoint]].

