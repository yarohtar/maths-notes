Let $M$ be a [[Analysis/Metric space]] with distance function $d$
We say that a sequence $x_{n}$ in $M$ is Cauchy if
for every $\epsilon>0$ there is some $N\in \mathbb{N}$ such that 
for all $n,m>N$:
$$
d(x_{n},x_{m}) < \epsilon
$$
### Lemma
Every [[Analysis/Convergence\|convergent]] sequence is Cauchy.
### Lemma
Every Cauchy sequence is [[Analysis/Bounded]].

## Theorem
A real sequence $x_n\in \mathbb{R}$ is convergent 
if and only if
$x_{n}$ is Cauchy.
This easily extends to sequences in $\mathbb{R}^{n}$
### Proof
We only need to show one direction.
Assume $x_{n}$ is Cauchy.
Because $x_{n}$ is [[Analysis/Bounded]], we can use [[Analysis/Boltzano-Weierstrass Theorem]]
to find some $S\subseteq \mathbb{N}$ and $\{ x_{n} \}_{n\in S}$ that converges.
But then by the Cauchy condition, we can find that $\{ x_{n} \}_{n\in \mathbb{N}}$ converges.