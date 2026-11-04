Let $Y$ be a [[Game Tree]] with [[Game Space]] $\mathcal{F}(Y)$.
Let $\mathcal{G}(A,Y)$ be a [[Two Person Infinite Game of Perfect Information|Game]].
Define sets

$$
\begin{gather}
Y^{\text{I}} = \{ y\in Y: y\text{ has even length} \} \\
Y^{\text{II}}=\{ y\in Y:y \text{ has odd length} \}
\end{gather}
$$

A `I`-strategy is a [[Function]] $s$ with domain $Y^{\text{I}}$
such that for any $p\in Y^{\text{I}}$, we have $(p,s(p))\in Y^{\text{II}}$.
Similarly, a `II`-strategy is a [[Function]] $t$ with domain $Y^{\text{II}}$
such that for any $q\in Y^{\text{II}}$ we have $(q,t(q))\in Y^{\text{I}}$.
