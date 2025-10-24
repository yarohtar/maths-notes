Suppose we are given [[Foundations/Category Theory/Functor\|functors]] $\mathcal{C}\xrightarrow{F,G}\mathcal{D}$
A natural transformation $\alpha:F\to G$ is an operation
assigning each $A\in \operatorname{ob}\mathcal{C}$ a [[Foundations/Category Theory/Morphism]] $FA\xrightarrow{\alpha_{A}}GA$ in $\mathcal{D}$ 
such that for each $A\xrightarrow{f}B$ in $\mathcal{C}$:
$$
(Gf)\alpha_{A} = \alpha_{B} (Ff)
$$
This is equivalent to a [[Foundations/Category Theory/Commutative Diagram]]:
```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
FA \arrow[r,"Ff"] \arrow[d,"\alpha_{A}"] & FB\arrow[d,"\alpha_{B}"]\\
GA\arrow[r,"Gf"] & GB
\end{tikzcd}
\end{document}
```
These are called [[Foundations/Category Theory/Naturality Square]] for $\alpha$ at $f$.

Natural transformations are [[Foundations/Category Theory/Morphism]]s in the [[Foundations/Category Theory/Category of Functors]]
[[Foundations/Category Theory/Equivalence]]
### Examples
Given permutation representations of $G$ on $A$ and $B$, 
a natural transformation between them is a $G$-[[Foundations/Category Theory/Equivariant]] 