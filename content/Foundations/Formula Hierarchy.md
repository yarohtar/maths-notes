Let $\mathcal{L}_{\in}=\{ \in \}$ be the [[Language]] of set theory.
We define the following

### $\Delta_{0}$

The smallest class of formulae which

- contains all atomic formulae
- [[Closed Under Bounded Quantification]]
- Closed under $\land$, $\lor$, $\neg$, $\implies$

### $\Sigma_{1}$

A formula is $\Sigma_{1}$ if it is of the form

$$
\exists v_{1}\dots \exists v_{n} \, \phi
$$

for $\phi \in \Delta_{0}$

### $\Pi_{1}$

A formula is $\Pi_{1}$ if it is of the form

$$
\forall v_{1}\dots \forall v_{n} \,\phi
$$

for $\phi \in \Delta_{0}$

### $\Delta_{1}$

A formula is $\Delta_{1}$ if it is both $\Sigma_{1}$ and $\Pi_{1}$.

### Definition

If $T$ is any [[Theory]], and $S$ a class of formulae,
define $S^{T}$ to be the class of formulas that are equivalent in $T$
to a formula in $S$.

## Theorem

$\Delta_{0}^{T}$ formulas are [[Absolute]] for [[Transitive Model]]s of $T$.

#### Proof

By induction on the formula complexity in $\Delta_{0}$ we prove the statement for $\Delta_{0}$.
Note that the [[Transitive Model|Transitiveness]] comes into play
when dealing with bounded quantifiers.
It is then straightforward to extend the statement for $\Delta_{0}^{T}$.

## Corollary

$\Sigma_{1}^{T}$ formulas are [[Upwards Absolute]] for [[Transitive Model]]s of $T$,
while $\Pi_{1}^{T}$ are [[Downwards Absolute]].

## Corollary

$\Delta_{1}^{T}$ formulas are [[Absolute]] for [[Transitive Model]]s of $T$.
