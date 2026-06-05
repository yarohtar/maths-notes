Let $V$ be a [[Algebra/Vector Spaces/Vector Space]] over [[Algebra/Field]] $F$
The dual $V^{*}$ is $L(V,F)$, the space of all [[Algebra/Vector Spaces/Linear]] functions from $V$ to $F$
### Proposition
This is well defined
### Proposition
There is a natural injective homomorphism between $V$ and $V^{* *}$.
This is actually a [[Foundations/Category Theory/Natural Transformation]].
#### Proof
Let $v\in V$
Define a homomorphism $L(V,F)\to F$ 
by $\theta \to \theta(v)$ for all $\theta \in L(V,F)$
and denote this homomorphism by $\theta_{v}$

Then $v\to \theta_{v}$ is a homomorphism $L(V^{*},F)\to F$
Now just check injectivity.

### Proposition
When $V$ is finite dimensional, it is isomorphic to $V^{* *}$.
#### Proof
Use the natural injective homomorphism $\phi$
Now note that $\dim V=\dim V^{*}$ and $\dim V^{*}=\dim V^{* *}$
Thus $\dim V= \dim V^{* *}$ and, by picking a basis, we get that $\phi$ is surjective.
