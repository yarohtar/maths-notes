Let $\mathcal{L}$ be the [[Foundations/First Order Logic/Language]] of set theory,
and $M$, $N$ be $\mathcal{L}$-[[Foundations/First Order Logic/Structure]]s
We say that a [[Foundations/Definable Operation]] $F:M^{n}\to M$ is absolute for $M$ 
if it's definable by $\Phi$ and $\Phi$ is [[Foundations/Absolute]] between $M$ and $N$
### Lemma
If $F$ and $G$ are absolute for $M$ then so is $F\circ G$. 
### Lemma
If $F$ is absolute and $\phi$ is [[Foundations/Absolute]] for a [[Foundations/Transitive Model]] $M$ of $ZFC$
then so are
$$
\exists x\in F(y)\,\phi(x)
$$
and
$$
\phi(F(x))
$$
#### Proof
First formula is equivalent to 
$$
\exists x\in z\, (\Phi(y,z) \land \phi)
$$
and $\Phi(y,z)\land \phi$ is [[Foundations/Absolute]], and $\exists x\in z$ is bounded, 
so we are good, as we are [[Foundations/Closed Under Bounded Quantification]].
The second formula is equivalent to 
$$
\exists y\,(\Phi(x,y)\land \phi(y))
$$
This is unbounded, but also equivalent to
$$
\forall y\,(\Phi(x,y)\implies \phi(y))
$$
and thus both of them are [[Foundations/Absolute]] by the $\Delta_{1}$-trick. 

## Theorem
Any arithmetic function is absolute.
### Proof
Using the previous lemmas and [[Foundations/Absoluteness Of Recursive Operations]].