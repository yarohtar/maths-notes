A [[Probability/Random Variable]] $X$ taking values in $\{ 0,1,\dots,n \}$
follows the binomial distribution with parameter $p$ if:
$$
\mathbb{P}(X=k) = \binom{ n }{ k }p^{k}(1-p)^{n-k}
$$
We write
$$
X\sim \mathrm{Bin}(n,p)
$$
### Theorem
If $X_{1},X_{2},\dots X_{n}$ are IID [[Probability/Random Variable]]s 
following the [[Information Theory/Bernoulli Distribution]] $X_{i}\sim \mathrm{Bern\left( \frac{\lambda}{n} \right)}$ then:
$$
S_{n} = \sum_{i=1}^{n} X_{i} \sim \mathrm{Bin}\left( n,\frac{\lambda}{n} \right)
$$
and 
$$
S_{n} \to Z\sim \mathrm{Po}(\lambda)
$$
where $\mathrm{Po}$ is the [[Information Theory/Poisson Distribution]].
#### Proof
Special case of [[Information Theory/Poisson Approximation]].
