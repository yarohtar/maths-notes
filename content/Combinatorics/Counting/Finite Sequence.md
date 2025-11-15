[[Combinatorics/Counting/Combinatorial Structure]] of finite sequences is defined by 
$$
\mathrm{Seq} = \sum_{k=0}^{\infty} X^{k}
$$
where $X$ is the [[Combinatorics/Counting/Combinatorial Structure]] of singletons:
$$
X(S) = \begin{cases}
\{ S \}  &  \lvert S \rvert =1 \\
\varnothing &  \text{otherwise}
\end{cases}
$$
When $A$ is a [[Combinatorics/Counting/Combinatorial Structure]], 
we may write $A^{*}$ for $\mathrm{Seq}\circ A$ [[Combinatorics/Counting/Combinatorial Composition]].
When $\mathcal{A}$ is an [[Combinatorics/Counting/Unlabelled Structure]],
we may write $\mathcal{A}^{*}$ for $\mathrm{Seq}(\mathcal{A})$ [[Combinatorics/Counting/Unlabelled Composition]].
### Lemma
[[Algebra/Ordinary Generating Function]] and [[Combinatorics/Counting/Exponential Generating Function]] are:
$$
f_{\mathrm{Seq}}(x) = \tilde{f}_{\mathrm{Seq}}(x) = \frac{1}{1-x}
$$
#### Proof 1
Both go well with [[Combinatorics/Counting/Combinatorial Union]] and [[Combinatorics/Counting/Combinatorial Product]]
and we have 
$$
f_{X}(x) = \tilde{f}_{X}(x) = x
$$
#### Proof 2
Each sequence is either empty or has a first element thus:
$$
\mathrm{Seq} = 1 + X \cdot \mathrm{Seq}
$$
