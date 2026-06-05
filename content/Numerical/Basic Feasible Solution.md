Let $A$ be a $m\times n$ matrix and $b\in \mathbb{R}^{m}$
Let $x$ be a [[Numerical/Basic Solution]] to $Ax=b$.
We say that $x$ is a basic feasible solution if $x\geq 0$
i.e. $x_{i}>0$ for all $i\in S$ where $S$ is the [[Analysis/Support]] of $x$
## Theorem
Let $K$ be the convex set:
$$
K=\{ x\in \mathbb{R}^{n} : Ax = b, x\geq 0 \}
$$
where $A\in \mathbb{R}^{m\times n}$ has rank $m$.
A point $x\in K$ is an [[Analysis/Extreme Point]] of $K$
if and only if 
$x$ is a [[Numerical/Basic Feasible Solution]].
### Proof
#### $\impliedby$
Let $x$ be a BFS with [[Analysis/Support]] $S_{x}$ and [[Numerical/Basis]] $B$.
Suppose:
$$
x=\lambda y + (1-\lambda)z
$$
where $\lambda \in(0,1)$ and $y,z\in S$ 
i.e. $y,z\geq 0$ and $Ay=Az=b=Ax$
Let $S_{y}$ and $S_{z}$ be [[Analysis/Support]]s of $y$ and $z$ respectively.
For all $i\not\in S_{x}$ we have $x_{i}=0$ and thus $y_{i}=z_{i}=0$
so $S_{y},S_{z}\subseteq S_{x}\subseteq B$
and thus both $y$ and $z$ are [[Numerical/Basic Solution]]s with [[Numerical/Basis]] $B$.
They are thus unique and $x=y=z$
so $x$ is an [[Analysis/Extreme Point]] of $K$.
#### $\implies$
Suppose $x\in K$ is an [[Analysis/Extreme Point]] of $K$.
Let $S$ be the [[Analysis/Support]] of $x$.
Suppose $Aw=0$ for some vector $w\in \mathbb{R}^{n}$ with support $S'\subseteq S$
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
Hence we have proven that the columns of $A_{S}$ are [[Numerical/Linearly Independent]]
so $x$ is a [[Numerical/Basic Solution]] and $x\geq 0$ 
so $x$ is a BFS.
