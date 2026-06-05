Let $T$ be the [[Combinatorics/Counting/Combinatorial Structure]] of [[Combinatorics/Graphs/Tree]]s.
Let $f(x)=\tilde{f}_{T_{\bullet}}(x)$ be the [[Combinatorics/Counting/Exponential Generating Function]] for rooted trees.
Let $g(x)=\tilde{f}_{(T_{\bullet})_{\bullet}}(x)$ be the [[Combinatorics/Counting/Exponential Generating Function]] for doubly rooted trees.
Let $A$ be the [[Combinatorics/Counting/Combinatorial Structure]] of maps:
$$
A(S) = \{ s:S\to S \}
$$
### Lemma
$$
f(x) = xe^{f(x)}
$$
#### Proof
Note that 
$$
T_{\bullet} = X \times \mathrm{Set}(T_{\bullet})
$$
as we can pick one vertex $r$ to be the root;
then build rooted trees on other vertices;
and finally connect $r$ to the roots of the trees in $\mathrm{Set}(T_{\bullet})$.
As $f_{\mathrm{Set}}=\exp$ we conclude 
$$
f(x) = x \exp(f(x))
$$
### Lemma
$$
\tilde{f}_{A}(x) = g(x) = f(x) + f(x)^{2} + \dots
$$
#### Proof
For any $k\geq 1$, build the [[Combinatorics/Counting/Combinatorial Product]]
$$
\underbrace{T_{\bullet}\times\dots \times T_{\bullet}}_{k\text{ times}}
$$
and then connect their roots in order.
We now view just the endpoints as being the roots.
Also, in any doubly rooted tree, 
the distance between the two roots is some $k\geq 1$ (edges).
Thus we conclude 
$$
g(x) = f(x) + f(x) ^{2} + \dots
$$

Let $s:[n]\to[n]$ be a map.
It will have $k$ periodic points (such that $s(s(\dots s(x)\dots))=x$)
and $n-k$ wandering points (not periodic).
We can thus build $k$ rooted trees from $s$
with edges defined by:
$$
a \sim b \iff \begin{array}{c}
s(a)=b \text{ and }a \text{ is wandering}\\
\text{or}\\
s(b)=a \text{ and } b \text{ is wandering}
\end{array}
$$
where each tree is rooted at the periodic point.
We order these trees by how $s$ permutes the $k$ periodic points.
We conclude that maps $[n]\to[n]$ with $k$ periodic points are in bijection with
$$
\underbrace{T_{\bullet}\times\dots \times T_{\bullet}}_{k\text{ times}}
$$
Also it is easy to see that every map has at least one periodic point.
We conclude 
$$
\tilde{f}_{A}(x) = f(x) + f(x)^{2} + \dots
$$
### Theorem
There are $n^{n-2}$ trees on $[n]$.
#### Proof
Note that 
$$
\tilde{f}_{A}(x) = \sum_{n} \frac{n^{n}}{n!} x^{n}
$$
Thus the number of doubly rooted trees on $[n]$ is $n^{n}$ (by the lemma)
However, double rooting is just $n^{2}$ times the number of trees,
so the number of trees on $[n]$ has to be $n^{n-2}$

