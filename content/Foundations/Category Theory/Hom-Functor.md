Let $\mathcal{C}$ be [[Locally Small]].
We define the [[Covariant]] hom-functor to be:

$$
\mathcal{C}(A,-):\mathcal{C}\to \mathrm{Set}
$$

We send each object $B\in\operatorname{ob}\mathcal{C}$ to the [[Hom-Set]] $\mathcal{C}(A,B)$
We send each morphism $g:B\to C$ to a function

$$
\mathcal{C}(A,g):\mathcal{C}(A,B) \to \mathcal{C}(A,C)
$$

defined by

$$
\mathcal{C}(A,g)(h)=gh
$$

Similarly, the [[Contravariant]] hom-functor

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

The [[Covariant]] hom-functor $\mathcal{C}(A,-)$ is a [[Functor]].
Similarly, the [[Contravariant]] hom-functor $\mathcal{C}(-,B)$ is a [[Contravariant]] [[Functor]].

### Proof

[[Functor]]iality follows from the [[Associativity]] law in $\mathcal{C}$

### Lemma

Let $f:A\to B$ be a [[Morphism]] in $\mathcal{C}$.
Then it induces a [[Natural Transformation]]

$$
\mathcal{C}(f,-):\mathcal{C}(B,-)\to \mathcal{C}(A,-)
$$

given by $\mathcal{C}(f,-)_{C}=\mathcal{C}(f,C)$ for any $C\in \operatorname{ob}\mathcal{C}$
Dually,

$$
\mathcal{C}(-,f):\mathcal{C}(-,A) \to \mathcal{C}(-,B)
$$

is a [[Natural Transformation]] given by $\mathcal{C}(-,f)_{C}=\mathcal{C}(C,f)$ for $C\in \operatorname{ob}\mathcal{C}$.

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

by [[Associativity]] in $\mathcal{C}$.
Thus

$$
\mathcal{C}(f,D) \mathcal{C}(B,g) = \mathcal{C}(A,g)\mathcal{C}(f,C)
$$

for any $g:C\to D$.
Thus $\mathcal{C}(f,-)$ is a [[Natural Transformation]].
