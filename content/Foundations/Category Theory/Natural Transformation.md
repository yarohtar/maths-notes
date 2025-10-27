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
This is called a [[Foundations/Category Theory/Naturality Square]] for $\alpha$ at $f$.

Natural transformations are [[Foundations/Category Theory/Morphism]]s in the [[Foundations/Category Theory/Category of Functors]]

[[Foundations/Category Theory/Natural Isomorphism]]
[[Foundations/Category Theory/Equivalence]]
### Example
Let $\mathcal{C}$ be a category with only identity [[Foundations/Category Theory/Morphism]]s.
A [[Foundations/Category Theory/Functor]] $F:\mathcal{C}\to \mathcal{D}$ is just a sequence in $\operatorname{ob}\mathcal{D}$ indexed by $\operatorname{ob}\mathcal{C}$.
Given $F,G:\mathcal{C}\to \mathcal{D}$, a natural transformation between them 
is any assignment $FC\xrightarrow{\alpha_{C}}GC$ for $C\in \operatorname{ob}C$.
If there are no [[Foundations/Category Theory/Morphism]]s $FC\to GC$ for some $C$, 
then there is no natural transformations.
### Example
Given [[Algebra/Group Theory/Group Action]]s of a [[Algebra/Group Theory/Group]] $G$ on $A$ and $B$, 
a natural transformation between them is a $G$-[[Foundations/Category Theory/Equivariant]] 
A group action [[Foundations/Category Theory/Functor]] is a functor $G\to \mathrm{Set}$ 
sending the only element of $G$ to the set $A$ that its acting on,
and sending each [[Foundations/Category Theory/Morphism]] to a permutation of $A$.
Suppose $F_{A}:G\to \mathrm{Set}$ and $F_{B}:G\to \mathrm{Set}$ are such functors,
representing [[Algebra/Group Theory/Group Action]]s of $G$ on sets $A$ and $B$ respectively.
A natural transformation is then just a map $\alpha:A\to B$
such that for any $g\in G$, we have a [[Foundations/Category Theory/Commutative Diagram]]:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r,"F_{A}g"] \arrow[d,"\alpha"]
 & A \arrow[d,"\alpha"] \\
B \arrow[r,"F_{B}g"]
 & B
\end{tikzcd}
\end{document}
```
i.e. for any $a\in A$:
$$
g.\alpha(a) = \alpha(g.a)
$$
where $g.$ represents the [[Algebra/Group Theory/Group Action]] in respective sets.

