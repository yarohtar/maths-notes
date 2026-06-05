Let $A$ be a finite alphabet.
The probability simplex is the set 
$$
\mathcal{P}=\left\{  P\in[0,1]^{A } : \sum_{a\in A} P(a) = 1  \right\}
$$
For example, in $\mathbb{R}^{3}$ with $A=\{ a,b,c \}$ we have:
```tikz
\begin{document}
\begin{tikzpicture}

% Number of subdivisions
\def\N{6}

% Coordinates of simplex vertices
\coordinate (A) at (1.3,0);
\coordinate (B) at (0,1.3);
\coordinate (C) at (-0.6,-0.6);

% Draw simplex edges
\draw[thick] (A) -- (B) -- (C) -- cycle;

% Draw axes
\draw[->] (0,0) -- (1.7,0) node[right] {$P(a)$};
\draw[->] (0,0) -- (0,1.7) node[above] {$P(b)$};
\draw[->] (0,0) -- (-1.0,-1.0) node[left] {$P(c)$};

\end{tikzpicture}

\end{document}
```

