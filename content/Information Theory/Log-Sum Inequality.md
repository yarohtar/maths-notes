Let $a_{1},a_{2},\dots,a_{n}$ and $b_{1},b_{2},\dots,b_{n}$ be nonnegative
Then
$$
\sum_{i} a_{i} \log \frac{ a_{i} }{ b_{i} } \geq \left( \sum_{i}a_{i} \right) \log \frac{ \sum_{i}a_{i} }{ \sum_{i} b_{i} }
$$
Moreover, $=$ holds if and only if $\frac{a_{i}}{b_{i}}$ is constant over $i=1,\dots,n$
### Proof
Let $A=\sum_{i}a_{i}$ and $B=\sum_{i}b_{i}$
Assume WLOG that $B\neq 0$ and $a_{i}\neq 0$ for all $i=1,\dots,n$
Define a [[Probability/Random Variable]]
$$
X=\frac{a_{i}}{b_{i}} \quad %quad
\text{with probability}\quad %quad
 \frac{ b_{i} }{ B }
$$
Let $f(x)=x\log x$.
Then $f''(x)>0$ everywhere and
$$
\mathbb{E}(X)=\sum_{i} \frac{b_{i}}{B} \frac{a_{i}}{b_{i}} = \frac{A}{B}
$$
$$
\mathbb{E}(f(X)) = \frac{1}{B} \sum_{i} a_{i} \log \frac{a_{i}}{b_{i}}
$$
$$
f(\mathbb{E}(X)) = \frac{A}{B} \log \frac{A}{B}
$$
[[Information Theory/Jensen's Inequality]] gives
$$
\begin{align}
f(\mathbb{E}(X)) &  \leq \mathbb{E}(f(X))  \\
\frac{1}{B} \sum_{i} a_{i} \log \frac{a_{i}}{b_{i}}  & \geq \frac{A}{B} \log \frac{A}{B} 
\end{align}
$$
with equality if and only if $X$ is constant. 
