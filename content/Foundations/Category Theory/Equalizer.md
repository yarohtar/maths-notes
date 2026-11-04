Given $A\xrightarrow{f,g}B$ in a [[Category]] $\mathcal{C}$
an equalizer of $f,g$ is an [[Object]] $E$ and map $i:E\to A$
such that $fi=gi$
and for any $G\xrightarrow{j}A$ if $fj=gj$
we have a unique $s:G\to E$
making the [[Commutative Diagram]]

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
G \arrow[dr, "j"] \arrow[d, "s"]\\
E \arrow[r, "i"] 
& A \arrow[r, "f{,}g"] 
& B
\end{tikzcd}
\end{document}
```

Note that $i$ is a [[Monomorphism]]
and we say that in this case $i$ is a [[Regular Monomorphism]]

### Lemma

If $\mathcal{C}$ has equalizers, then any [[Detecting Family]] in $\mathcal{C}$ is also a [[Separating Family]].

#### Proof

Suppose $\mathcal{G}$ is a [[Detecting Family]].
Let $f,g$ be such that $fh=gh$ for any $h$ with $\operatorname{dom}h\in \mathcal{G}$
Let $i$ be an equalizer of $f$ and $g$.
Then there is a unique $s$ such that $is=h$,
so $h$ factors uniquely through $i$ and hence $i$ is an [[Isomorphism]].
But $fi=gi$ so $f=g$ and hence $\mathcal{G}$ is a [[Separating Family]].
