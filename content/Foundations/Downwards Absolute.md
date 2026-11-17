Let $M$ and $N$ be [[Foundations/First Order Logic/Structure]]s for a [[Language]] $\mathcal{L}$ such that $M\subseteq N$
Let $\phi$ be a formula in $n$ [[Free Variable]]s.
We say that $\phi$ is absolute between $M$ and $N$ if

$$
\forall x_{1},\dots,x_{n} \in M\quad %quad
M\models\phi(x_{1},\dots,x_{n}) \impliedby N\models\phi(x_{1},\dots,x_{n})
$$

where we use $M\models \phi$ to mean $\phi$ is [[Satisfied]] in $M$

### Lemma

Suppose formula $\phi$ is downwards absolute between $M$ and $N$.
Then $\psi=\forall y_{1}\dots \forall y_{k}\,\phi$ is downwards absolute.

#### Proof

Similar as in [[Upwards Absolute#Lemma]].
