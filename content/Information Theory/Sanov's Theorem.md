Let $\hat{P}_{n}$ be the empirical distribution of IID [[Random Variable]]s $X_{1}^{n}$,
who follow a distribution $Q:A\to[0,1]$ with full [[Support]] on $A$; $\lvert A \rvert=m$.
Then for any $E\subseteq \mathcal{P}$ [[Probability Simplex]]:

$$
Q^{n}(\hat{P}_{n}\in E) \leq (n+1)^{m} 2^{-n\inf_{P\in E}D(P||Q)}
$$

Moreover, if $E$ is equal to the [[Closure]] of its own [[Interior]], then:

$$
\lim_{n\to \infty} -\frac{1}{n} \log Q^{n} (\hat{P}_{n}\in E) = D(P^{*}||Q)
$$

where $P^{*}\in E$ achieves $D(P^{*}||Q)=\inf_{P\in E}D(P||Q)$.
