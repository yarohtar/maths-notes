Let $D:J\to \mathcal{C}$ be a [[Foundations/Category Theory/Diagram]].
A cone over $D$ consists of an [[Foundations/Category Theory/Object]] $A$ of $\mathcal{C}$ (apex)
together with [[Foundations/Category Theory/Morphism]]s $\lambda_{j}:A\to D(j)$ for all $j\in \operatorname{ob}J$ (legs)
satisfying $D(\alpha)\lambda_{j}=\lambda_{j'}$ for all $\alpha:j\to j'$ in $J$
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
& & A \arrow[ddrr] \arrow[ddr] \arrow[dd] \arrow[ddl]\arrow[ddll]\\
\\
\cdot & \cdot & \cdot & \cdot & \cdot
\end{tikzcd}
\end{document}
```
A morphism of cones $(A,\{ \lambda_{j}:j\in \operatorname{ob}J \})\to(B,\{ \mu_{j}:j\in \operatorname{ob}J \})$
is a morphism $f:A\to B$ (in $\mathcal{C}$) satisfying $\mu_{j}f=\lambda_{j}$ for all $j$ 
We write $\operatorname{Cone}(D)$ for the category of cones over $D$.
