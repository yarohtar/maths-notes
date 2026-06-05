Let $\mathcal{E}$ be a class of [[Foundations/Category Theory/Epimorphism]]s in a [[Foundations/Category Theory/Locally Small]] [[Foundations/Category Theory/Category]] $\mathcal{C}$
An [[Foundations/Category Theory/Object]] $P$ in $\mathcal{C}$ is projective
if [[Foundations/Category Theory/Hom-Functor]] $\mathcal{C}(P,-)$ preserves [[Foundations/Category Theory/Epimorphism]]s in $\mathcal{E}$
i.e. $\mathcal{C}(P,g):\mathcal{C}(P,Q)\to \mathcal{C}(P,R)$ is surjective for all $g:Q\to R$ in $\mathcal{E}$.
i.e. if given
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
& P 
\arrow[d,"f"]\\
Q \arrow[r,two heads,"g"] & R
\end{tikzcd}
\end{document}
```
where $g$ is an [[Foundations/Category Theory/Epimorphism]] in $\mathcal{E}$
then there exists $h:P\to Q$ with $gh=f$

We say that $P$ is projective if $\mathcal{E}$ are all [[Foundations/Category Theory/Epimorphism]]s in $\mathcal{C}$

### Lemma
For any [[Foundations/Category Theory/Small Category]] $\mathcal{C}$, the functors $\mathcal{C}(A,-)$ are pointwise projective in $[\mathcal{C},\mathrm{Set}]$
#### Proof
Let $P=\mathcal{C}(A,-)$ and $Q,R:\mathcal{C}\to \mathrm{Set}$ some [[Foundations/Category Theory/Functor]]s.
Suppose $g:Q\to R$ is a [[Foundations/Category Theory/Natural Transformation]]
and that $g_{A}:QA\to RA$ is surjective.
Let $f:\mathcal{C}(A,-)\to R$ be a [[Foundations/Category Theory/Natural Transformation]].
By [[Foundations/Category Theory/Yoneda Lemma]], $f$ corresponds to some $\Phi(f)\in RA$ (i.e. $f_{A}(1_{A})$)
Then there is some $q\in QA$ such that $g_{A}(q)=\Phi(f)$
But then there is some [[Foundations/Category Theory/Natural Transformation]] $h:\mathcal{C}(A,-)\to Q$ 
such that $\Phi(h)=q$ (again by [[Foundations/Category Theory/Yoneda Lemma]])
We conclude that
$$
g_{A}(\Phi(h)) = \Phi(f)
$$
But $\Phi$ is also a [[Foundations/Category Theory/Natural Transformation]] so we can write
$$
\Phi(gh) = \Phi(f)
$$
and $\Phi$ is bijective so
$$
gh=f
$$
### Proposition
Let $\mathcal{C}$ be a [[Foundations/Category Theory/Small Category]].
For any [[Foundations/Category Theory/Functor]] $F:\mathcal{C}\to \mathrm{Set}$ 
there is a pointwise [[Foundations/Category Theory/Epimorphism]] $P\to F$ in $[\mathcal{C},\mathrm{Set}]$ 
with $P$ being pointwise projective.
#### Proof
Given $F$, let $P$ be the disjoint union
$$
\bigsqcup_{(A,x)} \mathcal{C}(A,-) 
$$
where the union is taken over $A\in \operatorname{ob}\mathcal{C}$ and $x\in FA$.
Now $P$ is a [[Foundations/Category Theory/Coproduct]]
A [[Foundations/Category Theory/Coproduct]] of $\mathcal{E}$-projective objects is $\mathcal{E}$-projective so $P$ is pointwise projective.
The morphism $P\to F$ whose $(A,x)$th component 
$$
\Psi(x):\mathcal{C}(A,-)\to F
$$
is pointwise [[Foundations/Category Theory/Epimorphism]], since $x$ is in the image of $\Psi(x)_{A}$.