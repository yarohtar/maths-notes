Let $A$ be an [[Foundations/Category Theory/Object]] of a [[Foundations/Category Theory/Locally Small]] [[Foundations/Category Theory/Category]] $\mathcal{C}$ 
and let $F:\mathcal{C}\to \mathrm{Set}$ be a [[Foundations/Category Theory/Functor]] to [[Foundations/Category Theory/Category of Sets]]
Then there is a bijection between
[[Foundations/Category Theory/Natural Transformation]]s $\mathcal{C}(A,\cdot)\to F$ (where $\mathcal{C}(A,\cdot)$ is [[Foundations/Category Theory/Hom-Functor]])
and elements of $FA$.
Moreover, the bijection is a [[Foundations/Category Theory/Natural Transformation]] in $A$ and $F$.
### Proof
Given $\alpha:\mathcal{C}(A,\cdot)\to F$ a [[Foundations/Category Theory/Natural Transformation]]
Note that $\mathcal{C}(A,A)\xrightarrow{\alpha_{A}}FA$
so define $\Phi(\alpha)=\alpha_{A}(1_{A})\in FA$
Given $x\in FA$ 
we define a [[Foundations/Category Theory/Natural Transformation]] $\Psi(x):\mathcal{C}(A,\cdot)\to F$ by
$$
\begin{align}
\Psi(x)_{B} : \mathcal{C}(A,B) & \to FB \\
(A\xrightarrow{f}B)  & \to(Ff)(x)
\end{align}
$$
To get naturality of $\Psi$ we need to show for any $f:B\to C$
$$
\Psi_{B}(x)\mathcal{C}(A,f) = (Ff) \Psi_{A}(x)
$$
i.e. for any $g\in \mathcal{C}(A,B)$:
$$
(F(gf))(x) = (Ff)(Fg)(x)
$$
which is follows from [[Foundations/Category Theory/Functor\|functoriality]] of $F$.
We know 
$$
\Phi\Psi(x) = \Psi(x)_{A}(1_{A}) = F(1_{A})(x)=x
$$
And for all $B$ and $f$ we have a [[Foundations/Category Theory/Commutative Diagram]]:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\mathcal{C}(A,A) \arrow[r,"\mathcal{C}(A{,}f)"] \arrow[d,"\alpha_{A}"]
 & \mathcal{C}(A,B) \arrow[d,"\alpha_{B}"] \\
FA \arrow[r,"Ff"]
 & FB
\end{tikzcd}
\end{document}
```
so we can calculate:
$$
\Psi(\Phi(\alpha))_{B}(A\xrightarrow{f}B)=(Ff)(\Phi(\alpha))=(Ff)\alpha_{A}(1_{A})=\alpha_{B}\mathcal{C}(A,f)(1_{A})=\alpha_{B}(f)
$$
i.e. 
$$
\Psi(\Phi(\alpha))=\alpha
$$
So $\Phi$ and $\Psi$ are inverse bijections.


