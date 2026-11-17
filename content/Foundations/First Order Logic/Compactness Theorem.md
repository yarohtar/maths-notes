Let $S$ be a first-order [[Theory]].
If every finite subset of $S$ has a [[Model]], then $S$ has a [[Model]].

#### Proof

If $S\models \bot$ then $S\vdash \bot$ by [[Adequacy Theorem]]
As proofs are finite, there's a finite $S'\subseteq S$ s.t. $S'\vdash \bot$.
Then by the [[Soundness Theorem]] $S'\models \bot$ i.e. $S'$ has no model.

### Corollary

Finite [[Group]]s cannot be axiomatized as a first-order [[Theory]].

#### Proof

Suppose $T$ is a [[Theory]] in some [[Language]] $L$
whose [[Model]]s are exactly the finite [[Group]]s.
Then let

$$
S=T\cup \{ \neg t_{1},\neg t_{2},\dots \}
$$

where

$$
t_{n}=(\exists x_{1})\dots(\exists x_{n})(\forall x)(x=x_{1}\lor\dots \lor x=x_{n})
$$

Any finite subset of $S$ has a model, e.g. the cyclic $C_{n}$ for $n$ sufficiently large
By compactness, $S$ has a [[Model]].
But then this model is infinite.

### Corollary

If a first order theory $T$ has arbitrarily large finite models,
then it has an infinite model.

#### Proof

Essentially the same.

### Corollary

[[The Upwards Löwenheim-Skolem Theorem]]
