
$$
H(X|Y=y)=-\sum_{x\in \Sigma_{1}}P(X=x|Y=y)\log P(X=x|Y=y)
$$
$$
H(X|Y)=\sum_{y\in \Sigma_{2}}P(Y=y)H(X|Y=y)
$$
### Lemma
[[XNotes/Joint Entropy]]
$H(X,Y)=H(X|Y)+H(Y)$
#### Proof
$$
\begin{align}
H(X|Y) & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(X=x|Y=y)P(Y=y)\log P(X=x|Y=y)\\
 & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(X=x,Y=y)\log \frac{P(X=x,Y=y)}{P(Y=y)}\\
 & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(X=x,Y=y)\log P(X=x,Y=y) \\
 & \quad %quad
\quad %quad
\quad 
 +\sum_{y}\left( \sum_{x}P(X=x,Y=y) \right)\log P(Y=y) \\
 & =H(X,Y)-H(Y)
\end{align}
$$
### Corollary 
$H(X|Y)\leq H(X)$ with equality iff $X$ and $Y$ are independent.

### Lemma
$H(X|Y)\leq H(X|Y,Z)+H(Z)$
#### Proof
We expand $H(X,Y,Z)$ in two different ways:
$H(X,Y,Z)=H(Z|X,Y)+H(X|Y)+H(Y)$
$H(X,Y,Z)=H(X|Y,Z)+H(Z|Y)+H(Y)$
Thus
$$
H(X|Y)\leq H(X|Y,Z)+H(Z|Y)\leq H(X|Y,Z)+H(Z)
$$
