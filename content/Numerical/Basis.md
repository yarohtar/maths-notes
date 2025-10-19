Let $A$ be an $\mathbb{R}^{m\times n}$ matrix.
A basis of $A$ is a set $B\subseteq[n]$ such that 
- $\lvert B \rvert=m$
- $A_{B}$ is invertible
where $A_{B}$ is the $m\times m$ submatrix of $A$ 
formed by taking $i$-th column of  when $i\in B$.

Let $x\in \mathbb{R}^{n}$ be a vector with [[Analysis/Support]] $S$
We say that $x$ has basis $B$ if $S\subseteq B$
## Lemma
Let $B$ be a [[Numerical/Basis]] of $A$ and let $b\in \mathbb{R}^{m}$
Then there exists a unique [[Numerical/Basic Solution]] $x\in \mathbb{R}^{n}$ with basis $B$ to:
$$
Ax=b
$$
### Proof
Define $x$ by $x_{B}=A_{B}^{-1}b$ and $x_{i}=0$ for $i\not\in B$.
This is a [[Numerical/Basic Solution]] and unique by construction.
## Lemma
Suppose $A\in \mathbb{R}^{m\times n}$ has rank $m$ (i.e. all its rows are [[Numerical/Linearly Independent]])
Then for any [[Numerical/Basic Solution]] $x$, there exists a basis.
### Proof
Suppose [[Numerical/Basic Solution]] $x$ has [[Analysis/Support]] $S$. 
Columns of $A_{S}$ are [[Numerical/Linearly Independent]] by definition, so $\lvert S \rvert\leq m$
Let $V_{A}$ be the space spanned by the columns of $A$.
It has dimension $m$ (due to rank of $A$ being $m$)
If the columns of $A_{S}$ span $V_{A}$, then $\lvert S \rvert\geq m$ and thus $\lvert S \rvert=m$
so $S$ is a [[Numerical/Basis]] of $x$

If the columns of $A_{S}$ do not span $V_{A}$
then pick a column of $A$ not in $\operatorname{span}A_{S}$ with index $i$
and form the set $S\cup \{ i \}$
Repeat this process until we arrive at a [[Numerical/Basis]].

