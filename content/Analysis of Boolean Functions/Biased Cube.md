The $p$-biased cube is the set $\{ -1,1 \}^{n}$ with measure $\mu_{p}$
where for each $x\in \{ -1,1 \}^{n}$ we have $\mathbb{P}(x_{i}=-1)=p$, $\mathbb{P}(x_{i}=1)=q=1-p$ 
and $x_{i}$ are all independent.
We can also have the biased cube on $\{ 0,1 \}^{n}$ where now $\mathbb{P}(x_{i}=1)=p$ instead.

In the case of $\{ -1,1 \}^{n}$ we define:
$$
\mu=q-p = 1-2p
$$
$$
\sigma=2\sqrt{ pq }
$$
To normalize $x$ we introduce $\phi(x)$ where 
$$
\phi_{i}(x)=\frac{ x_{i}-\mu }{ \sigma }
$$
We will also write $\phi(t)=\frac{ t-\mu }{ \sigma }$ and for $A\subseteq[n]$
$$
\phi_{A}(x) = \prod_{i\in A}\phi_{i}(x)
$$
(which are the [[Analysis of Boolean Functions/Character]]s for this group)
For any $f,g:\{ -1,1 \}^{n}\to \mathbb{R}$ write
$$
\braket{ f | g } = \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} f(x)g(x)
$$
Also define for $r \in[1,\infty]$:
$$
\lVert f \rVert _{r} = \left( \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} \lvert f(x) \rvert ^{r} \right)^{1/r}
$$
### Convention
Sometimes we will write $f^{(p)}(x)$ to signify that all expectations should be considered in the $p$-biased case.
### Lemma
For any $A,B\subseteq[n]$ we have 
$$
\braket{ \phi_{A} | \phi_{B} } = \delta_{AB}
$$
#### Proof
$$
\begin{align}
\braket{ \phi_{A} | \phi_{B} } &= \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} \prod_{i\in A}\phi_{i}(x) \prod_{i\in B}\phi_{i}(x) \\
 & = \prod_{i\in A\triangle B} \mathop{\Large\mathbb{E}}\limits_{x \sim \mu_{p}} \phi_{i}(x) \cdot \prod_{i\in A\cap B} \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} \phi_{i}(x)^{2} \\
 & = \delta_{AB}
\end{align}
$$
### Lemma
Let $f:\mathbb{R}^{n}\to \mathbb{R}$ be a multilinear function.
Then
$$
\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}}f(x) = f(\mu,\mu,\dots,\mu)
$$
#### Proof 1
Write
$$
f=\sum_{A}\theta_{A}x_{A}
$$
where $\theta_{A}$ is the [[Analysis of Boolean Functions/Discrete Fourier Transform on Boolean Functions]] of $f$.
Then
$$
\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} x_{A} = \prod_{i\in A}\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}}x_{i} = \mu^{\lvert A \rvert } = x_{A}(\mu, \dots,\mu)
$$
#### Proof 2
Write 
$$
f=\sum_{A}\hat{f}(A)\phi_{A}
$$
where $\hat{f}$ is the [[Analysis of Boolean Functions/Discrete Fourier Transform on the Biased Cube]] of $f$.
Then
$$
\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} \phi_{A}(x) = \prod_{i\in A} \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} \phi_{i}(x) = \delta_{\varnothing A}=\phi_{A}(\mu, \dots,\mu)
$$
because $\phi(\mu)=0$.
#### Proof 3
By induction on $n$.
$$
\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} f(x)=\mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} (qf(x_{n\to 1} + p f(x_{n\to-1}))) = \mathop{\Large\mathbb{E}}\limits_{x\sim \mu_{p}} f(x_{n\to \mu}) = f(\mu, \dots, \mu)
$$
where we used multilinearity in the last coordinate and the induction hypothesis.



