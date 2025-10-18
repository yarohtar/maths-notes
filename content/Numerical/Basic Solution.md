Let $A$ be a $m\times n$ matrix and $b\in \mathbb{R}^{m}$
Let $x\in \mathbb{R}^{n}$ such that $Ax=b$
The [[Support]] of $x$ is:
$$
B=\{ i\in[n] : x_{i}\neq 0 \}
$$
we say $x$ is a basic solution if the columns of $A_{B}$ are [[Numerical/Linearly Independent]]
where $A_{B}$ is a $m\times \lvert B \rvert$ submatrix of $A$, 
built by taking $i$-th column of $A$ iff $i\in B$

Note that by definition we have $\lvert B \rvert\leq m\leq n$.
### Lemma
Let $x$ be a basic solution to $Ax=b$ with [[Support]] $B$
Let $y$ be a basic solution to $Ay=b$ with [[Support]] $B'\subseteq B$
Then $x=y$.
#### Proof
We only need to show that $x$ and $y$ match on the [[Support]] of $x$.
We denote these vectors by $x_{B}$ and $y_{B}$
Let $A_{B}$ be an $m\times \lvert B \rvert$ submatrix of $A$,
taking $i$-th columns of $A$ for each $i\in B$.
By definition, the columns of $A_{B}$ are [[Numerical/Linearly Independent]].
Thus choose $m$ [[Numerical/Linearly Independent]] rows of $A_{B}$ 
to build an invertible $\lvert B \rvert \times \lvert B \rvert$ matrix $A'$
Note that still:
$$
A'x_{B}=A'y_{B}
$$
and thus $x_{B}=y_{B}$, so we are done.