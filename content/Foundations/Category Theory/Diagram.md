Let $J$ be a [[Foundations/Category Theory/Category]] (almost always [[Foundations/Category Theory/Small Category]], often finite).
A diagram of shape $J$ in $\mathcal{C}$ is a functor $D:J\to \mathcal{C}$.
The [[Foundations/Category Theory/Object]]s $D(j)$ for $j\in \operatorname{ob}J$ are called vertices of $D$,
and the morphisms $D(\alpha)$ for $\alpha \in \operatorname{mor}J$ are called edges of $D$.

### Example
If $J$ is the [[Foundations/Category Theory/Category]] 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
 \cdot \arrow[r] \arrow[d] \arrow[dr]
 & \cdot \arrow[d] \\
 \cdot\arrow[r]
 & \cdot
\end{tikzcd}
\end{document}
```
a diagram of shape $J$ is a commutative square.

If $J$ is 
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
 \cdot \arrow[r] \arrow[d] \arrow[dr,shift left] \arrow[dr, shift right]
 & \cdot \arrow[d] \\
 \cdot\arrow[r]
 & \cdot
\end{tikzcd}
\end{document}
```
a diagram of shape $J$ is a not-necessarily-commutative square.

