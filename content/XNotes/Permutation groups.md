### Unique factorisation
Each $\sigma\in S_n$ has a factorisation in $\sigma=\sigma_1\sigma_2\dots \sigma_k$ where $\sigma_i$ are disjoint cycles. This factorisation is unique up to permutations of $\sigma_i$.

### Unique sign
Each $\sigma\in S_n$ can be written as a product of transpositions (for example, by decomposing each cycle into a product of transpositions). Then there is a homomorphism $sgn:S_n\to \{\pm 1\}$  where $sgn(\sigma)=1$ if $\sigma$ can be written with an even number of transpositions, while $sgn(\sigma)=-1$ if it can't. 
This is well defined ... 
It induces an [[Algebra/Alternating groups\|alternating]] subgroup $A_n=\ker sgn$.

### Cycle type
If $\sigma=\sigma_1\dots \sigma_k$ where $\sigma_i$ has length $l_i$ and $l_i$ are WLOG decreasing, then the cycle type of $\sigma$ is $(l_1,l_2,\dots l_k)$. 
Each cycle type will give us a [[XNotes/Group actions#Action on itself\|conjugacy class]] of $S_n$. 