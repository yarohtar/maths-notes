Let $f:\{ -1,1 \}^{n}\to \{ -1,1 \}$ be a function on the $p$-[[Analysis of Boolean Functions/Biased Cube]].
Suppose that 
$$
\lVert f^{(\leq k)} \rVert _{2}^{2} \geq 1-\epsilon
$$
Then there exists an $m$-[[Analysis of Boolean Functions/Junta]] $g:\{ -1,1 \}^{n}\to \mathbb{R}$ with
$$
\lVert g-f \rVert _{2}^{2}\leq 2\epsilon
$$
and
$$
m\leq \frac{ \rho^{-2k}I(f)^{3} }{ \epsilon^{2}\sigma^{2} }
$$
#### Proof
Let $\tau>0$ (to be chosen later)
and let 
$$
J=\{ i:\mathrm{Inf}_{i}f\geq \tau \}
$$
Let $\rho=\frac{\sigma^{2}}{4}$
Now note
$$
\sum_{i\not\in J}\mathrm{Stab}_{\rho}(D_{i}f)\leq \sum_{i\not\in J}\lVert D_{i}f \rVert _{\frac{4}{3}}^{2} 
$$
by the [[Analysis of Boolean Functions/Bonami Lemma]].
Also note
$$
\lVert D_{i}f \rVert _{4 / 3}^{2} = \sigma ^{-1}\lVert D_{i}f \rVert _{2}^{3}
$$
by the fact that $D_{i}f\in \{ -\sigma,0,\sigma \}$ so we can write
$$
\left( \frac{ D_{i}f }{ \sigma } \right)^{4/3} = \left( \frac{ D_{i}f }{ \sigma } \right)^{2}
$$
Use the definition of [[Analysis of Boolean Functions/Influence]] to find:
$$
\lVert D_{i}f \rVert _{2}^{3} = (\mathrm{Inf}_{i}f)^{3/2}
$$
and thus
$$
\sum_{i\not\in J} \mathrm{Stab}_{\rho}(D_{i}f) \leq \sigma ^{-1} \tau^{1/2} I(f)
$$
Now let 
$$
g=\sum_{A\subseteq J, \lvert A \rvert \leq k} \hat{f}(A)\phi_{A}
$$
Then
$$
\lVert f-g \rVert _{2}^{2} \leq \sum_{B\not\subseteq J, \lvert B \rvert \leq k} \hat{f}(B)^{2} + \sum_{\lvert B \rvert >k}\hat{f}(B)^{2}
$$
By the hypothesis, the second term is $\leq \epsilon$.
Also
$$
\begin{align}
\sum_{i\not\in J} \mathrm{Stab}_{\rho}(D_{i}f)  & \geq \rho ^{-1}\sum_{B}\lvert B\setminus J \rvert \rho^{\lvert B \rvert }\hat{f}(B)^{2}  \\
 & \geq \rho ^{-1}\sum_{B\not\subseteq J, \lvert B \rvert \leq k} \rho^{k} \hat{f}(B)^{2} \\
\end{align}
$$
Therefore
$$
\sum_{B\not\subseteq J, \lvert B \rvert \leq k} \hat{f}(B)^{2} \leq \rho^{-k+1} \sigma ^{-1} \tau^{1/2} I(f)
$$
so set
$$
\tau=\frac{ \epsilon^{2}\sigma^{2}\rho^{2k-2} }{ I(f)^{2} }
$$
### Corollary
We can approximate $f$ by a boolean $m$-[[Analysis of Boolean Functions/Junta]] $h:\{ -1,1 \}^{n}\to \mathbb{R}$.
#### Proof
Take
$$
h(x) = \operatorname{sgn} g(x)
$$




