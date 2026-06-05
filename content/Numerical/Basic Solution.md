Let $A$ be a $m\times n$ matrix and $b\in \mathbb{R}^{m}$
Let $x\in \mathbb{R}^{n}$ such that $Ax=b$
The [[Analysis/Support]] of $x$ is:
$$
S=\{ i\in[n] : x_{i}\neq 0 \}
$$
we say $x$ is a basic solution if the columns of $A_{S}$ are [[Numerical/Linearly Independent]]
where $A_{S}$ is a $m\times \lvert S \rvert$ submatrix of $A$, 
built by taking $i$-th column of $A$ iff $i\in S$

Note that by definition we have $\lvert S \rvert\leq m\leq n$.

### Proposition
Every [[Numerical/Basic Solution]] $x$ has a [[Numerical/Basis]] (or multiple) associated with it.

