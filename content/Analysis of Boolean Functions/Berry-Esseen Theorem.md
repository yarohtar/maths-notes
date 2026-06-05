Let $X_{1},\dots ,X_{n}$ and $Y_{1},\dots,Y_{n}$ be sequences of [[Probability/Independent]] [[Probability/Random Variable]]s.
Suppose that $\mathop{\mathbb{E}}X_{i}=\mathop{\mathbb{E}}Y_{i}$ and $\mathop{\mathbb{E}}X_{i}^{2}=\mathop{\mathbb{E}}Y_{i}^{2}$ for all $i$.
Let $\psi:\mathbb{R}\to \mathbb{R}$ have a third derivative and:
$$
\lVert \psi''' \rVert _{\infty} \leq C
$$
Then
$$
\lvert \mathop{\mathbb{E}}\psi(X_{1}+\dots+X_{n})-\mathop{\mathbb{E}}\psi(Y_{1}+\dots +Y_{n}) \rvert  \leq \frac{C}{6} \left( \sum_{i=1}^{n} (\lVert X_{i} \rVert _{3}^{3} + \lVert Y_{i} \rVert _{3}^{3}) \right)
$$
#### Proof
Write $U_{i}=X_{1}+\dots+X_{i-1}+Y_{i+1}+\dots+Y_{n}$.
By triangle inequality we have 
$$
\lvert \mathop{\mathbb{E}}\psi(U_{n}+X_{n}) - \mathop{\mathbb{E}}\psi(U_{1}+Y_{1}) \rvert \leq \sum_{i=1}^{n} \lvert \mathop{\mathbb{E}}\psi(U_{i}+X_{i}) -\mathop{\mathbb{E}}\psi(U_{i}+Y_{i}) \rvert 
$$
By [[Analysis/Taylor's theorem]]:
$$
\psi(U_{i}+X_{i}) =\psi(U_{i}) + X_{i} \psi'(U_{i}) + \frac{ X_{i}^{2} }{ 2 } \psi''(U_{i}) + \frac{ X_{i}^{3} }{ 6 } \psi'''(V_{i}) 
$$
where $V_{i}$ is between $U_{i}$ and $U_{i}+X_{i}$ and similar for $\psi(U_{i}+Y_{i})$
Taking expectations and substracting, the first $3$ terms cancel so we are left with:
$$
\mathop{\mathbb{E}}\psi(U_{i}+X_{i}) - \mathop{\mathbb{E}}\psi(U_{i}+Y_{i}) = \frac{1}{6}(\mathop{\mathbb{E}}X_{i}^{3}\psi'''(V_{i}) - \mathop{\mathbb{E}} Y_{i}^{3}\psi'''(W_{i}))
$$
which has size at most 
$$
\frac{C}{6}(\lVert X_{i} \rVert _{3}^{3} + \lVert Y_{i} \rVert _{3}^{3})
$$
and the result follows.
### Corollary
Let $X_{1},\dots,X_{n}$ be independent with $\mathop{\mathbb{E}}X_{i}=0$ and $\mathop{\mathbb{E}}X_{i}^{2}=\sigma_{i}^{2}$ with $\sum \sigma_{i}^{2}=1$.
Let $\psi$ such that $\lVert \psi''' \rVert_{\infty}\leq C$.
Then
$$
\left\lvert  \mathop{\mathbb{E}}\psi\left( \sum_{i=1}^{n}X_{i} \right) - \mathop{\mathbb{E}}Y  \right\rvert \leq \frac{C}{6} \left( \sum \lVert X_{i} \rVert _{3}^{3} + \sum 2\sigma_{i}^{3}\sqrt{ \frac{2}{\pi} }  \right)
$$
where $Y\sim N(0,1)$.
#### Proof
Take $Y_{i}$ normal with mean $0$ and $\mathop{\mathbb{E}}Y_{i}^{2}=\sigma_{i}^{2}$.
Then $\sum Y_{i}\sim N(0,1)$ and by the previous theorem we are done.

