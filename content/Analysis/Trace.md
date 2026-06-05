Let $M$ be a linear operator on a [[Analysis/Hilbert Space/Hilbert Space]] $\mathcal{H}$ 
Given its [[Analysis/Hilbert Space/Matrix]] $M_{ij}=(Me_{i},e_{j})$, we define
$$
\operatorname{Tr}(M) = \sum_{i}M_{ii}
$$
[[Analysis/Partial Trace]]
### Lemma
Trace is cyclic: 
$$
\operatorname{Tr}(A_{1}\dots A_{n}) = \operatorname{Tr}(A_{n} A_{1} \dots A_{n-1})
$$
### Proposition
Trace is invariant under change of basis.
#### Proof
Suppose we change the basis using [[Analysis/Unitary]] matrix $U$.
Then, as trace is cyclic, we have:
$$
\operatorname{Tr}(UMU^{*})=\operatorname{Tr}(U^{*}UM)=\operatorname{Tr}(M)
$$
### Lemma
Let $\ket{a},\,\ket{b}\in \mathcal{H}$. Then 
$$
\operatorname{Tr}(\ket{a} \bra{b} ) = \braket{ b | a } 
$$
