---
{"publish":true,"aliases":"Adjoint","created":"2025-12-24T04:28:25.855+00:00","modified":"2025-12-24T04:28:25.855+00:00","cssclasses":""}
---

Let $\mathcal{C}$ and $\mathcal{D}$ be [[Foundations/Category Theory/Category\|Categories]]
Let $F:\mathcal{C}\to \mathcal{D}$ and $G:\mathcal{D}\to \mathcal{C}$ be [[Foundations/Category Theory/Functor]]s
We say that $F$ is left adjoint to $G$ and $G$ is right adjoint to $F$ if
$$
\mathcal{C}(A,GB) \cong \mathcal{D}(FA,B)
$$
naturally in $A\in \mathcal{C}$ and $B\in \mathcal{D}$. We write $F\dashv G$
An adjunction between $F$ and $G$ is this [[Foundations/Category Theory/Isomorphism]].
There are two other characterisations of adjunction:
[[Foundations/Category Theory/Comma Category]]
[[Foundations/Category Theory/Triangular Identities]]
### what does naturally mean?
If $\mathcal{C}$ and $\mathcal{D}$ were [[Foundations/Category Theory/Locally Small]], we could express it as a [[Foundations/Category Theory/Natural Isomorphism]] 
$$
\mathcal{C}(-,G-) \to \mathcal{D}(F-,-)
$$
as functors $\mathcal{C}^{op}\times \mathcal{D}\to \mathrm{Set}$.
If they are not locally small we can express this in elementary terms as follows.
For $f:A\to GB$ in $\mathcal{C}$ denote by $\overline{f}:FA\to B$ the corresponding [[Foundations/Category Theory/Morphism]] in $\mathcal{D}$
Similarly, for any $g:FA\to B$ denote by $\overline{g}:A\to GB$...

Naturality means that for any $q:B\to B'$ and $p:A'\to A$ we have
$$
\overline{qg(Fp)}=(Gq)\overline{g}p
$$
or equivalently 
$$
\overline{(Gq)fp} = q \overline{f} (Fp)
$$
Note that I actually couldn't write anything else sensible with these symbols.
This is because its the only "natural" thing to write down.
### Corollary
If $F$ and $F'$ are both left [[Foundations/Category Theory/Adjunction\|Adjoint]] to $G:\mathcal{D}\to \mathcal{C}$
then $F$ and $F'$ are [[Foundations/Category Theory/Isomorphic]] in $[\mathcal{C},\mathcal{D}]$
#### Proof
For any $A$, $(FA,\eta_{A})$ and $(F'A,\eta_{A}')$ are both [[Foundations/Category Theory/Initial]] objects 
of the [[Foundations/Category Theory/Comma Category]] $(A\downarrow G)$
So there's a unique [[Foundations/Category Theory/Isomorphism]] $\alpha_{A}:(FA,\eta_{A})\to(F'A,\eta_{A}')$.
Given $f:A\to A'$, the composites $\alpha_{A'}(Ff)$ and $(F'f)\alpha_{A}$ 
are both morphisms $(FA,\eta_{A})\to(F'A',\eta'_{A'}f)$ in $(A\downarrow G)$ 
so they're equal.
### Lemma
Suppose given $\mathcal{C}\xrightarrow{F}\mathcal{D}\xrightarrow{H}\mathcal{E}$ and $\mathcal{E}\xrightarrow{K}\mathcal{D}\xrightarrow{G}\mathcal{C}$
with $(F\dashv G)$ and $(H\dashv K)$.
Then $(HF\dashv GK)$
#### Proof
We have bijections $\mathcal{C}(A,GKC)\to \mathcal{D}(FA,KC)\to \mathcal{E}(HFA,C)$
which are natural in both $A$ and $C$.
### Corollary
Suppose we are given a [[Foundations/Category Theory/Commutative Diagram]]
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\mathcal{C} \arrow[r,"F"] \arrow[d,"G"]
 & \mathcal{D} \arrow[d,"H"] \\
 \mathcal{E}\arrow[r,"K"]
 & \mathcal{F}
\end{tikzcd}
\end{document}
```
in which all four [[Foundations/Category Theory/Functor]]s have left [[Foundations/Category Theory/Adjunction\|Adjoint]]s.
Then the square of left adjoints commutes up to [[Foundations/Category Theory/Natural Isomorphism]].
#### Proof
The two ways round it are both left [[Foundations/Category Theory/Adjunction\|Adjoint]] to $KG=HF$.
So they must be [[Foundations/Category Theory/Isomorphic]].

