Let $F:\mathcal{B}\to \mathcal{B}_{R}$ and $G:\mathcal{B}\to \mathcal{B}_{R}$ be [[Combinatorics/Counting/Combinatorial Structure]]s.
We define their composition as:
$$
(G \circ F)(A) = \bigsqcup \Big\{ G\big(\{ \alpha_{1},\alpha_{2},\dots,\alpha_{k} \}\big) : S_{1}\sqcup S_{2}\sqcup\dots \sqcup S_{k} = A;
\, \alpha_{i}\in F(S_{i}) \Big\}
$$
with weight 
$$
w_{G\circ F} = w_{G} \cdot \prod_{i=1}^{k} w_{F}(\alpha_{i})
$$
Note that for this to be well defined, we need $F(\varnothing)=\varnothing$,
otherwise there is infinitely many partitions of $A$ which contribute.

The above construction is [[Foundations/Category Theory/Natural Isomorphism\|naturally isomorphic]] to 
$$
(G\circ F)(A) = \sum_{\pi \in P(A)} G(\pi) \times \prod_{B\in \pi} F(B)
$$
where $P(A)$ is the set of [[Combinatorics/Counting/Partition]]s of $A$.

### Remark
This is **not** the same as:
$$
\sum_{k} G[k] \times F^{k}
$$
See [[Combinatorics/Counting/Unlabelled Composition]].
Ironically, the allegedly unlabelled composition builds $G$-structures 
on ordered $k$-tuples of $F$-structures;
while the labelled composition builds $G$-structures on sets of $F$-structures.

