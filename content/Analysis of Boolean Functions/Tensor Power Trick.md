Let $f:\{ -1,1 \}^{n} \to \mathbb{R}$ and $T$ some operator such that
$$
\lVert Tf^{\otimes m} \rVert _{4} =\lVert Tf \rVert _{4}^{m}
$$
where $f^{\otimes m}:(\{ -1,1 \}^{n})^{m} \to \mathbb{R}$ is given by
$$
f(x_{1},x_{2},\dots,x_{m}) = f(x_{1})f(x_{2})\dots f(x_{m})
$$
Suppose that 
$$
\lVert Tf \rVert _{4} \leq e^{O(n^{1-\epsilon})} \lVert f \rVert _{2}
$$
Then 
$$
\lVert Tf \rVert _{4} \leq \lVert f \rVert _{2}
$$
#### Proof
$$
\lVert Tf \rVert _{4}^{m} = \lVert Tf^{\otimes m} \rVert _{4} \leq e^{O((mn)^{1-\epsilon})} \lVert f^{\otimes m} \rVert _{2} = e^{O((mn)^{1-\epsilon})}\lVert f \rVert _{2}^{m}
$$
and thus
$$
\lVert Tf \rVert _{4} \leq e^{O(n^{1-\epsilon} m^{-\epsilon})}\lVert f \rVert _{2}
$$
Let $m\to \infty$ and note that $O(m^{-\epsilon})\to 0$ so
$$
\lVert Tf \rVert _{4} \leq \lVert f \rVert _{2}
$$

