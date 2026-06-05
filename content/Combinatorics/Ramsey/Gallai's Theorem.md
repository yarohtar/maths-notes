Let $S\subseteq \mathbb{N}^{d}$ be finite and fix a $k$-colouring of $\mathbb{N}^{d}$.
Then there are some $a\in \mathbb{N}^{d}$ and $\lambda \in \mathbb{N}$ 
such that $a+\lambda S$ is monochromatic.
#### Proof
Let $S=\{ S_{1},\dots,S_{m} \}$.
Let $c$ be a $k$-colouring of $\mathbb{N}^{d}$.
Define a colouring of $[m]^{n}$ by 
$$
c'(x) = c\left( \sum_{i=1}^{n}S_{x_{i}} \right)
$$
By [[Combinatorics/Ramsey/The Hales-Jewett Theorem]], find a monochromatic line $L$ in $[m]^{n}$,
with active coordinates $I$.
Let $\lambda=\lvert I \rvert$ and $a=\sum_{i\not\in I}S_{L^{-}_{i}}$. 
The result follows.

