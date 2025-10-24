A structure in a [[Foundations/First Order Logic/Language]] $L=L(\Omega,\Pi)$
(or $L$-structure) is a non-empty set $A$ together with:
- functions $\omega_{A}:A^{n}\to A$ for each operation symbol $\omega \in \Omega$
  where $n=\alpha(\omega)$ is the arity
- subsets $\phi_{A}\subseteq A^{n}$ for each predicate symbol $\phi \in \Pi$
  where again $n=\alpha(\phi)$ is the arity.

Alternatively, we can identify subsets $\phi_{A}$ with their indicator functions
$$
\phi_{A}:A^{n}\to \{ 0,1 \}
$$
#### Note 
If $\alpha(\omega)=0$ then $\omega$ is called a constant. 
Its interpretation in a structure is $\omega_{A}:A^{0}\to A$ i.e. an element $\omega_{A}\in A$
