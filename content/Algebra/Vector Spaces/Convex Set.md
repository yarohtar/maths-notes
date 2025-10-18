Let $V$ be a [[Algebra/Vector Spaces/Vector Space]] over a [[Algebra/Field]] $F$ containing $\mathbb{R}$ 
(e.g. $F=\mathbb{R}$ or $F=\mathbb{C}$)
A set $S\subseteq V$ is said to be convex if 
for all $x,y \in S$ and for all $\lambda \in [0,1]$:
$$
(1-\lambda)x+\lambda y \in S
$$
[[Algebra/Vector Spaces/Convex Hull]]
### Lemma
Let $S\subseteq V$ be convex.
Let $u_{1},u_{2},\dots,u_{n}\in S$ and $\lambda_{1},\dots,\lambda_{n}\geq 0$ with
$$
\lambda_{1}+\dots+\lambda_{n} = 1
$$
Then the [[Numerical/Linear Combination]]
$$
u = \lambda_{1}u_{1} + \dots + \lambda_{n}u_{n}
$$
is also $u\in S$.