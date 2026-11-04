Given two [[Category|Categories]] $\mathcal{C}$ and $\mathcal{D}$,
and two [[Functor|functors]] $\mathcal{C}\xrightarrow{F,G}\mathcal{D}$,
and a [[Natural Transformation]] $F\xrightarrow{\alpha}G$ between them,
and given a [[Morphism]] $A\xrightarrow{f}B$ between [[Object]]s $A$ and $B$
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

By the definition of [[Natural Transformation]],
this is always a [[Commutative Diagram]] i.e.

$$
(Gf)\alpha_{A} = \alpha_{B}(Ff)
$$
