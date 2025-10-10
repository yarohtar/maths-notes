$X$ and $Y$ are random variables taking values in $\Sigma$, $\lvert \Sigma \rvert=m$
Let $p=P(X\neq Y)$
then
$$
H(X|Y)\leq H(p)+p\log(m-1)
$$

#### Proof
Let 
$$
Z=\begin{cases}
1 & \text{if }X\neq Y \\
0 & if X=Y 
\end{cases}
$$
$P(Z=1)=p$ and $P(Z=0)=1-p$
By [[Notes/Conditional Entropy]]
$$
H(X|Y)\leq H(X|Y,Z)+H(Z)=H(X|Y,Z)+H(p)
$$
Now:
$H(X|Y=y,Z=0)=0$
$H(X|Y=y,Z=1)\leq \log(m-1)$ since $m-1$ choices for $X$ remain.
So:
$$
\begin{align}
H(X|Y,Z) & =\sum_{y,z}P(Y=y,Z=z)H(X|Y=y,Z=z) \\
 & \leq \sum_{y}P(Y=y,Z=1)\log(m-1) \\
 & =P(Z=1)\log(m-1) \\
 & =p\log(m-1)
\end{align}

$$
