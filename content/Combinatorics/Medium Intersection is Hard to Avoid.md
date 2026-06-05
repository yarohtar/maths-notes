Let $\{ S_{1},\dots,S_{m} \}$ be a family of subsets of $[4p]$ of size $2p$ such that $\lvert S_{i}\cap S_{j} \rvert \neq p$ for $i\neq j$.
Then 
$$
m\leq \binom{ 4p }{ p }
$$
### Proof
Remove one set from each complement pair to find a subfamily of size $m'\geq \frac{m}{2}$
such that for any $i\neq j$ we have 
$$
\lvert S_{i}\cap S_{j} \rvert \not\in \{ 0,p,2p \}
$$
We apply [[Combinatorics/Frankl-Wilson Theorem]] with $L=\{ 1,2,\dots,p-1 \}$ and $k=2$ to find 
$$
m'\leq \sum_{i=0}^{p-1} \binom{ 4p }{ i }
$$
Since 
$$
\binom{ n }{ k-1 } = \frac{k}{n-k+1} \binom{ n }{ k } \leq \frac{1}{3} \binom{ n }{ k }
$$
for $k\leq \frac{n}{4}$, we deduce 
$$
m'\leq \sum_{i=0}^{p-1} \binom{ 4p }{ p } \left( \frac{1}{3} + \frac{1}{3^{2}} + \dots \right) = \frac{1}{2} \binom{ 4p }{ p }
$$
so we conclude 
$$
m\leq 2m' \leq \binom{ 4p }{ p }
$$
