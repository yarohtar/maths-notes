Let $\mathcal{C}$ be a [[Foundations/Category Theory/Category]].
An [[Foundations/Category Theory/Object]] $I$ is initial if there is exactly one [[Foundations/Category Theory/Morphism]] $I\to A$ for any $A\in \operatorname{ob}\mathcal{C}$

### Lemma
If $I$ and $I'$ are initial, there is a unique [[Foundations/Category Theory/Isomorphism]] between them.
#### Proof
There's a unique $f:I\to I'$ and a unique $f':I'\to I$
But $1_{I}:I\to I$ and $1_{I'}:I'\to I'$ are also unique so
$$
ff'=1_{I'}
$$
and
$$
f'f=1_{I}
$$
and thus $f$ is the unique [[Foundations/Category Theory/Isomorphism]].
