Let $F:\mathcal{B}\to \mathcal{B}_{R}$ be a [[Combinatorics/Counting/Combinatorial Structure]].
For each $S\in \mathcal{B}$ define an equivalence relation $\sim$ on $F(S)$ by:
$$
a\sim b \iff F(\sigma)(a) = b
$$
for some bijective $\sigma:S\to S$.
This defines a new structure:
$$
\mathcal{F}(S) = \{ [a]_{\sim} : a\in F(S) \}
$$
with weight 
$$
w_{\mathcal{F}}([a]) = w_{F}(a)
$$
Note that the weight $w_{F}:F(S)\to R$ satisfies
$$
a\sim b \implies w_{F}(a) = w_{F}(b)
$$
so this is well defined.

We shall write $F_{n}=\mathcal{F}[n]$.
Each unlabelled structure has an associated [[Algebra/Ordinary Generating Function]]
