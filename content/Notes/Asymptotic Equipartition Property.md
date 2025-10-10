A [[Notes/Source]] $X_{1},X_{2},\dots$ satisfies the Asymptotic Equipartition Property (AEP) with constant $H\geq 0$ if 
For all $\epsilon>0$ 
there is some $n_{0}\in \mathbb{N}$ 
such that for all $n\geq n_{0}$ 
there is a set $T_{n}\subseteq \Sigma^{n}$ and:
$$
P((X_{1},\dots,X_{n})\in T_{n})>1-\epsilon
$$
$$
2^{-n(H+\epsilon)}\leq P(x_{1},\dots,x_{n})\leq 2^{-n(H-\epsilon)}
$$
for all $(x_{1},\dots x_{n})\in T_{n}$

$T_{n}$ is called a typical set.


### Definition 2
A [[Notes/Source]] $X_{1},X_{2},\dots$ satisfies AEP if for some $H\geq 0$
$$
-\frac{1}{n}\log P(X_{1},\dots,X_{n})\to^pH
$$
where $\to ^{p}$ means 'converges in probability'. So we can take very different values for large $n$, but only on a set of small probabilities

This second definition comes from [[Notes/Shannon's 1st coding theorem]]

### Proposition
A [[Notes/Bernoulli Source]] satisfies AEP with information rate $H(X)$ for $H(X)$ [[Notes/Mathematical Entropy]].
