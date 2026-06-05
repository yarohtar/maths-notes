Let $M$ and $N$ be [[Foundations/First Order Logic/Structure]]s for a [[Foundations/First Order Logic/Language]] $\mathcal{L}$ such that $M\subseteq N$
Let $\phi$ be a formula in $n$ [[Foundations/First Order Logic/Free Variable]]s.
We say that $\phi$ is upwards absolute between $M$ and $N$ if 
$$
\forall x_{1},\dots,x_{n} \in M\quad %quad
M\models\phi(x_{1},\dots,x_{n}) \implies N\models\phi(x_{1},\dots,x_{n})
$$
where we use $M\models \phi$ to mean $\phi$ is [[Foundations/First Order Logic/Satisfied]] in $M$

### Lemma
Suppose formula $\phi$ is upwards absolute between $M$ and $N$,
and let $y_{1},\dots,y_{k}$ be among the [[Foundations/First Order Logic/Free Variable]]s of $\phi$.
Then $\psi=\exists y_{1}\dots \exists y_{k}\,\phi$ is upwards absolute.
#### Proof
The formula $\psi$ has $n-k$ [[Foundations/First Order Logic/Free Variable]]s.
Suppose that for some $x_{1},\dots,x_{n-k}\in M$:
$$
M\models \psi(x_{1},\dots,x_{n-k})
$$
i.e. there are some $y_{1},\dots,y_{k}\in M$ such that 
$$
M\models \phi(x_{1},\dots,x_{n-k},y_{1},\dots,y_{k})
$$
By assumption, $\phi$ is upwards absolute so:
$$
N\models \phi(x_{1},\dots,x_{n-k},y_{1},\dots,y_{k})
$$
so indeed
$$
N\models \exists y_{1}\dots \exists y_{k}\, \phi(x_{1},\dots,x_{n-k})
$$
