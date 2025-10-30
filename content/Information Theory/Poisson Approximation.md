Suppose $X_{1},X_{2},\dots,X_{n}$ are binary [[Probability/Random Variable]]s
with each $X_{i}\sim \mathrm{Bern}(p_{i})$ and let $\lambda=\sum_{i}p_{i}$.
Let
$$
S_{n}=\sum_{i} X_{i}
$$
and let $P_{S_{n}}$ be its distribution. Then:
$$
D_{e}(P_{S_{n}}||\Pi_{\lambda}) \leq \sum_{i=1}^{n} p_{i}^{2} + \left( \sum_{i=1}^{n} H_{e}(X_{i}) - H_{e}(X_{1},\dots,X_{n}) \right)
$$
where $D_{e}$ is the [[Information Theory/Relative Entropy]] and $H_{e}$ is the [[Information Theory/Mathematical Entropy]].
#### Proof
Let $Z_{1},Z_{2},\dots,Z_{n}$ be [[Probability/Independent]] with each other
following the [[Information Theory/Poisson Distribution]]:
$$
Z_{i} \sim \mathrm{Po}(p_{i})
$$
and let
$$
T_{n} = \sum_{i=1}^{n} Z_{i} \sim \mathrm{Po}(\lambda)
$$
Now use [[Information Theory/Data Processing Property of the Relative Entropy]] to find:
$$
\begin{align}
D_{e}(P_{S_{n}}||\Pi_{\lambda})  & = D_{e}(P_{S_{n}}|| P_{T_{n}}) \\
 & \leq D_{e}(P_{X_{i}^{n}}|| P_{Z_{1}^{n}})  \\
 & = \sum_{x_{1}^{n}} P_{X_{1}^{n}}(x_{1}^{n}) \log_{e} \left(  \frac{ P_{X_{1}^{n}}(x_{1}^{n}) }{ \prod_{i=1}^{n} P_{Z_{i}}(x_{i}) } \frac{ \prod_{i=1}^{n} P_{X_{i}^{n}} }{ \prod_{i=1}^{n} P_{X_{i}}(x_{i}) } \right) \\
 & = \sum_{x_{1}^{n}} P_{X_{1}^{n}} \log_{e} \left( \prod_{i} \frac{ P_{X_{i}} }{ P_{Z_{i}} }  \right) + \sum P_{X_{1}^{n}}\log_{e} P_{X_{1}^{n}} - \sum P_{_{1}^{n}} \log_{e} \left( \prod_{i} P_{X_{i}} \right)  \\
 & = \sum_{i} D_{e}(P_{X_{i}}||P_{Z_{i}}) + \left( \sum_{i} H_{e}(X_{i}) - H_{e}(X_{1}^{n}) \right)
\end{align}
$$
where
$$
\begin{align}
D_{e}(P_{X_{i}}||P_{Z_{i}}) & = D_{e}(\mathrm{Bern}(p_{i})||\mathrm{Po}(p_{i}))  \\
 & =p_{i}\log_{e} \frac{ p_{i} }{ p_{i}e^{-p_{i}} } + (1-p_{i}) \log_{e} \frac{ 1-p_{i} }{ e^{-p_{i}} } \\
 & = p_{i}^{2} + (1-p_{i})p_{i} \log_{e}(1-p_{i}) \\
 & \leq p_{i}^{2}
\end{align}
$$
### Corollary
If $X_{i}$ as above are IID with $X_{i}\sim \mathrm{Bern}\left( \frac{\lambda}{n} \right)$ then:
$$
\frac{1}{2} \lVert P_{S_{n}} - \Pi_{\lambda} \rVert ^{2}_{TV} \leq D_{e}(P_{S_{n}}||\Pi_{\lambda}) \leq \frac{ \lambda^{2} }{ n }
$$
for all $n$, where $\lVert \cdot \rVert_{TV}$ is [[Information Theory/Total Variation Distance]].
#### Proof
Apply [[Information Theory/Pinsker's Inequality]].
### Corollary
$$
H(\mathrm{Po}(\lambda)) = \sup \{ H(P) :  \}
$$

