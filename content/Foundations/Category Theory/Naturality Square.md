Given two [[Foundations/Category Theory/Category\|Categories]] $\mathcal{C}$ and $\mathcal{D}$,
and two [[Foundations/Category Theory/Functor\|functors]] $\mathcal{C}\xrightarrow{F,G}\mathcal{D}$,
and a [[Foundations/Category Theory/Natural Transformation]] $F\xrightarrow{\alpha}G$ between them,
and given a [[Foundations/Category Theory/Morphism]] $A\xrightarrow{f}B$ between [[Foundations/Category Theory/Object]]s $A$ and $B$
a naturality square of $\alpha$ at $f$ is:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
FA \arrow[r,"Ff"] \arrow[d,"\alpha_{A}"]
 & FB \arrow[d,"\alpha_{B}"] \\
GA \arrow[r,"Gf"]
 & GB
\end{tikzcd}
\end{document}
```
By the definition of [[Foundations/Category Theory/Natural Transformation]], 
this is always a [[Foundations/Category Theory/Commutative Diagram]] i.e.
$$
(Gf)\alpha_{A} = \alpha_{B}(Ff)
$$
