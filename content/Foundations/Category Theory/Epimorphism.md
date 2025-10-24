Let $f:A\to B$ be a morphism in [[Foundations/Category Theory/Category]] $\mathcal{C}$
We say $f$ is an epimorphism if 
$$
gf=hf\implies g=h
$$
for all $B\xrightarrow{g,h}C$
We denote epimorphisms by
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
A \arrow[r, two heads, "f"] & B
\end{tikzcd}
\end{document}
```


In [[Foundations/Category Theory/Category of Sets]], epimorphisms are surjective.