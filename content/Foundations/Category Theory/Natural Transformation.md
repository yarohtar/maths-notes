Suppose we are given [[Functor|functors]] $\mathcal{C}\xrightarrow{F,G}\mathcal{D}$
A natural transformation $\alpha:F\to G$ is an operation
assigning each $A\in \operatorname{ob}\mathcal{C}$ a [[Morphism]] $FA\xrightarrow{\alpha_{A}}GA$ in $\mathcal{D}$
such that for each $A\xrightarrow{f}B$ in $\mathcal{C}$:

$$
(Gf)\alpha_{A} = \alpha_{B} (Ff)
$$

This is equivalent to a [[Commutative Diagram]]:

```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
FA \arrow[r,"Ff"] \arrow[d,"\alpha_{A}"] & FB\arrow[d,"\alpha_{B}"]\\
GA\arrow[r,"Gf"] & GB
\end{tikzcd}
\end{document}
```

This is called a [[Naturality Square]] for $\alpha$ at $f$.

Natural transformations are [[Morphism]]s in the [[Category of Functors]]

[[Natural Isomorphism]]
[[Equivalence]]

### Example

Let $\mathcal{C}$ be a category with only identity [[Morphism]]s.
A [[Functor]] $F:\mathcal{C}\to \mathcal{D}$ is just a sequence in $\operatorname{ob}\mathcal{D}$ indexed by $\operatorname{ob}\mathcal{C}$.
Given $F,G:\mathcal{C}\to \mathcal{D}$, a natural transformation between them
is any assignment $FC\xrightarrow{\alpha_{C}}GC$ for $C\in \operatorname{ob}C$.
If there are no [[Morphism]]s $FC\to GC$ for some $C$,
then there is no natural transformations.

### Example

Given [[Group Action]]s of a [[Group]] $G$ on $A$ and $B$,
a natural transformation between them is a $G$-[[Equivariant]]
A group action [[Functor]] is a functor $G\to \mathrm{Set}$
sending the only element of $G$ to the set $A$ that its acting on,
and sending each [[Morphism]] to a permutation of $A$.
Suppose $F_{A}:G\to \mathrm{Set}$ and $F_{B}:G\to \mathrm{Set}$ are such functors,
representing [[Group Action]]s of $G$ on sets $A$ and $B$ respectively.
A natural transformation is then just a map $\alpha:A\to B$
such that for any $g\in G$, we have a [[Commutative Diagram]]:

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

where $g.$ represents the [[Group Action]] in respective sets.
