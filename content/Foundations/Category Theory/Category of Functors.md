Let $\mathcal{C}$ and $\mathcal{D}$ be [[Foundations/Category Theory/Category\|categories]]
Then $[\mathcal{C},\mathcal{D}]$ is the [[Foundations/Category Theory/Category]] of [[Foundations/Category Theory/Functor]]s $\mathcal{C}\to \mathcal{D}$
and [[Foundations/Category Theory/Natural Transformation]]s between them.
## Theorem
The above definition is correct, i.e. $[\mathcal{C},\mathcal{D}]$ is always a [[Foundations/Category Theory/Category]]
### Proof
#### Composition
Given [[Foundations/Category Theory/Functor]]s $F,G,H:\mathcal{C}\to \mathcal{D}$
and [[Foundations/Category Theory/Natural Transformation]]s $\alpha:F\to G$ and $\beta:G\to H$
the composition between them $\beta \alpha:F\to H$ 
is given by sending $A\in \operatorname{ob}\mathcal{C}$ to $\beta_{A}\alpha_{A}\in \operatorname{mor}H$
For any [[Foundations/Category Theory/Morphism]] $f:A\to B$ in $\mathcal{C}$
the following is a [[Foundations/Category Theory/Commutative Diagram]]:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
FA \arrow[r,"Ff"] \arrow[d,"\alpha_{A}"]
 & FB \arrow[d,"\alpha_{B}"] \\
GA \arrow[r,"Gf"] \arrow[d,"\beta_{A}"]
 & GB \arrow[d, "\beta_{B}"] \\
 HA \arrow[r, "Hf"]
 & HB
\end{tikzcd}
\end{document}
```
which we obtained by combining [[Foundations/Category Theory/Naturality Square]]s of $\alpha$ and $\beta$ at $f$.
Thus
$$
(Hf)\beta_{A}\alpha_{A} = \beta_{B}\alpha_{B}(Ff)
$$
and hence $\beta\alpha$ is a [[Foundations/Category Theory/Natural Transformation]].
#### Identity
Given a [[Foundations/Category Theory/Functor]] $F:\mathcal{C}\to \mathcal{D}$
we have the identity [[Foundations/Category Theory/Natural Transformation]] $1_{F}$ 
sending each $A\in \operatorname{ob}\mathcal{C}$ to $1_{FA}\in \operatorname{mor}\mathcal{D}$ 
This clearly respects composition.
#### Associativity
Given [[Foundations/Category Theory/Functor]]s $F,G,H,I:\mathcal{C}\to \mathcal{D}$ 
and [[Foundations/Category Theory/Natural Transformation]]s
$$
F\xrightarrow{\alpha}G\xrightarrow{\beta}H\xrightarrow{\gamma}I
$$
for any object $A\in \operatorname{ob}\mathcal{C}$ we have:
$$
\gamma_{A}(\beta_{A}\alpha_{A})=(\gamma_{A}\beta_{A})\alpha_{A}
$$
by [[Foundations/Category Theory/Associativity]] of [[Foundations/Category Theory/Morphism]]s in $\mathcal{D}$.
Thus indeed:
$$
\gamma(\beta \alpha)=(\gamma \beta)\alpha
$$
