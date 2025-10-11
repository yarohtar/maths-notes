$\operatorname{Tr}(\ket{a}\bra{b})=\braket{ b | a }$
and every operator can be expanded in this so that's how we define trace.

Alternatively, given [[XNotes/Matrix of a Linear Operator]] we define
$$
\operatorname{Tr}(M) = \sum_{i}M_{ii}
$$
### Proposition
Trace is invariant under change of basis.
#### Proof
Suppose we change the basis using [[XNotes/Unitary]] matrix $U$.
Then, as trace is cyclic, we have:
$$
\operatorname{Tr}(UMU^{*})=\operatorname{Tr}(U^{*}UM)=\operatorname{Tr}(M)
$$
