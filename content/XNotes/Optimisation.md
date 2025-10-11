[[Numerical/Convex optimisation]]
[[XNotes/Lagrange multipliers]]
[[XNotes/The Necessity Theorem]]
[[Numerical/Duality (Optimisation)]]
[[XNotes/Economist perspective]] (not important tbh)
[[Numerical/Barrier method]]
[[XNotes/Linear programs]]
[[XNotes/Optimality conditions in LPs]]
[[XNotes/Simplex method]]
[[XNotes/Two-person Zero-sum Games]]
[[XNotes/The Maximal Flow Problem]]
[[XNotes/The Transportation Problem]]

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

[[Numerical/Convex optimisation]] ($f$ is convex)
[[XNotes/Lagrange multipliers]] (solving constrained problems)
[[XNotes/Linear programs]] ($f$ is linear, $h$ is linear)
[[XNotes/Simplex method]]