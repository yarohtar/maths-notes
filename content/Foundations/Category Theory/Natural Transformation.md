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
ie $\alpha_{B}(Ff)=(Gf)\kappa_{B}$
These are called naturality squares for $\alpha$ at $f$
Natural transformations can be composed:
Given $\alpha$ and $\beta:G\to H$ the assignment $A\to \beta_{A}\alpha_{A}$ is a nat.trans. 
So for any two [[Foundations/Category Theory/Category\|categories]] $\mathcal{C}$ and $\mathcal{D}$ 
we have a [[Foundations/Category Theory/Category]] $[\mathcal{C},\mathcal{D}]$ of [[Foundations/Category Theory/Functor\|functors]] and natural transformations between them

