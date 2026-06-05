Let $F:\mathcal{B}\to \mathcal{B}_{R}$ and $G:\mathcal{B}\to \mathcal{B}_{R}$ be [[Combinatorics/Counting/Combinatorial Structure]]s.
We define their product as:
$$
(F \times G)(A) = \sum_{B \sqcup C=A} F(B) \times G(C)
$$
with weight 
$$
w_{F\times G} = w_{F} \cdot w_{G}
$$
### Lemma
Let $F$ and $G$ be [[Combinatorics/Counting/Combinatorial Structure]]s.
Then the [[Combinatorics/Counting/Exponential Generating Function]] satisfies:
$$
\tilde{f}_{F\times G} = \tilde{f}_{F} \cdot \tilde{f}_{G}
$$
#### Proof
Let 
$$
\begin{gather}
\tilde{f}_{F}(x) = \sum_{n} \frac{a_{n}}{n!} x^{n} \\
\tilde{f}_{G}(x) = \sum_{n} \frac{b_{n}}{n!} x^{n}
\end{gather}
$$
Then the combined weight of objects of size $n$ in $F\times G$ is 
$$
\sum_{i=0}^{n} \binom{ n }{ i } a_{i} b_{n-i}
$$
Thus 
$$
\tilde{f}_{F\times G}(x) = \sum_{n}\left( \sum_{i=0}^{n} \frac{ a_{i} b_{n-i} }{ i!(n-i)! } \right)x^{n} 
$$
which matches the product in the [[Algebra/Formal Power Series]] [[Algebra/Ring Theory/Ring\|Ring]] so:
$$
\tilde{f}_{F\times G} = \tilde{f}_{F} \cdot \tilde{f}_{G}
$$
### Lemma
Let $\mathcal{F}$ and $\mathcal{G}$ be [[Combinatorics/Counting/Unlabelled Structure]]s.
Then the [[Algebra/Ordinary Generating Function]] satisfies:
$$
f_{\mathcal{F}\times \mathcal{G}} = f_{\mathcal{F}} \cdot f_{\mathcal{G}}
$$
#### Proof
The combined weight of objects of size $n$ in $\mathcal{F}\times \mathcal{G}$ is: 
$$
\sum_{i=0}^{n} a_{i} b_{n-i}
$$
and thus the result follows.
