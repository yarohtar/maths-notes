---
publish: true
aliases:
  - Adjoint
created: 2026-10-11T21:45:33.290Z
modified: 2026-10-11T21:45:33.290Z
---

Let $\mathcal{C}$ and $\mathcal{D}$ be [[Category|Categories]]
Let $F:\mathcal{C}\to \mathcal{D}$ and $G:\mathcal{D}\to \mathcal{C}$ be [[Functor]]s
We say that $F$ is left adjoint to $G$ and $G$ is right adjoint to $F$ if

$$
\mathcal{C}(A,GB) \cong \mathcal{D}(FA,B)
$$

naturally in $A\in \mathcal{C}$ and $B\in \mathcal{D}$. We write $F\dashv G$
An adjunction between $F$ and $G$ is this [[Isomorphism]].
There are two other characterisations of adjunction:
[[Comma Category]]
[[Triangular Identities]]

### what does naturally mean?

If $\mathcal{C}$ and $\mathcal{D}$ were [[Locally Small]], we could express it as a [[Natural Isomorphism]]

$$
\mathcal{C}(-,G-) \to \mathcal{D}(F-,-)
$$

as functors $\mathcal{C}^{op}\times \mathcal{D}\to \mathrm{Set}$.
If they are not locally small we can express this in elementary terms as follows.
For $f:A\to GB$ in $\mathcal{C}$ denote by $\overline{f}:FA\to B$ the corresponding [[Morphism]] in $\mathcal{D}$
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

If $F$ and $F'$ are both left [[Adjunction|Adjoint]] to $G:\mathcal{D}\to \mathcal{C}$
then $F$ and $F'$ are [[Isomorphic]] in $[\mathcal{C},\mathcal{D}]$

#### Proof

For any $A$, $(FA,\eta_{A})$ and $(F'A,\eta_{A}')$ are both [[Initial]] objects
of the [[Comma Category]] $(A\downarrow G)$
So there's a unique [[Isomorphism]] $\alpha_{A}:(FA,\eta_{A})\to(F'A,\eta_{A}')$.
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

Suppose we are given a [[Commutative Diagram]]

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

in which all four [[Functor]]s have left [[Adjunction|Adjoint]]s.
Then the square of left adjoints commutes up to [[Natural Isomorphism]].

#### Proof

The two ways round it are both left [[Adjunction|Adjoint]] to $KG=HF$.
So they must be [[Isomorphic]].
