[[Numerical/Convex optimisation]]
[[Numerical/Barrier method]]
[[Numerical/Lagrange multipliers]]
[[Numerical/The Necessity Theorem]]
[[Numerical/Dual Problem]]
[[Numerical/Complimentary slackness]]
[[Numerical/Economist perspective]] (not important)
[[Numerical/Linear program]]
[[Numerical/Dual problem in linear programs]] (most important lemma)
[[Numerical/Optimality condition in Linear Programming]]
[[Numerical/Simplex method]]
[[Combinatorics/Two-person Zero-sum Games]]
[[Combinatorics/Graphs/The Maximal Flow Problem]]
[[Combinatorics/The Transportation Problem]]

# Main objective
Minimize functions $f:\mathbb{R}^n\rightarrow \mathbb{R}$
subject to $h(x)=b$ where $x \in X$

$f$ is objective function

"$h(x)=b$" is functional constraint
$x \in X$ regional constraint

If $x^*$ s.t. $f(x^*)\leq f(x)$ for all $x \in X(b)=\{x : h(x)=b, x \in X\}$
$x^*$ is called optimal
$f(x^*)$ is the optimal cost

$X(b)$ is called feasible set

If $X(b)$ is not empty then the problem is feasible

$h(x)\leq b$ is the same as $h(x)+s=b$ where $s\geq 0$

$x=(x_1,x_2\dots x_n)^T$, the coordinates of $x$ are called decision variables.
