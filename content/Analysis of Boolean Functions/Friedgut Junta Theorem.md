Let $f:\{ -1,1 \}^{n}\to \{ -1,1 \}$ and $\epsilon>0$.
Then there is some $m$-[[Junta]] $g:\{ -1,1 \}^{n}\to \mathbb{R}$ with $\lVert f-g \rVert_{2}^{2}\leq 2\epsilon$
and

$$
m=\exp\left( O\left( \frac{I(f)}{\epsilon} \right) \right)
$$

#### Proof

Let $k\geq \frac{I(f)}{\epsilon}$.
Then calculate:

$$
\begin{align}
I(f) & =\sum_{A} \lvert A \rvert \hat{f}(A)^{2} \\
 & \geq \sum_{\lvert A \rvert>k} \lvert A \rvert \hat{f}(A)^{2} \\
 & \geq k\lVert f^{(>k)} \rVert_{2}^{2}
\end{align}
$$

so we conclude $\lVert f^{(\leq k)} \rVert_{2}^{2}\geq 1-\epsilon$.
We are done by [[Friedgut Junta Inequality]] which gives

$$
m=\exp(O(k))
$$

### Corollary

We can approximate $f$ by a boolean $m$-[[Junta]] $h:\{ -1,1 \}^{n}\to \{ -1,1 \}$.

#### Proof

Take

$$
h(x) = \operatorname{sgn} g(x)
$$
