[[Notes/Convex optimisation]]
[[Notes/Lagrange multipliers]]
[[Notes/The Necessity Theorem]]
[[Notes/Duality (Optimisation)]]
[[Notes/Economist perspective]] (not important tbh)
[[Notes/Barrier method]]
[[Notes/Linear programs]]
[[Notes/Optimality conditions in LPs]]
[[Notes/Simplex method]]
[[Notes/Two-person Zero-sum Games]]
[[Notes/The Maximal Flow Problem]]
[[Notes/The Transportation Problem]]

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

[[Notes/Convex optimisation]] ($f$ is convex)
[[Notes/Lagrange multipliers]] (solving constrained problems)
[[Notes/Linear programs]] ($f$ is linear, $h$ is linear)
[[Notes/Simplex method]]