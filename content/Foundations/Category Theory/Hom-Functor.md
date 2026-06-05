Let $\mathcal{C}$ be [[Foundations/Category Theory/Locally Small]].
We define the [[Foundations/Category Theory/Covariant]] hom-functor to be:
$$
\mathcal{C}(A,-):\mathcal{C}\to \mathrm{Set}
$$
We send each object $B\in\operatorname{ob}\mathcal{C}$ to the [[Foundations/Category Theory/Hom-Set]] $\mathcal{C}(A,B)$
We send each morphism $g:B\to C$ to a function
$$
\mathcal{C}(A,g):\mathcal{C}(A,B) \to \mathcal{C}(A,C)
$$
defined by 
$$
\mathcal{C}(A,g)(h)=gh
$$

Similarly, the [[Foundations/Category Theory/Contravariant]] hom-functor 
$$
\mathcal{C}(-,B):\mathcal{C}\to \mathrm{Set}
$$
sends $A$ to $\mathcal{C}(A,B)$ 
and $g:C\to A$ to the map $\mathcal{C}(g,B):\mathcal{C}(A,B)\to \mathcal{C}(C,B)$
given by
$$
\mathcal{C}(g,B)(h) = hg
$$
### Lemma
The [[Foundations/Category Theory/Covariant]] hom-functor $\mathcal{C}(A,-)$ is a [[Foundations/Category Theory/Functor]].
Similarly, the [[Foundations/Category Theory/Contravariant]] hom-functor $\mathcal{C}(-,B)$ is a [[Foundations/Category Theory/Contravariant]] [[Foundations/Category Theory/Functor]].
### Proof
[[Foundations/Category Theory/Functor]]iality follows from the [[Foundations/Category Theory/Associativity]] law in $\mathcal{C}$
### Lemma
Let $f:A\to B$ be a [[Foundations/Category Theory/Morphism]] in $\mathcal{C}$.
Then it induces a [[Foundations/Category Theory/Natural Transformation]]
$$
\mathcal{C}(f,-):\mathcal{C}(B,-)\to \mathcal{C}(A,-)
$$
given by $\mathcal{C}(f,-)_{C}=\mathcal{C}(f,C)$ for any $C\in \operatorname{ob}\mathcal{C}$
Dually, 
$$
\mathcal{C}(-,f):\mathcal{C}(-,A) \to \mathcal{C}(-,B)
$$
is a [[Foundations/Category Theory/Natural Transformation]] given by $\mathcal{C}(-,f)_{C}=\mathcal{C}(C,f)$ for $C\in \operatorname{ob}\mathcal{C}$.
#### Proof
Let $C\xrightarrow{g}D$ (in $\mathcal{C}$)
Consider the diagram
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\mathcal{C}(B,C) \arrow[r,"\mathcal{C}(B{,}g)"] \arrow[d,swap,"\mathcal{C}(f{,}C)"]
 & \mathcal{C}(B,D) \arrow[d,"\mathcal{C}(f{,}D)"] \\
\mathcal{C}(A,C) \arrow[r,"\mathcal{C}(A{,}g)"]
 & \mathcal{C}(A,D)
\end{tikzcd}
\end{document}
```
Let $h:B\to C$.
Clearly:
$$
(gh)f=g(hf)
$$
by [[Foundations/Category Theory/Associativity]] in $\mathcal{C}$.
Thus
$$
\mathcal{C}(f,D) \mathcal{C}(B,g) = \mathcal{C}(A,g)\mathcal{C}(f,C)
$$
for any $g:C\to D$.
Thus $\mathcal{C}(f,-)$ is a [[Foundations/Category Theory/Natural Transformation]].

