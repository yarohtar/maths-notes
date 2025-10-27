Let $\mathcal{A}$, $\mathcal{B}$ and $\mathcal{C}$ be [[Foundations/Category Theory/Category\|Categories]]
Let $P:\mathcal{A}\to \mathcal{C}$ and $Q:\mathcal{B}\to \mathcal{C}$
The comma category, written as $(P\downarrow Q)$ 
is the category defined as follows
1. Objects are triples $(A,h,B)$ with $A\in \operatorname{ob}\mathcal{A}$, $B\in \operatorname{ob}\mathcal{B}$ and $h:P(A)\to Q(B)$
2. maps $(A,h,B)\to(A',h',B')$ are pairs $(f:A\to A',g:B\to B')$ 
   such that we have a [[Foundations/Category Theory/Commutative Diagram]]
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
P(A) \arrow[r,"P(f)"] \arrow[d,"h"]
 & P(A') \arrow[d,"h'"] \\
Q(B) \arrow[r,"Q(g)"]
 & Q(B')
\end{tikzcd}
\end{document}
```
### Special case
Let $G:\mathcal{D}\to \mathcal{C}$ be a [[Foundations/Category Theory/Functor]].
Let also $A:1\to \mathcal{C}$ be the functor from the trivial category to $\mathcal{C}$,
sending the only element of $1$ to the object $A\in \operatorname{ob}\mathcal{C}$ (by abuse of notation)
We write $(A,G)$ for their comma category.
This category has
1. [[Foundations/Category Theory/Object]]s as pairs $(B,h)$ for $B\in \operatorname{ob}\mathcal{D}$ and $h:A\to GB$
2. [[Foundations/Category Theory/Morphism]]s $(B,h)\to(B',h')$ as morphisms $f:B\to B'$
   such that we have a [[Foundations/Category Theory/Commutative Diagram]]
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r, "h"] \arrow[dr,swap, "h'"] 
& GB \arrow[d, "Gf"] \\
& GB'
\end{tikzcd}
\end{document}
```
## Theorem
Let $G:\mathcal{D}\to \mathcal{C}$ be a [[Foundations/Category Theory/Functor]].
Then specifying a left [[Foundations/Category Theory/Adjunction\|Adjoint]] for $G$
is equivalent to
specifying an [[Foundations/Category Theory/Initial]] object of the [[Foundations/Category Theory/Comma Category]] $(A\downarrow G)$ 
for each $A\in \operatorname{ob}\mathcal{C}$.
### Proof
#### $\implies$
Suppose $G$ has a left [[Foundations/Category Theory/Adjunction\|Adjoint]] $F:\mathcal{C}\to \mathcal{D}$.
Let $\eta_{A}:A\to GFA$ be the morphism corresponding to $1_{FA}$ 
Then $(FA, \eta_{A})$ is [[Foundations/Category Theory/Initial]] in $(A\downarrow G)$. 
Let $(B,f)$ be an object in $(A\downarrow G)$ where $f:A\to GB$
A map $q:(FA,\eta_{A})\to(B,f)$ in $(A\downarrow G)$ is $q:FA\to B$ in $\mathcal{D}$
such that we have a [[Foundations/Category Theory/Commutative Diagram]]
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r, "\eta_{A}"] \arrow[dr,swap, "f"] 
& GFA \arrow[d, "Gq"] \\
& GB
\end{tikzcd}
\end{document}
```
i.e.
$$
f=(Gq)\eta_{A}
$$
But these correspond uniquely to
$$
\overline{f}=q \overline{\eta_{A}} = q 1_{FA} = q
$$
Thus $q=\overline{f}$ exists and is unique.
#### $\impliedby$
Suppose for any $A$ we are given an initial object $(FA,\eta_{A})$ of $(A\downarrow G)$
This defines a [[Foundations/Category Theory/Functor]] $F$ on objects $A\in \mathcal{C}$.
For any $f:A\to B$ define $Ff$ to be the unique $(FA,\eta_{A})\to(FB,\eta_{B})$ in $(A\downarrow G)$
Then $Ff$ is a morphism $FA\to FB$ 
and [[Foundations/Category Theory/Functor\|functoriality]] of $F$ follows from uniqueness.
The [[Foundations/Category Theory/Adjunction]] sends each $f:A\to GB$
to the unique $(FA,\eta_{A})\to(B,f)$ in $(A\downarrow G)$.
On the other hand, each $g:FA\to B$ 
is sent to $(Gg)\eta_{A}$ and we can verify naturality.