Let $T$ be an $\mathcal{L}$-[[Theory]] with no finite [[Model]]s.
Suppose there is some $\kappa\geq \lvert \mathcal{L} \rvert +\aleph_{0}$ such that:
any two models of $T$ with cardinality $\kappa$ are [[Elementary Equivalent Structures|Elementary Equivalent]]
Then $T$ is a [[Complete Theory]].

### Proof

Assume for contradiction that $T$ is not complete.
Then there is a sentence $\varphi$ such that $T\cup \{ \varphi \}$ and $T\cup \{ \neg \varphi \}$ are consistent.
Because $T$ has no finite models,
there are infinite models $\mathcal{M}_{1}$ and $\mathcal{M}_{2}$ of $T\cup \{ \varphi \}$ and $T\cup \{ \neg \varphi \}$ respectively.
By [[The Löwenheim-Skolem Theorems]], these theories have models of size $\kappa$.
But then they are [[Elementary Equivalent Structures|Elementary Equivalent]] which is a contradiction.
