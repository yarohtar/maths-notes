Suppose we are given [[Foundations/Category Theory/Functor\|functors]] $\mathcal{C}\xrightarrow{F,G}\mathcal{D}$
A natural transformation $\alpha:F\to G$ is an operation
assigning each $A\in \operatorname{ob}\mathcal{C}$ a morphism $FA\xrightarrow{\alpha_{A}}GA$ in $\mathcal{D}$ 
such that for each $A\xrightarrow{f}B$ in $\mathcal{C}$ 
we have a commutative diagram:
```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
FA \arrow[r,"Ff"] \arrow[d,"\alpha_{A}"] & FB\arrow[d,"\alpha_{B}"]\\
GA\arrow[r,"Gf"] & GB
\end{tikzcd}
\end{document}
```
i.e. $\alpha_{B}(Ff)=(Gf)\alpha_{A}$
These are called naturality squares for $\alpha$ at $f$
Natural transformations can be composed:
Given $\alpha$ and $\beta:G\to H$ the assignment $A\to \beta_{A}\alpha_{A}$ is a natural transformation.
[[Foundations/Category Theory/Category of Functors]]
[[Foundations/Category Theory/Equivalence]]
### Lemma
Let $F,G:\mathcal{C}\to \mathcal{D}$ be [[Foundations/Category Theory/Functor]]s
Let $\alpha:F\to G$ be a natural transformation between them.
Then $\alpha$ is an isomorphism in [[Foundations/Category Theory/Category of Functors]] $[\mathcal{C}, \mathcal{D}]$ 
if and only if 
each $\alpha_{A}$ is an isomorphism in $\mathcal{D}$
#### Proof
##### $\implies$
obvious since composition in $[\mathcal{C},\mathcal{D}]$ is pointwise
##### $\impliedby$
Suppose each $\alpha_{A}$ has an inverse $\beta_{A}$ 
We need to verify naturality of $\beta$
given $A\xrightarrow{f}B$ in $\mathcal{C}$, consider:
```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
GA 
\arrow[r,"Gf"] 
\arrow[d,shift left, "\beta_{A}"] 
& GB
\arrow[d,shift left, "\beta_{B}"]
\\
FA
\arrow[u,shift left,"\alpha_{A}"]
\arrow[r,"Ff"] 
& FB 
\arrow[u,shift left, "\alpha_{B}"]
\end{tikzcd}
\end{document}
```
We have 
$$
\beta_{B}(Gf)=\beta_{B}(Gf)\alpha_{A}\beta_{A}=\beta_{B}\alpha_{B}(Ff)\beta_{A}=(Ff)\beta_{A}
$$ 
### Examples
Given permrutation representations of $G$ on $A$ and $B$, 
a natural transformation between them is a $G$-[[Foundations/Category Theory/Equivariant]] 