Let $\mathcal H$ be a vector space over $\mathbb C$ (or $\mathbb{R}$) 
equipped with an [[Analysis/Inner Product]] $(\cdot, \cdot):\mathcal H \times \mathcal H\to \mathbb C$ (or $\mathbb{R}$)
$\mathcal{H}$ is called a Hilbert space if it is [[Analysis/Complete Metric Space]]

[[Analysis/Closest Point Theorem]]
[[Analysis/Orthogonal Subspaces]]
[[Analysis/Riesz Representation Theorem]]
[[Analysis/Riesz-Fischer Theorem]]
[[Analysis/Bessel's Inequality]]
[[Analysis/Parseval's Identity]]
[[Analysis/Linear Operators in Hilbert Spaces]]
### Theorem
Let $\mathcal{H}$ be a Hilbert space and $(e_{n})$ an [[Analysis/Orthonormal Basis]] in $\mathcal{H}$
Then for all $x\in \mathcal{H}$:
$$
x=\sum_{n=1}^{\infty}(x,e_{n})e_{n}
$$




## Physical interpretation
Each vector represents a physical space.
Scaling a vector by a complex number represents the same physical state (states correspond to rays in $\mathcal H$) -> useful to work with normalized states
For normalized states, the inner product $(\phi, \psi)$ is the probability amplitude to transition from $\phi$ to $\psi$

We will usually use either a finite dimensional $\mathcal{H}$ (those will usually be our toy models) or an infinite dimensional space of sequences in $\mathbb{C}$ (which converge in $l_{2}$ ([[Analysis/L norms]]))

Note that any separable Hilbert space is isometrically isomorphic to $l_{2}$ by [[Analysis/Parseval's Identity]].
