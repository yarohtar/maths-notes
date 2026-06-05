A commutative diagram is a diagram in the form of a directed graph, 
where each edge represents a [[Foundations/Category Theory/Morphism]],
and each node represents an [[Foundations/Category Theory/Object]]
such that for any nodes $x$ and $y$, and any walk between them, 
composing the morphisms on that walk always gives the same result.
Additionally, we assume that each node has the identity morphism on it, 
making any cycle in the graph an identity.
### Example
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r,"f_{1}"] \arrow[d,"g_{1}"]
 & B \arrow[d,"f_{2}"] \\
C \arrow[r,"g_{2}"]
 & D
\end{tikzcd}
\end{document}
```
This diagram is commutative if and only if
$$
f_{2}f_{1} = g_{2}g_{1}
$$
### Example
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[rr, "f"] 
&& B \arrow[dl, "g"]\\
& C \arrow[ul, "h"]
\end{tikzcd}
\end{document}
```
This diagram is commutative if and only if
$$
\begin{gather}
hgf = 1_{A} \\
fhg=1_{B} \\
gfh =1_{C}
\end{gather}
$$
