Let $X$ and $Y$ be [[Probability/Random Variable]]s taking values in $\Sigma$, $\lvert \Sigma \rvert=m$
Let $p=\mathbb{P}(X\neq Y)$
Then
$$
H(X|Y)\leq H(p)+p\log(m-1)
$$
The interpretation we might have is that $p$ is the probability of making an error
when trying to guess $X$ using a random variable $Y$. 
#### Proof
Let 
$$
Z=\begin{cases}
1 & \text{if }X\neq Y \\
0 & \text{if } X=Y 
\end{cases}
$$
$P(Z=1)=p$ and $P(Z=0)=1-p$
By [[Information Theory/Conditional Entropy]]
$$
H(X|Y)\leq H(X|Y,Z)+H(Z)=H(X|Y,Z)+H(p)
$$
Now:
$$
\begin{gather}
H(X|Y=y,Z=0)=0\\
H(X|Y=y,Z=1)\leq \log(m-1)
\end{gather}
$$
since $m-1$ choices for $X$ remain.
So:
$$
\begin{align}
H(X|Y,Z) & =\sum_{y,z}P(Y=y,Z=z)H(X|Y=y,Z=z) \\
 & \leq \sum_{y}P(Y=y,Z=1)\log(m-1) \\
 & =P(Z=1)\log(m-1) \\
 & =p\log(m-1)
\end{align}

$$
