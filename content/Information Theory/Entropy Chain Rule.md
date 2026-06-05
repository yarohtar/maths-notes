Let $X_{1},X_{2},\dots,X_{n}$ be [[Probability/Random Variable]]s
Then the [[Information Theory/Joint Entropy]] $H(X_{1},\dots,X_{n})$ 
is the sum of [[Information Theory/Mathematical Entropy]] $H(X_{1})$ 
and [[Information Theory/Conditional Entropy]] $H(X_{i+1}|X_{i})$ for $i=1,\dots,n-1$:
$$
H(X_{1},\dots,X_{n}) = H(X_{1}) + H(X_{2}|X_{1}) + H(X_{3}|X_{2}) + \dots + H(X_{n}|X_{n-1})
$$
Note that there are $n!$ ways to expand.

### Proof
Suppose $X$ and $Y$ are [[Probability/Random Variable]]s
Then expand:
$$
\begin{align}
H(X|Y) & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(x|y)P(y)\log P(x|y)\\
 & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(x,y)\log \frac{P(x,y)}{P(y)}\\
 & =-\sum_{y\in \Sigma_{2}}\sum_{x\in \Sigma_{1}}P(x,y)\log P(x,y) +\sum_{y}\left( \sum_{x}P(x,y) \right)\log P(y) \\
 & =H(X,Y)-H(Y)
\end{align}
$$
Generalization follows from this.