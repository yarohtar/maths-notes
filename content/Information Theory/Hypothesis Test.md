Let $P$ and $Q$ be two distribution on discrete alphabet $A$
Suppose we have data $x_{1}^{n}\in A^{n}$ coming from either $P$ of $Q$

A hypothesis test is $B_{n}\subseteq A^{n}$ with interpretation that:
- if $x_{1}^{n}\in B_{n}$ we declare $P$
- otherwise, declare $Q$

We have two error probabilities:
$$
e_{1}^{(n)} = \mathbb{P}(\text{decl }P : X_{1}^{n}\simeq Q^{n})=Q^{n}(B_{n})
$$
$$
e_{2}^{(n)} = \mathbb{P}(\text{decl }Q : X_{1}^{n}\in P^{n}) = P^{n}(B_{n}^{C})
$$
[[Information Theory/Stein's Lemma]]
[[Information Theory/Neumann-Pearson Regions]]