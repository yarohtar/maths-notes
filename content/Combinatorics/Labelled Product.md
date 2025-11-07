For [[Combinatorics/Combinatorial Structure\|Combinatorial Structure]]s $\mathcal{A}$ and $\mathcal{B}$, define the labelled product 
$$
\mathcal{A}*\mathcal{B}
$$
on $[n]$ by splitting $[n]$ as $S\cup T$
of size $i$ and $n-i$ 
and building $\mathcal{A}$ on $S$ and $\mathcal{B}$ on $T$ to form objects $(\alpha,\beta)$ of size $n$
with 
$$
v_{\mathcal{A}*\mathcal{B}}((\alpha,\beta)) = v_{A}(\alpha)v_{B}(\beta)
$$
Then the combined weight of objects of size $n$ is 
$$
\sum_{i=0}^{n} \binom{ n }{ i }a_{i} b_{n-i}
$$
so 
$$
\tilde{f}_{\mathcal{A}\times \mathcal{B}} = \sum_{n\geq 0} \left(  \sum_{i=0}^{n} \frac{ \binom{ n }{ i }a_{i}b_{i} }{ n! } x^{n} \right) = \tilde{f}_{\mathcal{A}}(x) \tilde{f}_{\mathcal{B}} (x)
$$
If $a_{0}=0$, $\mathcal{H}=\mathrm{Set}(A)$ by partitioning $[n]$ into an unordered unspecified number of elements subsets and building $\mathcal{A}$ on each, with $h_{0}=1$ from empty subset $\varepsilon$,
and 
$$
v(\{ \alpha_{1},\dots,\alpha_{k} \}) = \prod_{i=1}^{k} v(\alpha_{i}) 
$$
so 
$$
f_{\mathcal{A}} = \exp(f_{\mathcal{A}}(x))
$$
