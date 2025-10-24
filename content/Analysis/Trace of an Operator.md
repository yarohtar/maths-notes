Let $M$ be a linear operator on [[Analysis/Hilbert Space/Hilbert Space]] $\mathcal{H}$ 
Given a [[Analysis/Hilbert Space/Matrix of a Linear Operator]] $M_{ij}=(Me_{i},e_{j})$, we define
$$
\operatorname{Tr}(M) = \sum_{i}M_{ii}
$$
Alternatively
For two vectors $\ket{a}\in \mathcal{H}$ and $\bra{b} \in \mathcal{H}^{*}$, define:
$$
\operatorname{Tr}(\ket{a}\bra{b})=\braket{ b | a }
$$
and every operator can be expanded in this form,
so define trace to be the linear combination.
### Proposition
Trace is invariant under change of basis.
#### Proof
Suppose we change the basis using [[Analysis/Unitary]] matrix $U$.
Then, as trace is cyclic, we have:
$$
\operatorname{Tr}(UMU^{*})=\operatorname{Tr}(U^{*}UM)=\operatorname{Tr}(M)
$$
