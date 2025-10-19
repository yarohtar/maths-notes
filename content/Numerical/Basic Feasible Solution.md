Let $A$ be a $m\times n$ matrix and $b\in \mathbb{R}^{m}$
Let $x$ be a [[Numerical/Basic Solution]] to $Ax=b$.
We say that $x$ is a basic feasible solution if $x\geq 0$
i.e. $x_{i}>0$ for all $i\in B$ where $B$ is the [[Analysis/Support]] of $x$
## Theorem
Let $S$ be the convex set:
$$
\{ x\in \mathbb{R}^{n} : Ax = b, x\geq 0 \}
$$
A point $x\in S$ is an [[Analysis/Extreme Point]] of $S$
if and only if 
$x$ is a BFS.
### Proof
#### $\impliedby$
Let $x$ be a BFS with [[Analysis/Support]] $B_{x}$ and suppose 
$$
x=\lambda y + (1-\lambda)z
$$
where $\lambda \in(0,1)$ and $y,z\in S$ 
i.e. $y,z\geq 0$ and $Ay=Az=b=Ax$
Let $B_{y}$ and $B_{z}$ be [[Analysis/Support]]s of $y$ and $z$ respectively.
For all $i\not\in B$ we have $x_{i}=0$ and thus $y_{i}=z_{i}=0$
so $B_{y},B_{z}\subseteq B_{x}$
and thus both $y$ and $z$ are [[Numerical/Basic Solution]]s 
By the [[Numerical/Basic Solution#Lemma]]: $x=y=z$ 
and so $x$ is an [[Analysis/Extreme Point]] of $S$.
#### $\implies$
Suppose $x\in S$ is an [[Analysis/Extreme Point]] of $S$.
Let $B$ be the [[Analysis/Support]] of $x$.
Suppose $Aw=0$ for some vector $w\in \mathbb{R}^{n}$ with support $B'\subseteq B$
Then we can find small enough $\epsilon>0$ such that:
$$
y=x+\epsilon w\geq 0 \quad %quad
\text{and}\quad %quad
z=x-\epsilon w\geq 0
$$
(we can do this as $x_{i}=0\implies w_{i}=0$ by definition)
But now we have $x=0.5y+0.5z$ 
so by definition of [[Analysis/Extreme Point]] $x=y=z$
and thus $w=0$.
Hence we have proven that the columns of $A_{B}$ are [[Numerical/Linearly Independent]]
so $x$ is a [[Numerical/Basic Solution]] and $x\geq 0$ 
so $x$ is a BFS.
