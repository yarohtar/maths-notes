Let $A$ be a [[Combinatorics/Counting/Combinatorial Structure]].
We define 
$$
A_{\bullet} = X \times A'
$$
where $A'$ is the [[Combinatorics/Counting/Combinatorial Derivative]].
### Lemma
This is [[Foundations/Category Theory/Natural Isomorphism\|naturally isomorphic]] to 
$$
A_{\bullet}(S) = \{ (r, \alpha) : r\in S;\, \alpha \in A(S) \}
$$
#### Proof
As $A'(S)=A(S\cup \{ * \})$, and $X\times A'$ consists of $r\in S$ and $\alpha \in A(S\setminus \{ r \}\cup \{ * \})$
we can effectively replace $*$ with $r$.
More precisely, for any $S$ we can find a natural bijection 
$$
\sigma_{S} : \bigsqcup_{r\in S} A(S\setminus \{ r \}\cup \{ * \}) \to S\times A(S)
$$
defined by:
$$
\sigma_{S}(a) = \begin{cases}
(r,a)  &  a\in A(S\setminus \{ r \}) \\
(r,r)  & a=*\in A(S\setminus \{ r \}\cup \{ * \})
\end{cases}
$$
