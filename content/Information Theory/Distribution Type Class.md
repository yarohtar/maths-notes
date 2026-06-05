Let $P\in \mathcal{P}_{n}$ be a [[Information Theory/Distribution Type]] on finite alphabet $A$.
The type class $T(P)$ is defined as:
$$
T(P) = \{ x_{1}^{n}\in A^{n} : x_{1}^{n}\text{ has type }P \}
$$
i.e. the set of all strings which generate the same empirical distribution.
### Proposition
For any type $P$ on an alphabet of size $m$ we have: 
$$
(n+1)^{-m} 2^{nH(P)} \leq \lvert T(P) \rvert  \leq 2^{nH(P)}
$$
### Lemma
The most likely type class under $P^{n}$ is $T(P)$: 
$$
\max_{P'\in \mathcal{P}_{n}} P^{n}(T(P')) =P^{n}(T(P))
$$
### Proposition
For any [[Information Theory/Distribution Type]] $P\in \mathcal{P}_{n}$ over an alphabet $A$ of size $m$
and for any distribution $Q$ on $A$ we have: 
$$
(n+1)^{-m} 2^{-nD(P||Q)}\leq Q^{n}(T(P)) \leq 2^{-nD(P||Q)}
$$
