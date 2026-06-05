Let $f:\mathbb{R}^{n}\to \mathbb{R}$ be a multilinear function.
Then
$$
\frac{d}{d\mu} \mathop{\mathbb{E}}f^{(p)} = \frac{1}{\sigma} \sum_{i=1}^{n} \hat{f}^{(p)}(\{ i \})
$$
where $f^{(p)}$ is always taken to be on the $p$-[[Analysis of Boolean Functions/Biased Cube]].
#### Proof
We have 
$$
\mathop{\mathbb{E}}f^{(p)} = f(\mu, \dots, \mu)
$$
from the $p$-[[Analysis of Boolean Functions/Biased Cube]]
Thus write 
$$
\begin{align}
\frac{d}{d\mu}\mathop{\mathbb{E}}f^{(p)}  & = \sum_{i=1}^{n} \frac{\partial}{\partial x_{i}} f(\mu, \dots, \mu) \\
 & = \sum_{i=1}^{n} \frac{1}{2}(f(\bar{\mu}_{i\to 1})-f(\bar{\mu}_{i\to-1})) \\
 & = \frac{1}{\sigma}\sum_{i=1}^{n} D_{i}f(\bar{\mu}) \\
 & = \frac{1}{\sigma}\sum_{i=1}^{n} \mathop{\mathbb{E}}D_{i}f^{(p)}
\end{align}
$$
where $D_{i}$ is the [[Analysis of Boolean Functions/Discrete Derivative]].
But
$$
D_{i}f^{(p)}=\sum_{A\ni i} \hat{f}^{(p)}(A)\phi_{A\setminus \{ i \}} 
$$
so because $\mathop{\mathbb{E}}\phi_{A\setminus \{ i \}}=0$ unless $A\setminus \{ i \}=\varnothing$ we get
$$
\mathop{\mathbb{E}}D_{i}f^{(p)} = \hat{f}^{(p)}(\{ i \})
$$
### Corollary
Let $f:\{ -1,1 \}^{n}\to \{ -1,1 \}$ be monotone and $I$ be the [[Analysis of Boolean Functions/Influence]].
Then
$$
\frac{d}{dp}\mathbb{P}(f^{(p)}(x)=-1) = \frac{1}{\sigma^{2}} I(f^{(p)})
$$
#### Proof
$$
\begin{align}
\frac{d}{dp}\mathbb{P}(f^{(p)}(x) =-1) & =\frac{d}{dp} \frac{ 1-\mathop{\mathbb{E}}f^{(p)} }{ 2 } \\
 & =-\frac{1}{2} \frac{d}{d\mu} \mathop{\mathbb{E}}f^{(p)} \frac{ d\mu }{ dp } \\
 & = \frac{d}{d\mu}\mathop{\mathbb{E}}f^{(p)} \\
 & =\frac{1}{\sigma}\sum_{i=1}^{n} \mathop{\mathbb{E}}D_{i}f^{(p)}
\end{align}
$$
Since $f$ is monotone, we have $D_{i}f^{(p)}(x)\in \{ 0,\sigma \}$ so we can write:
$$
\begin{align} 
\frac{d}{dp}\mathbb{P}(f^{(p)}(x)=-1) & = \frac{1}{\sigma^{2}} \sum_{i=1}^{n} \mathop{\mathbb{E}} \lvert D_{i}f^{(p)} \rvert ^{2} \\
 & =\frac{1}{\sigma^{2}} \sum_{i=1}^{n} \lVert D_{i}f^{(p)} \rVert _{2}^{2} \\
 & = \frac{1}{\sigma^{2}} \sum_{i=1}^{n} \mathrm{Inf}_{i}f^{(p)} \\
 & = \frac{1}{\sigma^{2}}I(f^{(p)})
\end{align}
$$
