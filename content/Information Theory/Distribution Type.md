Let $A$ be a finite alphabet and $\mathcal{P}$ a [[Information Theory/Probability Simplex]] on it.
Given a string $x_{1}^{n}\in A^{n}$, the empirical distribution it induces $\hat{P}_{n}\in \mathcal{P}$ is its type.
The set of all $n$-types is 
$$
\mathcal{P}_{n}=\{ P\in \mathcal{P} : nP(a)\in \mathbb{Z} \text{ for all }a \in A\} 
$$
### Proposition
Let $Q$ be a distribution on $A$.
Then for any $x_{1}^{n}\in A^{n}$:
$$
Q^{n}(x_{1}^{n}) = 2^{-n(H(\hat{P}_{n})+ D(\hat{P}_{n}||Q))}
$$
where $H$ is [[Information Theory/Mathematical Entropy]] and $D$ is [[Information Theory/Relative Entropy]].
