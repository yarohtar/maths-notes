Let $F^{n}$ be an [[Analysis/Inner Product Space]] (usually $F=\mathbb{R}$ or $F=\mathbb{C}$)
A matrix $A\in F^{n\times n}$ is said to be definite if one of the following:
- positive definite: $z^{\dagger}Az>0$
- positive semi-definite: $z^{\dagger}Az\geq 0$
- negative semi-definite: $z^{\dagger}Az\leq 0$
- negative definite: $z^{\dagger}Az<0$

holds for all $z\in F^{n}$.
Note that $z^{\dagger}$ is the element of the [[Algebra/Vector Spaces/Dual Vector Space]] 
corresponding to the [[Algebra/Vector Spaces/Linear]] map $(z,\cdot):F^{n}\to F$.
When $F=\mathbb{R}$ then $z^{\dagger}=z^{T}$.
When $F=\mathbb{C}$ then $z^{\dagger}=(z^{T})^{*}$.
We will write $A\succ_{F} 0$, $A\succeq_{F} 0$, $A\preceq_{F} 0$, and $A\prec_{F} 0$ respectively
and often drop $F$ if its clear where the matrix lives.

### Lemma
If $A\in \mathbb{C}^{n\times n}$ is definite, then $A$ is [[Analysis/Hilbert Space/Hermetian]]. 

### Lemma
If $A\in \mathbb{R}^{n\times n}$ is symmetric and definite, then $A$ is also definite in $\mathbb{C}$.

