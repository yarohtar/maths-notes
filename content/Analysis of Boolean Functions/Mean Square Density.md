Let $f:\{ 0,1 \}^{n}\to \{ 0,1 \}$ and $J\subseteq[n]$ with [[Analysis of Boolean Functions/Averaging Projection]] $E_{J}$.
The mean square density of $f$ on $J$ is:
$$
\lVert E_{J}f \rVert _{2}^{2}
$$
### Lemma
If $J\subseteq K$ then
$$
\lVert E_{J}f \rVert _{2}^{2} \leq \lVert E_{K}f \rVert _{2}^{2}
$$
#### Proof
Firstly 
$$
E_{J}f = E_{J}E_{K}f
$$
Now note that as $E_{J}$ is an orthogonal projection, it is reducing the norm so
$$
\lVert E_{J}E_{K}f \rVert_{2} \leq \lVert E_{K}f \rVert _{2}
$$