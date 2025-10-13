Let $X$ be a [[Foundations/Ordinals/Complete Poset]] and $f:X\to X$ be order-preserving. 
Then $f$ has a fixed point.
#### Proof
Let $S=\{ x\in X : x\leq f(x)\}$
Let $z=supS$
We show $f(z)=z$
For any $x\in S$ we have $x\leq z$
Then $x\leq f(x)\leq f(z)$ as $f$ is order-preserving
Thus $f(z)$ is an [[Foundations/Ordinals/Upper Bound]] for $S$ and so $z\leq f(z)$
It follows that $f(z)\leq f(f(z))$ and so $f(z)\in S$ and $f(z)\leq z$
