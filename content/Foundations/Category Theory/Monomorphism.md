Let $f:A\to B$ be a [[Morphism]] in [[Category]] $\mathcal{C}$
We say $f$ is a monomorphism if

$$
fg=fh\implies g=h
$$

for all $C\xrightarrow{g,h}A$
We denote a monomorphism $f$ by

```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r, tail, "f"] & B 
\end{tikzcd}
\end{document}
```

In [[Category of Sets]], monomorphisms are injective.
