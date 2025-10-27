A dual notion to the [[Foundations/Category Theory/Product]].
Let $A$ and $B$ be [[Foundations/Category Theory/Object]]s of a [[Foundations/Category Theory/Category]] $\mathcal{C}$.
Their coproduct consists of maps $\nu_{1}:A\to A+B$ and $\nu_{2}:B\to A+B$
such that for any $f_{1}:A\to X$ and $f_{2}:B\to X$ 
there is a unique $\tilde{f}:X\to A+B$ 
making the following a [[Foundations/Category Theory/Commutative Diagram]]
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
& X
\arrow[dd, "\tilde{f}"]
\\
\\
& A + B
\\
A
\arrow[ur, swap, "\nu_{1}"]
\arrow[uuur, "f_{1}"]
 & & 
 B
 \arrow[ul, "\nu_{2}"]
 \arrow[uuul, swap, "f_{2}"]

\end{tikzcd}
\end{document}
```
If $\mathcal{C}$ is [[Foundations/Category Theory/Locally Small]] we can have a [[Foundations/Category Theory/Functor]] $F:\mathcal{C}^{op}\to \mathrm{Set}$ defined by
$$
FC=\mathcal{C}(A,C) \times \mathcal{C}(B,C)
$$
If $F$ is [[Foundations/Category Theory/Representable]], with [[Foundations/Category Theory/Representation]] $(P,\alpha)$
then its [[Foundations/Category Theory/Universal Element]] is some $(\nu_{1},\nu_{2})$ 
where $\nu_{1}:A\to P$ and $\nu_{2}:B\to P$
and this is exactly the coproduct.

In the [[Foundations/Category Theory/Category of Sets]], the coproduct is the disjoint union
$$
A\sqcup B = (A\times \{ 0 \}) \cup (B\times \{ 1 \})
$$
together with maps $\nu_{1}(x) =(x,0)$ and $\nu_{2}(x)=(x,1)$.

