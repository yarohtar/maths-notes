For [[Probability/Random Variable]]s $X$ and $Y$ define the conditional entropy
$$
H(Y|X) = \mathbb{E}(-\log P(Y|X))
$$
where $P(Y|X)$ is [[Information Theory/Random Probability of Random Variable]].
Expanding:
$$
H(X|Y=y)=-\sum_{x\in \Sigma_{1}}P(x|y)\log P(x|y)
$$
$$
H(X|Y)=\sum_{y\in \Sigma_{2}}P(y)H(X|Y=y)
$$
[[Information Theory/Entropy Chain Rule]]
### Lemma
[[Information Theory/Joint Entropy]] satisfies
$$
H(X,Y)=H(X|Y)+H(Y)
$$
#### Proof
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
