Let $M_{1},M_{2},M_{3},N_{1},N_{2}\subseteq \mathbb{N}$ be finite sets of indices.
Let $a_{i}\in \mathbb{R}^{n}$ for $i\in M_{1}\cup M_{2}\cup M_{3}$
and let $b_{j}\in \mathbb{R}^{m}$ for $j\in N_{1}\cup N_{2}$
Finally let $c\in \mathbb{R}^{n}$ be a cost vector.
A linear program is an optimisation problem of the form:

" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to:
$a_i^Tx\leq b_i$ for $i\in M_1$
$a_i^Tx\geq b_i$ for $i\in M_2$
$a_i^Tx= b_i$ for $i\in M_3$
$x_j\geq 0$ for $j\in N_1$
$x_j\leq 0$ for $j\in N_2$ "

i.e. we are minimizing the linear function $c^{T}x$ 
over $x\in X$ 
for some $X\subseteq \mathbb{R}^{n}$ that's defined by some linear constraints.

There are other equivalent forms they can take:
[[Numerical/Forms of linear programs]]
## Lemma
Suppose $x\in X$ is optimal for an LP.
Then $x$ is a [[Numerical/Basic Feasible Solution]].
### Proof
[[Analysis/Maximum of a Convex Function]] is always at an [[Analysis/Extreme Point]] (of domain).
So minimum of a concave function is an [[Analysis/Extreme Point]].
Note that linear programs are both convex and concave.
So we need to find all [[Analysis/Extreme Point]]s and evaluate the function there.
We are done by [[Numerical/Basic Feasible Solution#Theorem]].
## Theorem
Suppose the set of feasible values $X$ is nonempty,
i.e. there is some $x\in \mathbb{R}^{n}$ satisfying the constraints.
Then there exists an algorithm that finds the optimal solution(s) to the linear problem,
and this algorithm always terminates.
### Proof
Consider a Linear program in the standard form:
" Minimize $c^Tx$ over $x\in \mathbb{R}^{n}$ subject to $Ax=b$ and $x\geq 0$ "
where $A\in \mathbb{R}^{m\times n}$, $c\in \mathbb{R}^{n}$ and $b\in \mathbb{R}^{m}$.

We may assume that rows of $A$ are [[Numerical/Linearly Independent]]
(due to existence of $x$ such that $Ax=b$, 
we can just remove some rows without changing the problem)

For a set $B\subseteq[n]$ we denote by $A_{B}$ the $m\times \lvert B \rvert$ submatrix of $A$
obtained by taking $i$-th columns of $A$ for $i\in B$.

Now onto the algorithm:
1. Let $B\subseteq[n]$ with $\lvert B \rvert=m$ (we have $\binom{ n }{ m }$ choices)
2. If $A_{B}$ is not invertible, choose the next $B$, 
   otherwise set $x_{B}=A_{B}^{-1}$ and $x_{i}=0$ for $i\not\in B$
3. Then $x_{B}$ is a [[Numerical/Basic Solution]] to $Ax=b$
4. If $x\geq 0$, then $x$ is a [[Numerical/Basic Feasible Solution]]
   and we note down $x$ with the associated cost $c^{T}x$
5. Go back to step 1. until we have tried all possible $B$, 
   otherwise proceed to
6. We filter out the minimums from our noted down values.

Note that we have necessarily gone through all [[Numerical/Basic Solution]]s
because each of them has some [[Numerical/Basis]].
