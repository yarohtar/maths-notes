Let $f:\{ -1,1 \}^{n}\to \{ -1,1 \}$ be a function on the $p$-[[Biased Cube]].
Then there is some $i$ such that

$$
\mathrm{Inf}_{i}f\geq \frac{ c\log n }{ n }\mathrm{Var}f
$$

#### Proof

Let $\tilde{I}(f)=\frac{I(f)}{\mathrm{Var}(f)}$ as in [[The Kahn-Kalai-Linial Edge-Isoperimetric Inequality]].
If $\tilde{I}(f)\geq c\log n$ we are done as some influence is bigger than the average.
Otherwise have

$$
\begin{align}
\mathrm{Inf}_{i}f & \geq \frac{\sigma^{2}}{\tilde{I}(f)^{2}} \left( \frac{\sigma^{4}}{9} \right)^{\tilde{I}(f)-1}  \\
 & \geq \frac{\sigma^{2}}{c^{2}\log ^{2}n}\left( \frac{\sigma^{4}}{9} \right)^{c\log n-1} \\
 & \gg \frac{ \log n }{ n }
\end{align}
$$

for appropriate $c$.
