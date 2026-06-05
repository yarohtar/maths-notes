Let $f:\{ -1,1 \}^{n}\to \mathbb{R}$ be a function on the $p$-[[Analysis of Boolean Functions/Biased Cube]].
The $i$-th influence of $f$ is 
$$
\mathrm{Inf}_{i}f = \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} D_{i}f(x)^{2} = \lVert D_{i}f \rVert _{2}^{2}
$$
where $D_{i}$ is the [[Analysis of Boolean Functions/Discrete Derivative]] operator.
The total influence of $f$ is
$$
I(f) = \sum_{i} \mathrm{Inf}_{i}f
$$
### Lemma
$$
I(f) = \sum_{A\subseteq[n]}\lvert A \rvert \hat{f}(A)^{2}
$$
#### Proof
Use the fact that 
$$
D_{i}f = \sum_{A\ni i} \hat{f}(A)\phi_{A\setminus \{ i \}}
$$
to find
$$
\lVert D_{i}f \rVert _{2}^{2} = \sum_{A\ni i}\hat{f}(A)^{2}
$$
and then use a counting argument.
 